const db = require('../app/db');

exports.toggle = (app) => {
    app.post('/api/status/toggle', async (req, res) => {
        
        const data = await db.get('status');

        data.enabled = !data.enabled;

        await db.update('status', data);

        res.json({
            status: 200
        })
    })
}

exports.status = (app) => {
    app.get('/api/status', async (req, res) => {
        
        const data = await db.get('status');

        res.json({
            status: 200,
            data: data
        })
    })
}