---
layout: post
title: "Hardware Access via JavaScript"
date: 2014-06-04 20:59:31 -0500
comments: true
categories:
---

Hardware access via web browsers is becoming integral of web technologies.
Web technology platforms are used more to develop apps that live outside of the
web. Faster browser release cycles has to helped bring hardware access to web browsers.

Portable devices now come with cameras, microphones, gyroscopes, GPS, light sensors
and of course, the touch screen. Apps developed for the device have access to the device hardware.

But that hasn’t stopped the people creating web technologies to move forward to
have access to the hardware. Now we can access hardware using JavaScript, HTML and CSS(somewhat)!

Below I will go over on some of the API’s that have access to your hardware.

### GeoLocation
**GeoLocation** will read your location and return position coordinates, its
longitude and latitude.

```js
navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position.coords.latitude, position.coords.longitude);
});

navigator.geolocation
navigator.geolocation.getCurrentPosition(success, error, options)
var latitude  = position.coords.latitude;
var longitude = position.coords.longitude;

id = navigator.geolocation.watchPosition(success, error, options);
navigator.geolocation.clearWatch(id);
```


### Detect Device Orientation
The device orientation returns the values collected by the Gyroscope.

{% include_code hardware-access/orientation-1.js %}

{% include_code hardware-access/orientation-2.js %}

To explain:

* **alpha** - rotation of z-axis - how far the device is rotated around a line perpendicular to the device.
* **beta** - rotation of x-axis - how far the device has tipped forward to backward
* **gamma** - rotation of y-axis - how far the device has tipped left or right

### Read More:
[`deviceOrientation`](https://developer.mozilla.org/en-US/docs/Web/Reference/Events/deviceorientation) (Mozilla)


### Camera or Microphone Access

`getUserMedia` prompts the user for access to the media device.

```js
navigator.getUserMedia(constraints, successCallback, errorCallback);
```

{% include_code hardware-access/getUserMedia.js %}

#### Read More
* [`getUserMedia`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator-42)
* [`LocalMediaStream`](https://developer.mozilla.org/en-US/docs/WebRTC/MediaStream_API#LocalMediaStream)



### Battery API
The **Battery API** provides information about the systems battery. This can be
used to measure the battery usage that your app is using. This can be used to
manage your apps resources, what to trigger and what not.

{% include_code hardware-access/battery-api.js %}

#### Read More:
[`BatteryManager`](https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager)


### Vibrate
The method pulses the vibration hardware on the device. You can send a pattern for
the vibration you want to trigger. The pattern alternates from the duration of the
vibration and the pause.

```js
// heartbeat pattern (short vibration (100), short pause(20), longer pause(500))
window.navigator.vibrate(100,20,100,500);
```

A fun way to implement it, is by synching it to transitions and animations on screen.

#### Read More:
[`Navigator.vibrate()`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator-31)


### Ambient Light
Ambient light provides information from the phot sensors about the light levels
near the device.

```js
window.addEventListener('devicelight', function(event) {
  console.log(event.value);
});
```
A creative approach to the Ambient light, is to have a story adjust the mood depending
on the amount of light in the room.


### Touch Events
Touch Events are easy to overlook as hardware access since touch is the way we input
on portable devices. Multi touch and gestures are exclusive input events to touch screens.

I'm not going expand here about touch devices, but you can read more about it:
* [W3 ](http://www.w3.org/TR/2013/REC-touch-events-20131010/)
* [Mozilla: Touch Events](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Touch_events)
* [hammer.js](http://eightmedia.github.io/hammer.js/) - JavaScript library with various touch events.

### FileReader
A brief mention is being able to read the files on the device. [Coremob Camera](https://github.com/coremob/camera)
is an attempt to build a camera using web technologies.

### More Reading
* [Mobile HTML5 Compatability Table](http://mobilehtml5.org/)
* [Mobile Web Best Practices](http://www.w3.org/TR/2010/REC-mwabp-20101214/)