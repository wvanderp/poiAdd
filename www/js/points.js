//here you have the code for the placing of a point on the map
var bizmark;

function addPoint(e){
	console.log("adding pointer at: "+e.latlng)
	$("#acceptWindow").removeClass("hidden");
	if (typeof(bizmark) != "undefined") {
		map.removeLayer(bizmark);
	}
	bizmark = L.marker(e.latlng).addTo(map);
	
	current_point.lat = e.lat;
	current_point.lon = e.lng;
}

function removePoint () {
	if (typeof(bizmark) != "undefined") {
		map.removeLayer(bizmark);
	}
}