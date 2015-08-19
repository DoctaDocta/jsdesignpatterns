<!-- View Model-->

//class to represent

function catBio(name) {
	var self = this;
	self.name = name;
	self.score = 0;
	self.pic = "/catpic.jpg";
	console.log(self.pic);
};

function CatsViewModel() {
	var self = this;

	//initial cats. editable data
    self.cats = ko.observableArray([
    	new catBio('Bob'),
    	new catBio('Becky'),
    	new catBio('Barry'),
    	new catBio('Blubb'),
    	new catBio('Bertrand')
    ]);

    //Operations
    self.appendNewCat = function() {
    	self.cats.push(new catBio());
    };

    self.chosenCatId = ko.observable();
    self.chosenCatData = ko.observable();

    //behavior
    self.goToCat = function(kitty) {
    	self.chosenCatId(kitty);
    	$.get('/catpic.jpg', {cats: kitty}, self.chosenCatData);

    };



};

$(document).ready(function() {
    ko.applyBindings(new CatsViewModel());
});