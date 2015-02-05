//this is all the code for selecting a tag for the point chosen

function addTagSelectWindow () {
	$("#tagSelectWindow").removeClass("hidden")
	addKeyBtn();
}

function addKeyBtn () {
	for (var k in tags) {
		$("#tagSelectWindowBtn").append('<div class="tagSelectBtn">'+removeUnderScore(k)+'</div>');
	};
	addTagSelectFunc();
}


function addValBtn (k) {
	for (var v in tags[k]) {
		$("#tagSelectWindowBtn").append('<div class="tagSelectBtn">'+removeUnderScore(tags[k][v])+'</div>');
	};
}

//some text trandsformers
function addUnderScore(s){
	return s.replace(/ /g, "_")
}

function removeUnderScore(s){
	return s.replace(/_/g, " ")
}

var tags = {
	"tourism": [
		"information",
		"hotel",
		"attraction",
		"viewpoint",
		"picnic_site",
		"camp_site",
		"museum",
		"guest_house",
		"artwork",
		"motel",
		"chalet",
		"hostel",
		"caravan_site",
		"alpine_hut",
		"zoo",
		"theme_park",
		"wilderness_hut",
		"apartment",
		"gallery",
		"bed_and_breakfast"
	],
	"amenity": [
		"parking",
		"place_of_worship",
		"school",
		"restaurant",
		"bench",
		"fuel",
		"post_box",
		"bank",
		"fast_food",
		"cafe",
		"grave_yard",
		"recycling",
		"kindergarten",
		"pharmacy",
		"hospital",
		"post_office",
		"bicycle_parking",
		"public_building",
		"pub",
		"waste_basket",
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
		"department_store",
		"hardware",
		"jewelry"
	],
	"leisure": [
		"pitch",
		"park",
		"swimming_pool",
		"playground",
		"garden",
		"sports_centre",
		"nature_reserve",
		"common",
		"track",
		"stadium",
		"recreation_ground",
		"golf_course",
		"slipway",
		"marina",
		"picnic_table",
		"water_park",
		"miniature_golf",
		"sauna",
		"dog_park",
		"fishing",
		"horse_riding",
		"ice_rink"
	]
};

