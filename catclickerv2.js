<!-- View Model-->
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

    //generating cat models
    self.catPictures = ['/cat-pictures/catpic0.jpg','/cat-pictures/catpic1.jpg',
                        '/cat-pictures/catpic2.jpg','/cat-pictures/catpic3.jpg',
                        '/cat-pictures/catpic4.jpg','/cat-pictures/catpic5.jpg'];

    function randomCatPic(){
        var dice = [1,2,3,4,5,6];
        var diceRoll = dice[Math.floor(Math.random()*dice.length)];
        console.log(diceRoll);
        return diceRoll;
    };

    //this should be in view
    $(".table").on("load", self.initializeData());

	//class to represent
// this should be model.
	function catBio(name) {
		this.name = name;
		this.score = "0";
		//TO DO: implement randomCatPic on pic so there are diff pics
		this.pic = self.catPictures[randomCatPic()];
	};

    //Operations
    // this is the controller/octopus
    self.appendNewCat = function(name) {
    	var newKitten = new catBio(name);
        console.log('new kitten: ' + newKitten.name + newKitten.score);
    	self.cats.push(catobject);
    };

    self.chosenCat = function(name) {

    };
};

$(document).ready(function() {
    ko.applyBindings(new CatsViewModel());
});