function uiEvents () {
	// $("#main").addClass("menu-open");
	
	//menu opener in the header
	$("#menu-button").click(function(){
		$("#main").addClass("menu-open");
	});

	//the overlay for closing the menu
	$("#overlay").click(function(){
		$("#main").removeClass("menu-open");
	});
	//in the menu
	$("#followBtn").click(function(){
		if (settings.follow) {
			$("#followBtn").text("follow");
		}else{
			$("#followBtn").text("dont follow");
		};
		setFollow(!settings.follow);
	});
}