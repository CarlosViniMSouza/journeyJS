const myGeo = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        myGeo.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    myGeo.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}
