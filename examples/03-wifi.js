const wifi = require('Wifi');
const http = require('http');

const led = NodeMCU.D3;
const button = NodeMCU.D4;
const url = 'http://instabuddy.herokuapp.com/channel/roboticajs/remote-random';
let ip;

// Wifi login:
const ssid = 'SSID';
const pass = 'PASSWORD';

// Ensure it's off by default.
led.write(false);

// Setup button.
pinMode(button, 'input_pullup');
setWatch(function() {
  console.log('Button pressed!');
  led.write(true);
  sendRequest();
}, button, { repeat: true, edge: 'rising', debounce: 50 });

function sendRequest () {
  http.get(url, function(res) {
    res.on('data', function(data) {
      console.log('Request sent');
      led.write(false);
    });

    res.on('error', function(res) {
      console.log('Request error:', res);
      led.write(false);
    });
  });
}

function onWifi (err) {
  if (err) {
    console.log('WIFI ERROR:', err);
    return;
  }

  ip = wifi.getIP();
  console.log('Connected to WIFI', ip);
  led.write(true);
}

// This is a special function automatically executed at boot time.
// It's the way to go to get a network connection after saving code to Flash.
function onInit() {
  console.log('Connect to WIFI on', ssid);
  wifi.connect(ssid, {password: pass}, onWifi);
}
