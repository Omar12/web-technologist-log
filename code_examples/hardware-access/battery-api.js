var battery = navigator.battery;

var updateBatteryStatus = function() {
  console.log("Battery status: " + battery.level *100 + " %");

  if(battery.charging) {
    console.log("Battery is charging.");
  }
}

battery.addEventListener("chargingchange", updateBatteryStatus);
battery.addEventListener("levelchange", updateBatteryStatus);
updateBatteryStatus();