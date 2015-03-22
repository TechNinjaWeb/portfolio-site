// STRING PROTOTYPE
String.prototype.capitalize = function() {
    return this.replace(/(^|\s)([a-z])/g, function(m, p1, p2) {
        return p1 + p2.toUpperCase();
    });
};
String.prototype.contains = function(it) { return this.indexOf(it) != -1; };
// JQUERY/ANGULAR
$.prototype.tn = function(input){
	console.log("Ran Custom Prototype");
	return angular.element(input);
};

$.__proto__.tn = function(input){
	console.log("Ran Custom Prototype");
	return angular.element(input);
};