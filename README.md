# espruino-workshop
Espruino workshop guide and code samples.

## Welcome!
In this workshop you'll learn how to start playing with *NodeMCU v1.0* and *Espruino*.

Take a look at the [presentation slides](https://docs.google.com/presentation/d/1fHHawzTsXKqORFoKsoPeVuUxjrIkTUp45e9mtztU_-Q/edit?usp=sharing)
for a general reference about **NodeMCU** and **Espruino**.

## Install Espruino Web IDE

The easiest way to write programs into your *NodeMCU* with Espruino is using *Espruino Web IDE*.
You can download it from the [Chrome Web Store](https://chrome.google.com/webstore/detail/espruino-web-ide/bleoifhkdalbjfbobjackfdifdneehpo).

![](https://cldup.com/2-UW4Wvky--3000x3000.png)

## Check device connection

Open *Espruino Web IDE* and click on the connect button:

![](https://cldup.com/U6vIhXT0ha-2000x2000.png)

It will display a list of devices.

Take a look at the list and close it.

Connect your *NodeMCU* to your computer using the USB cable.

Open the devices list once again and check if new devices are shown.

![](https://cldup.com/fZ1uVOsICn-2000x2000.png)

If new devices are shown then you already can communicate with your NodeMCU, yay!

In case no new devices where shown, follow the next step to install the needed drivers.

## Install drivers

If your computer can't already communicate with the NodeMCU it will need
drivers to be able to do it.

Download drivers from:
http://www.ftdichip.com/Drivers/VCP.htm

After installing you might need to reboot your computer.

## Flashing Espruino

In this step we're going to write the *Espruino* firmware into the *NodeMCU* microcontroller.

Download [FlasherJS](https://github.com/thingsSDK/flasher.js).

![](https://cldup.com/POJ4rlJVNA-3000x3000.png)

Using the frist dropdown select the correct device where your NodeMCU is located.

Click the _Flash!_ button to starting flashing!

Normally the latest version of Espruino available to FlasherJS will be selected
by default on the second dropdown.

## Connecting to Espruino

Open **Espruino Web IDE** and list your available devices.

Select the TTY port where your NodeMCU is located.

If everything worked OK the connection button will change to indicate
you're already connected to the NodeMCU and you'll see a cursor on the
code editor on the left pane.

![](https://cldup.com/x33CbeBWPB-3000x3000.png)

## Check if it works

If you can write on the console and you get output, then everything is working!

Try something like:

![](https://cldup.com/emaS8d29GT-2000x2000.png)

## Keep hacking!

Now you're ready to try running the examples on this repo.

From there I recommend you to visit the [Espruino modules list](https://www.espruino.com/Modules)
to get some ideas to create new things.

Enjoy!
