// var mqtt = require('mqtt');
// var time = require('time');
//
// var now = new time.Date();
//
// var broker = '176.58.96.63';
// var port = 1883;
// var message = now.toString() + ' - This is the message'
// var topic = 'test/mqtt'
//
// var client = mqtt.connect(port, broker);
//
// client.publish(topic, message);
// client.end();


var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://176.58.96.63');

client.on('connect', function () {
  client.subscribe('general');
  client.publish('general', 'Hello mqtt');
});

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString());
  client.end();
});


//
// client.publish("general", "Esto es un mensaje");
// console.log("Mensaje enviado");
