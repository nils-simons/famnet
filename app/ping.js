const ping = require('ping');

exports.ping = async (target) => {
    ping.sys.probe(target, function(isAlive){
        var msg = isAlive ? 'host ' + target + ' is alive' : 'host ' + target + ' is dead';
        console.log(msg);
    });
}