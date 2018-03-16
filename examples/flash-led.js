const led = NodeMCU.D3;
let isOn = false;

setInterval(() => {
  isOn = !isOn;
  led.write(isOn);
}, 1000)
