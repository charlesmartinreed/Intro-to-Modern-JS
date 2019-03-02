// OBJECT LITERALS

// const brad = {
// 	name: 'Brad',
// 	age: 30
// }

// console.log(brad);
// console.log(brad.age);

// CREATING A PERSON CONSTRUCTOR - ES5 era
function Person(name, dob) {
	// this refers to the current instance of an object
	this.name = name;
	//this.age = age;
	this.birthday = new Date(dob);
	this.calculateAge = function(){
		//current date - number of milliseconds since 1/1/1970 and user birthday
		console.log(this.birthday.getFullYear())
		const diff = Date.now() - this.birthday.getTime();
		const ageDate = new Date(diff);
		return Math.abs(ageDate.getUTCFullYear() - 1970);

	}
	//console.log(this)
}
const brad = new Person('Brad', '9-10-1981');
console.log(brad.calculateAge());

// INSTANTIATING A PERSON
//const userA = new Person('Brad', 15);
//const userB = new Person('David', 29);

// using 'this' outside, in the global scope for instance, gives us the window object.
// this.alert('\'this\' refers to the window at global scope')
