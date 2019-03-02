// class, constructor, methods/properties inside of class - similar to other C style languages

class Person {
	constructor(firstName, lastName, dob) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthday = new Date(dob);
	}

	//class methods are added to the prototype
	greeting() {
		return `Hello, ${this.firstName} ${this.lastName}!`
	}

	calculateAge() {
		const diff = Date.now() - this.birthday.getTime();
		const ageDate = new Date(diff);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}

	getsMarried(newLastName) {
		this.lastName = newLastName
	}

	// static methods are used without instantiating an object instance
	static addNumbers(x, y) {
		return x + y;
	}
}

// object creation
const tyson = new Person('Mike', 'Tyson', '11-13-1965');

 //note how we still have the __proto__, which instead has a constructor property. That's why ES6 is described as syntactic sugar, it doesn't actually change the underlying functionality.

console.log(tyson.getsMarried('King'));
console.log(tyson);
//console.log(tyson.greeting());
//console.log(tyson.calculateAge());

// using our static function - note that we call it with the class name
console.log(Person.addNumbers(5,10));
