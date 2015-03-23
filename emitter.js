var mqtt    = require('mqtt');
var client  = mqtt.connect('tcp://176.58.96.63');

client.on('connect', function () {
  client.subscribe('general');
  client.publish('general', 'Hello mqtt from emitter');
  client.end();
});
