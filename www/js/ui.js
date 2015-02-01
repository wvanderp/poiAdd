//this file contains all the ui event lisensers

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

	//the ui code for the follow button in the side menu
	$("#followBtn").click(function(){
		if (settings.follow) {
			$("#followBtn").text("follow");
		}else{
			$("#followBtn").text("dont follow");
		};
		setFollow(!settings.follow);
	});

	//acept on the acept location menu
	$("#acceptWindow #accept").click(function(){
		addTagSelectWindow();
	});

	//denied on the acept location menu
	$("#acceptWindow #denied").click(function(){
		removePoint();
	});
}

function addTagSelectFunc(){
	//tag selection buttton
	// console.log("add func");
	$(".tagSelectBtn").click(function(){
		var lable = this.innerHTML;
		$("#tagSelectWindowBtn").empty();
		addValBtn(lable);
	});
}