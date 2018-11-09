var map;
var marker;

function changeLocation() {
	let location = document.getElementById('destination').value;
	console.log(location)

	let el = document.getElementById('map');

	el.setAttribute('src', `https://maps.google.com/maps?q=${location}&t=&z=13&ie=UTF8&iwloc=&output=embed`);
}

function changeCoord() {
	let latitude = parseFloat(document.getElementById('lat').value);
	let longtitude = parseFloat(document.getElementById('long').value);

	let el = document.getElementById('map');

	el.setAttribute('src', `https://maps.google.com/maps?q=${latitude},${longtitude}&t=&z=13&ie=UTF8&iwloc=&output=embed`);
}
