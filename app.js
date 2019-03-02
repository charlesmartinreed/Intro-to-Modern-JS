// INHERITING PROTOTYPES

// PERSON
function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

// Greeting prototype method
Person.prototype.greeting = function() {
	return `Hello there, from ${this.firstName} ${this.lastName}!`;
}

// CREATE A PERSON INSTANCE
const person1 = new Person('James', 'Brown');
console.log(person1.greeting());

// CUSTOMER CONSTRUCTOR
function Customer(firstName, lastName, phone, membership) {
	// call is a function that allows us to call another function, from the current context
	Person.call(this, firstName, lastName); //this of this like super.init
	this.phone = phone;
	this.membership = membership;
}

// INHERITING THE PERSON PROTOTYPE METHODS
Customer.prototype = Object.create(Person.prototype);

// MAKE customer.prototype return as Customer()
Customer.prototype.constructor = Customer;

// CREATE A CUSTOMER
const customer1 = new Customer('Beavis', 'Maron', '555-555-1111', 'standard');
console.log(customer1);
//console.log(customer1.greeting()); //this errors out because we're not yet inheriting from Person
console.log(customer1.greeting()); //even though customer is a CUSTOMER, not a PERSON, this now works because we're sharing a prototype

// we can also create custom implementations of prototype methods for our instances
Customer.prototype.greeting = function() {
	return `Hello there, from ${this.firstName} ${this.lastName}! Thank you for being a part of our family!`;
}

console.log(customer1.greeting()); // this will use our newly defined greeting
