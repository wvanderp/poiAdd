var userIcon = L.icon({
	iconUrl: "/img/marker.png",
	iconSize: [96/6,96/6]
})

var marker;
var circle;

function updateLoc(){
	navigator.geolocation.getCurrentPosition(succes, fail);

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


			map.setView([lat, lon], map.getZoom());
			map.invalidateSize();
			console.log("current loc: lat:"+lat+" lon:"+lon);
	}

	function fail (err) {
		alert('ERROR(' + err.code + '): ' + err.message);
	}

	setTimeout(updateLoc, 5000);
}
