var mqtt    = require('mqtt');
var client  = mqtt.connect('tcp://176.58.96.63');

client.on('connect', function () {
  client.subscribe('general');
  // client.publish('general', 'Hello mqtt');
});

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString());
  // client.end();
});
