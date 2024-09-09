const path = require('path');
const fs = require('fs');


exports.get = (file) => {
    return new Promise((r) => {
        var data = require(path.join(__dirname, `../data/${file}.json`));
        r(data);
    })
}

exports.update = (file, data) => {
    return new Promise((r) => {
        fs.writeFile(path.join(__dirname, `../data/${file}.json`), JSON.stringify(data), (err) => {
            if (err) throw err;
            r(true);
        });
    })
}