const led = NodeMCU.D3;
const button = NodeMCU.D4;

// Ensure it's off by default.
led.write(false);

// Setup button.
pinMode(button, 'input_pullup');
setWatch(function() {
  console.log('Button pressed!');
  led.write(true);
}, button, { repeat: true, edge: 'rising', debounce: 50 });
