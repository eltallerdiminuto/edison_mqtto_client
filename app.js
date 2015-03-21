var mqtt = require('mqtt');
var time = require('time');

var now = new time.Date();

var broker = '176.58.96.63';
var port = 1883;
var message = now.toString() + ' - This is the message'
var topic = 'test/mqtt'

var client = mqtt.createClient(port, broker);

client.publish(topic, message);
client.end();
