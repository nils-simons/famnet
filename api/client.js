const db = require('../app/db');

exports.create = (app) => {
    app.post('/api/client', async (req, res) => {
        const data = req.body
        const clients = await db.get('clients');

        clients.push({
            name: data.name,
            ip: data.ip,
            mac: null,
            connected: null,
            created_at: new Date(),
            last_time_connected: null,
        });

        await db.update('clients', clients);

        res.json({
            status: 200
        })
    });
};

exports.delete = (app) => {
    app.delete('/api/client', async (req, res) => {
        const data = req.body
        const clients = await db.get('clients');

        const new_clients = clients.filter(obj => obj['ip'] !== data.ip);

        await db.update('clients', new_clients);

        res.json({
            status: 200
        })
    });
};

exports.get = (app) => {
    app.get('/api/clients', async (req, res) => {
        const clients = await db.get('clients');
        res.json({
            status: 200,
            data: clients
        })
    })
};