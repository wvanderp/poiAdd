//here you have the code for the placing of a point on the map
var bizmark;

function addPoint(e){
	console.log("adding pointer")
	$("#acceptWindow").removeClass("hidden");
	if (typeof(bizmark) != "undefined") {
		map.removeLayer(bizmark);
	}
	bizmark = L.marker(e.latlng).addTo(map);
}

function removePoint () {
	if (typeof(bizmark) != "undefined") {
		map.removeLayer(bizmark);
	}
	$("#acceptWindow").addClass("hidden");
}