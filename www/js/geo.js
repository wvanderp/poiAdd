var userIcon = L.icon({
	iconUrl: "/img/marker.png",
	iconSize: [96/6,96/6]
})

function updateLoc(){
	navigator.geolocation.getCurrentPosition(succes, fail);

	function succes (pos) {
			lat = pos.coords.latitude;
			lon = pos.coords.longitude;
			acc = pos.coords.accuracy;

			var marker = L.marker([lat, lon], {
				// icon:icon
			}).addTo(map);

			var circle = L.circle([lat, lon], acc, {
					color: 'bleu',
					fillColor: '#03f',
					fillOpacity: 0.3
			}).addTo(map);
			map.setView([lat, lon], map.getZoom());	
	}

	function fail (err) {
		alert('ERROR(' + err.code + '): ' + err.message);
	}

	setTimeOut(updateLoc, 5000);
}
