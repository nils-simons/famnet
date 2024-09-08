const express = require('express');

const app = express();


app.use(express.static('public', { extensions: ['html'] }));



require('./app/ping').ping('');


app.listen(1280, () => {
    console.log('Server is running on port 1280');
});