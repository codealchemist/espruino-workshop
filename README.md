# espruino-workshop
Espruino workshop guide and code samples.

## Welcome!
In this workshop you'll learn how to start playing with *NodeMCU v1.0* and *Espruino*.

## Install Espruino Web IDE

The easiest way to write programs into your *NodeMCU* with Espruino is using *Espruino Web IDE*.
You can download it from the [Chrome Web Store](https://chrome.google.com/webstore/detail/espruino-web-ide/bleoifhkdalbjfbobjackfdifdneehpo).

![](https://cldup.com/2-UW4Wvky--3000x3000.png)

## Check device connection

Open *Espruino Web IDE* and click on the connect button:

![](https://cldup.com/U6vIhXT0ha-2000x2000.png)

It will display a list of devices.

TODO: ADD DEVICES LIST SCREENSHOT.

Take a look at the list and close it.

Connect your *NodeMCU* to your computer using the USB cable.

Open the devices list once again and check if new devices are shown.

If new devices are shown then you already can communicate with your NodeMCU, yay!

In case no new devices where shown, follow the next step to install the needed drivers.

## Install drivers

In order for your computer to be able to talk to the NodeMCU microcontroller
they will need to speak the same language, so to speak.

Download drivers from:
http://www.ftdichip.com/Drivers/VCP.htm

Note that after installing the drivers you might need to reboot your computer.

## Flashing Espruino

In this step we're going to write the *Espruino* firmware into the *NodeMCU* microcontroller.

Download [FlasherJS](https://github.com/thingsSDK/flasher.js).

![](https://cldup.com/kML7xFTjX4-3000x3000.png)

Using the frist dropdown select the correct device where your NodeMCU is located.

Normally the latest version of Espruino available to FlasherJS will be selected
by default on the second dropdown.

Click the _Flash!_ button to starting flashing!

