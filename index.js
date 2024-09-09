const express = require('express');

const app = express();


app.use(express.static('public', { extensions: ['html'] }));
app.use(express.json());


require('./api/router').router(app);

const db = require('./app/db');
const ping = require('./app/ping')
const mac = require('./app/mac')


let connected_clients;

setInterval(async () => {
    connected_clients = 0;
    var data = await db.get('clients')

    for (let i = 0; i < data.length; i++) {
        const client = data[i];
        var pingRes = await ping.ping(client.ip)

        if (!pingRes) {
            data[i]['connected'] = false;
            await db.update('clients', data);
            continue;
        }

        connected_clients++;
        data[i]['connected'] = true;
        data[i]['last_time_connected'] = new Date();
        data[i]['mac'] = await mac.getMac(client.ip);
        await db.update('clients', data);
    }

    console.log(`Connected clients: ${connected_clients}`);
}, 1000 * 60)



app.listen(1280, () => {
    console.log('Server is running on port 1280');
});