function addTrackPoint (lat, lon) {
	var d = new Date();
	var t = d.getTime()
	trackPoints.push({"lat":lat,"lon":lon,"time": t});
	console.log("add track point on: lat: "+lat+" lon: "+lon);
}