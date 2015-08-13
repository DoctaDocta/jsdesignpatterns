var count = 0;
/*
var catpic = $("#catpic");
var counter = $("#counter");
var span = $("#span");

var cat1 = "Toby";
var cat2 = "Chance the CATter"*/
var cat1 = "Toby";

var cat_names = $("#cat_names");
var cat_pic = $("#cat_pic");
var scoreboard = $("#scoreboard");
var title_str = "Meet Toby and Chance the Scrapper!";


if (scoreboard) {
	console.log("scoreboard exists");
}

if (cat_pic){
	console.log("catpic exists");
	$(document).ready(function() {
		$("#cat_pic").on("click", function() {
	   		count++;
			$("#span").text(count);
		});
	});
}

if (cat_names) {
	console.log("cat_names exist");
	$(#cat_names).text(cat1);
};