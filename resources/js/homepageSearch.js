(function () {
    "use strict";
    window.addEventListener("load", (event) => {
        navigator.geolocation.getCurrentPosition(function (position) {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;

            return [lat, long];
        });
    });
})();
