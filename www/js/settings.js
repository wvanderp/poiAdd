//here we have the default settings variable 
//to-do we need to save this in cookies or in memory
var settings = {
	"follow": true
};

function setFollow (_f) {
	console.log("follow is set to"+_f);
	settings.follow = _f;
}