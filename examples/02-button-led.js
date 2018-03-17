const led = NodeMCU.D3;
const button = NodeMCU.D4;
const isOn = false;

// Ensure it's off by default.
led.write(false);

// Setup button.
pinMode(button, 'input_pullup');
setWatch(function() {
  console.log('Button pressed!');
  isOn = !isOn;
  led.write(isOn);
}, button, { repeat: true, edge: 'rising', debounce: 50 });
