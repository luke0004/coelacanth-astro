---
title: "Christmas in Terschelling"
date: 2023-12-31
categories: ["Logbook", "Tinker"]
tags: ["Netherlands"]
description: "It's a tradition to sail to the Frisian island of Terschelling over the days between Christmas and New Year."
---

It's a tradition to sail to the Frisian island of Terschelling over the days between Christams and New Year. Winter storms howl over the North Sea. The ships present extensive festive lights, and when the year ends, the horns of the big ships welcome the new year sounding all over the place.

<figure>

![](../../assets/20231226_Terschelling-christmas-scaled.jpg)

<figcaption>

Waddenhaven Terschelling at Christmas, 2023. The oldest lighthouse of the Netherlands, Brandaris, flashes his light since 1594.

</figcaption>

</figure>

I played around with a simple wire antenna in the mast to receive short-wave transmissions of weather data using a USB dongle on the Mac ([RTL-SDR V4](https://www.rtl-sdr.com/v4/) with [SDR++](https://github.com/AlexandreRouma/SDRPlusPlus) or [fldigi](https://sourceforge.net/projects/fldigi/files/fldigi/) software). The received weather charts – for example the transmissions from [DWD Pinneberg](https://www.dwd.de/DE/fachnutzer/schifffahrt/funkausstrahlung/_functions/DownloadBox/Download_Box.html) or weatherfax from [Northwood](https://weatherfax.com/gya-northwood/) – look quite nice, even an ice chart of the Gulf of Bothnia…

Later, I built a simple 1:9 balun box with two 10 metre antenna wires that are connected by a coaxial cable to the RTL-SDR. A future project could be to program automated receiving of weather data transmissions on a Raspberry Pi decoding the RTTY (e.g. DWD transmissions on 7.646 MHz) and saving it as a text file with timestamp.

<figure>

![Winter storm in Terschelling](../../assets/terschelling-2023-scaled.png)

<figcaption>

Winter storm in Terschelling.

</figcaption>

</figure>

<figure>

![The cozy heat of the Dickinson Newport diesel heater.](../../assets/dickinson-heater-scaled.png)

<figcaption>

The cozy heat of the Dickinson Newport diesel heater.

</figcaption>

</figure>

<figure>

![Ice chart received by short-wave radio.](../../assets/ice-chart-scaled.png)

<figcaption>

Ice chart received by short-wave radio.

</figcaption>

</figure>

<figure>

![Weather chart](../../assets/weather-chart.png)

<figcaption>

Weather chart received by short-wave radio and a simple wire antenna in the mast.

</figcaption>

</figure>
