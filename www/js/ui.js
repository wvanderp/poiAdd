//this file contains all the ui event listeners

function uiEvents () {
	// $("#main").addClass("menu-open");
	
	//menu opener in the header
	$("#menu-button").click(function(){
		$("#main").addClass("menu-open");
		$("#menu-button").addClass("hidden");
	});

	//the overlay for closing the menu
	$("#overlay").click(function(){
		$("#main").removeClass("menu-open");
		$("#menu-button").removeClass("hidden");
	});

	//the ui code for the follow button in the side menu
	$("#followBtn").click(function(){
		//changing the text on the button
		//mabey needs to be moved
		if (settings.follow) {
			$("#followBtn").text("follow");
		}else{
			$("#followBtn").text("don't follow");
		};
		//setting the settings
		setFollow(!settings.follow);
	});

	//accept on the accept location menu
	$("#acceptWindow #accept").click(function(){
		addTagSelectWindow();
		$("#acceptWindow").addClass("hidden");
	});

	//denied on the accept location menu
	$("#acceptWindow #denied").click(function(){
		removePoint();
		$("#acceptWindow").addClass("hidden");
	});
}

function addTagSelectFunc(){
	//tag selection button
	// console.log("add func");
	$(".tagSelectBtn").click(function(){
		var lable = addUnderScore(this.innerHTML);
		$("#tagSelectWindowBtn").empty();
		addValBtn(lable);
	});
}