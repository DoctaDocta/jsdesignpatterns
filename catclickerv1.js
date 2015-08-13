var count = 0;
var catpic = $("#cat-picture");
var scoreboard = $("#scoreboard");

if (scoreboard) {
	console.log("scoreboard exists");
}
if (catpic){
	console.log("catpic exists");
	catpic.click(scoreKeeper);
}

var scoreKeeper = function() {
	count++;
	console.log("catpic clicked to function");
	scoreboard.text("You have clicked the pussy " + count + "times, now. Stop it.");
	return count;
};

$("h3").text("the text has changed");

$('#catpic').click(function(){
    alert('your message');
});
