var mqtt    = require('mqtt');
var mraa = new require("mraa");
console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the Intel XDK console
var client  = mqtt.connect('tcp://176.58.96.63');
var myInput = new mraa.Gpio(13); //LED hooked up to digital pin 13 (or built in pin on Galileo Gen1 & Gen2)
myInput.dir(mraa.DIR_OUT); //set the gpio direction to output

client.on('connect', function () {
  client.subscribe('sensor');
  if (myInput.read() == 1){
    client.publish('sensor', str_value);
    console.log("BtN!!! ==========================");
  }
}
