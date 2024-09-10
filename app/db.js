const path = require('path');
const fs = require('fs');


exports.get = (file) => {
    return new Promise((r) => {
        try {
            const data = fs.readFileSync(path.join(__dirname, `../data/${file}.json`), 'utf8');
            const jsonData = JSON.parse(data);
            r(jsonData);
        } catch (err) {
            console.error("Error reading or parsing file:", err);
            r(false);

        }
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