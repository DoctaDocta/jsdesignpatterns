var count = 0;
var cat_pic = $("#cat_pic");
var catpic = $("#catpic");
var scoreboard = $("#counter");

if (scoreboard) {
	console.log("scoreboard exists");
}
if (catpic){
	console.log("catpic exists");
	//catpic.click(scoreKeeper);
	$(document).ready(function() {
	$("#cat_pic").click(function() {
		alert("your message");
	    $("#scoreboard").text("Hello world!");
	});
});
}
/*
var scoreKeeper = function() {
	count++;
	console.log("catpic clicked to function");
	scoreboard.html("<h3>You have clicked the pussy" + count + "times, now. Stop it.</h3>");
	return count;
};*/


	catpic.click(function(){
		alert("your message");
	    $("#scoreboard").text("Hello world!");
	});
