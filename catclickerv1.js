
// cat clicker for Udacity's JS Design Patterns class.

var catclicks = 0;
var elem = document.getElementById('my-elem');
elem.addEventListener('click', function(){
	catclicks++;
}, false);