var mqtt    = require('mqtt');
var client  = mqtt.connect('tcp://176.58.96.63');
client.on('connect', function () {
  client.subscribe('barcode');
  var HID = require('node-hid');
  var devices = HID.devices();
  console.log(devices);
  var numbers=[1,2,3,4,5,6,7,8,9,0];
  var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","w","x","y","z"];
  var device = new HID.HID(devices[1]["path"]);
  var str_value = "";
  device.on("data",
    function(data){
      if(data[2]!=0){
        if(data[0]!=1){
          if(data[2]!=40){
           if(data[2]>29){
              str_value += numbers[data[2]-30];
            } else {
             str_value +=letters[data[2]-4];
           }
          }
        }
       else
       {
        console.log(str_value);
        client.publish('barcode', str_value);
        console.log("==========================");
        str_value = "";
       }
    }
  });
});
