const arp = require('node-arp');


exports.getMac = (ip) => {
    return new Promise((r) => {
        arp.getMAC(ip, (err, mac) => {
            if (err) {
                r(null);
            }
            r(mac);
        });
    })
    
}