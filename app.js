// INHERITANCE IN ES6 CLASSES involve subclasses. These EXTEND the superclass.

class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	greeting() {
		return `Hello there, ${this.firstName} ${this.lastName}!`
	}
}

class Customer extends Person {
	constructor(firstName, lastName, phone, membership){
		super(firstName, lastName); //calls the parent class instructor

		// set up subclass specific implementation AFTER calling to super
		this.phone = phone;
		this.membership = membership;
	}

	static getMembershipCost() {
		return 500;
	}
}

const byron = new Customer('Byron', 'Blue', '555-555-5555', 'Standard');
console.log(byron);

// though John is a Customer, since Customer extends Person, we have access to the greeting function in Person
console.log(byron.greeting());
console.log(Customer.getMembershipCost());
