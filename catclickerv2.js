<!-- View Model-->

function randomCatPic(){
	var dice = [1,2,3,4,5,6];
	var diceRoll = sixSided[Math.floor(Math.random()*items.length)];
	return diceRoll;
};

//the controller/octopus is acts between the model and the view.



//the view is for what the user sees and interacts with
function CatsViewModel() {
	var self = this;
	//initialize the main array display
    self.cats = ko.observableArray([]);
    self.numberOfCats = self.cats.length;

	//initial cats.
    // these should be in model cuz they're data.
    self.initializeData = function() {
    	var catNames = ['Bob', 'Becky', 'Barry','Blub','Bertrand'];
    	var catNamesLength = catNames.length;
        for (var i=0; i<catNamesLength;i++) {
    		var cat = new catBio(catNames[i]);
    		self.cats.push(cat);
            console.log()
    	};
    };

    //this should be in view
    $(".table").on("load", self.initializeData());

	//class to represent
// this should be model.
	function catBio(name) {
		this.name = name;
		this.score = "0";
		//TO DO: implement randomCatPic on pic so there are diff pics
		this.pic = "/cat-pictures/catpic.jpg";
	};

    //Operations
    // this is the controller/octopus
    self.appendNewCat = function(name) {
    	var newKitten = new catBio(name);
        console.log('new kitten: ' + newKitten.name + newKitten.score);
    	self.cats.push(catobject);
    };
};

$(document).ready(function() {
    ko.applyBindings(new CatsViewModel());
});