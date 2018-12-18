let x = document.getElementById("info");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
    let el = document.getElementById('map')
    el.setAttribute('src', `https://maps.google.com/maps?q=${position.coords.latitude},${position.coords.longitude}&t=&z=13&ie=UTF8&iwloc=&output=embed`)
}

getLocation();
