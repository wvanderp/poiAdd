//this is all the code for selecting a tag for the point chosen

function addTagSelectWindow () {
	$("#tagSelectWindow").removeClass("hidden")
	addKeyBtn();
}

function addKeyBtn () {
	for (var k in tags) {
		$("#tagSelectWindowBtn").append('<div class="tagSelectBtn">'+k+'</div>');
	};
	addTagSelectFunc();
}


function addValBtn (k) {
	for (var v in tags[k]) {
		$("#tagSelectWindowBtn").append('<div class="tagSelectBtn">'+tags[k][v]+'</div>');
	};
}

var tags = {
	"tourism": [
		"information",
		"hotel",
		"attraction",
		"viewpoint",
		"picnic site",
		"camp site",
		"museum",
		"guest house",
		"artwork",
		"motel",
		"chalet",
		"hostel",
		"caravan site",
		"alpine hut",
		"zoo",
		"theme park",
		"wilderness hut",
		"apartment",
		"gallery",
		"hanami",
		"bed and breakfast"
	],
	"amenity": [
		"parking",
		"place of worship",
		"school",
		"restaurant",
		"bench",
		"fuel",
		"post box",
		"bank",
		"fast food",
		"cafe",
		"grave yard",
		"recycling",
		"kindergarten",
		"pharmacy",
		"hospital",
		"post office",
		"bicycle parking",
		"public building",
		"pub",
		"waste basket",
		"toilets",
		"shelter"
	],
	"shop": [
		"supermarket",
		"convenience",
		"clothes",
		"bakery",
		"hairdresser",
		"car repair",
		"car",
		"kiosk",
		"doityourself",
		"yes",
		"butcher",
		"florist",
		"mall",
		"bicycle",
		"furniture",
		"alcohol",
		"books",
		"shoes",
		"electronics",
		"department store",
		"hardware",
		"jewelry"
	],
	"leisure": [
		"pitch",
		"park",
		"swimming pool",
		"playground",
		"garden",
		"sports centre",
		"nature reserve",
		"common",
		"track",
		"stadium",
		"recreation ground",
		"golf course",
		"slipway",
		"marina",
		"picnic table",
		"water park",
		"miniature golf",
		"sauna",
		"dog park",
		"fishing",
		"horse riding",
		"ice rink"
	]
};

