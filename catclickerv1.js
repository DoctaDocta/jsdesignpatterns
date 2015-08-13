var count = 0;
var cat_pic = $("#cat_pic");
var catpic = $("#catpic");
var counter = $("#counter");
var scoreboard = $("#scoreboard");
var span = $("#span");

//alert(span);


if (scoreboard) {
	console.log("scoreboard exists");
}
if (catpic){
	console.log("catpic exists");
	$(document).ready(function() {
		$("#cat_pic").on("click", function() {
	   		count++;
			$("#span").text(count);
		});
	});
}
/*
var scoreKeeper = function() {
	count++;
	console.log("catpic clicked to function");
	scoreboard.html("You have clicked the pussy" + count + "times, now. Stop it.");
	return count;
};*/


	catpic.click(function(){
		alert("your message");
	    $("#scoreboard").text("Hello world!");
	});
