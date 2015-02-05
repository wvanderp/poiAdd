//here we have the default settings variable 
//to-do we need to save this in cookies or in memory
var settings = {
	"follow": true,
	"track": true
};

function storeSettings() {
	//store setting 
}

function setFollow (_f) {
	console.log("follow is set to "+_f);
	settings.follow = _f;
	storeSettings();
}

function setTrack (_t) {
	console.log("track is set to "+_t);
	settings.track = _t;
	storeSettings();
}