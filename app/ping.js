const ping = require('ping');

exports.ping = async (target) => {
    return new Promise((r) => {
        ping.sys.probe(target, function(isAlive){
            r(isAlive);
        });
    })
}