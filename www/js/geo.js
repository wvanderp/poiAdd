var userIcon = L.icon({
	iconUrl: "/img/marker.png",
	iconSize: [96/6,96/6]
})

var map;

var marker;
var circle;

function initMap () {
	// create a map in the "map" div, set the view to a given place and zoom
	map = L.map('map', {
	    center: [0, 0],
	    zoom: 13,
	    zoomControl:false
	});
	// add an OpenStreetMap tile layer
	L.tileLayer('http://b.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	map.on('click', addPoint);

	navigator.geolocation.watchPosition(succes, fail, {"enableHighAccuracy": true,  "maximumAge": 7500, "timeout": 1000000});
}

function succes (pos) {
	lat = pos.coords.latitude;
	lon = pos.coords.longitude;
	acc = pos.coords.accuracy;

	if (typeof(circle) != "undefined") {
		map.removeLayer(marker);
		map.removeLayer(circle);
	}

	marker = L.marker([lat, lon]).addTo(map);

	circle = L.circle([lat, lon], acc, {
		color: 'bleu',
		fillColor: '#03f',
		fillOpacity: 0.3
	}).addTo(map);

	if (settings.follow){
		map.setView([lat, lon], map.getZoom());
	}
	

	map.invalidateSize();
	console.log("current loc: lat:"+lat+" lon:"+lon);
}

function fail (err) {
	alert('ERROR(' + err.code + '): ' + err.message);
}
