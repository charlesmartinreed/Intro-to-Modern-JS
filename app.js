// PROTOTYPES
// ES5 JAVASCRIPT DOESN'T USE CLASS-BASED OBJECTS

// EACH OBJ IN JS HAS A PROTOTYPE FROM WHICH THEY INHERIT PROPERTIES
// OBJECT LITERALS INHERIT FROM OBJECT.PROTOTYPE
// OBJECTS CREATED FROM CONSTRUCTORS INHERIT FROM THEIR OWN CLASS PROTOTYPE; EX: PERSON OBJECT INHERITS FROM PERSON.PROTOTYPE
// CONSTRUCTOR OBJECTS CAN ALSO INHERIT FROM THE OBJECT.PROTOTYPE, HOWEVER

function Person(firstName, lastName, dob) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.birthday = new Date(dob);
	// this.calculateAge = function(){
	// 	const diff = Date.now() - this.birthday.getTime();
	// 	const ageDate = new Date(diff);
	// 	return Math.abs(ageDate.getUTCFullYear() - 1970);
	// }
}

	// because calculateAge never changes, regardless of the Person instance, it should be attached to the prototype
Person.prototype.calculateAge = function() {
		const diff = Date.now() - this.birthday.getTime();
		const ageDate = new Date(diff);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.getFullName = function() {
	return `${this.firstName} ${this.lastName}`;
}

// PROTOTYPE METHODS CAN ALSO BE USED TO CHANGE/UPDATE INFORMATION
Person.prototype.getsMarried = function(newLastName) {
	this.lastName = newLastName;
}

const john = new Person('John', 'Smith', '8-12-1994');
const mary = new Person('Mary', 'Melody', 'April 30 1982');

console.log(mary);
console.log(john.calculateAge()); // note that this works just as though it were defined within our Person instance

console.log(mary.getFullName());
mary.getsMarried('Smith');
console.log(mary.getFullName());

// __proto__ represents the Person protoType which contains anything we put in the Person object
// the __proto__ that represents the Object superclass has its own properties

// the OBJECT PROTOTYPE has a special method called hasOwnProperty that is used to determine which properties are present on an instance
console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName')); //false, not on the Person instance, but rather the prototype 
