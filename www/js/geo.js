//this is all the code for the map and the location tracking.
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
	    zoom: 15,
	    zoomControl:false
	});
	// add an OpenStreetMap tile layer
	L.tileLayer('http://b.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	    attribution: '&copy; OpenStreetMap contributors'
	}).addTo(map);

	map.on('click', addPoint);

	// navigator.geolocation.watchPosition(succes, fail, {"enableHighAccuracy": true,  "maximumAge": 7500, "timeout": 1000000});
}

function succes (pos) {
	//get lat lon and acc from the position object
	lat = pos.coords.latitude;
	lon = pos.coords.longitude;
	acc = pos.coords.accuracy;

	//remove the marker and circle if they are present
	if (typeof(circle) != "undefined") {
		map.removeLayer(marker);
		map.removeLayer(circle);
	}

	//add the marker on the position of the device
	marker = L.marker([lat, lon]).addTo(map);

	//add circle for accuracy
	circle = L.circle([lat, lon], acc, {
		color: 'blue',
		fillColor: '#03f',
		fillOpacity: 0.3
	}).addTo(map);

	// if the setting for follow is set than move the map to the position of the device
	if (settings.follow){
		map.setView([lat, lon], map.getZoom());
	}
	
	//add location to the track of this run.
	if(settings.track){
		addTrackPoint(lat, lon);
	}
	
	//change the map size and log the position
	map.invalidateSize();
	console.log("current loc: lat:"+lat+" lon:"+lon);
}

function fail (err) {
	//give an error if anything fails
	console.log('ERROR(' + err.code + '): ' + err.message);
}
