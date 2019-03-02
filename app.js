// Object.create creates a new object with an existing object as its prototype

const personPrototypes = {
	greeting: function() {
		return `Hello, ${this.firstName} ${this.lastName}`
	},
	getsMarried: function(newLastName) {
		this.lastName = newLastName;
	}
}

const danae = Object.create(personPrototypes);

// we can add unique properties to our object
danae.firstName = 'Danae';
danae.lastName = 'Jenkins';
danae.age = 30;

danae.getsMarried('Spicoli');
console.log(danae.greeting());

// alternate syntax
const charles = Object.create(personPrototypes, {
	firstName: {value: 'Charles'},
	lastName: {value: 'Reed'},
	age: {value: 36}
});

console.log(charles);
console.log(charles.greeting());
