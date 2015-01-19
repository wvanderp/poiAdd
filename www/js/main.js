
$( document ).ready(function(){
	// $("#main").addClass("menu-open");
	
	$("#menu-button").click(function(){
		$("#main").addClass("menu-open");
	});
	$("#overlay").click(function(){
		$("#main").removeClass("menu-open");
	});

	$(".mButton li").click(function(){
		$(".mButton li").siblings().addClass("submenu-open");
	});


	// create a map in the "map" div, set the view to a given place and zoom
	var map = L.map('map', {
	    center: [51.505, -0.09],
	    zoom: 13,
	    zoomControl:false
	});
	// add an OpenStreetMap tile layer
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	updateLoc();

})