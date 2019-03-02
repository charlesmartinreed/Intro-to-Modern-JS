// BUILT-IN CONSTRUCTORS
// primitive types like String, Number, etc also have constructors but it isn't advisible to utilize these types in this way

// STRING CONSTRUCTOR
const name1 = 'Jeff';
const name2 = new String('Jeff');

//console.log(name1);
//console.log(name2); //note that this logs this as an object, which each letter comprising a different property

//we can also add properties to the name2 string as it's being treated as an object
// name2.foo = 'bar';
// console.log(name2);

//  === can be a problem with this constructed String objects because the type is object, not String
if(name2 === 'Jeff') { //value matches, type doesn't
	console.log('YES');
} else {
	console.log('NO');
}

// NUMBER CONSTRUCTOR
const num1 = 5;
const num2 = new Number(5);
console.log(typeof num2);

// BOOLEAN CONSTRUCTOR
const bool1 = true;
const bool2 = new Boolean(true);
console.log(typeof bool2);

// FUNCTION CONSTRUCTOR
const getSum1 = function(x, y){
	return x + y;
}
console.log(getSum1(5,10));

const getSum2 = new Function('x', 'y', `return x + y`);
console.log(getSum2(7,2));

// OBJECT CONSTRUCTOR
const john = {name: 'John'};
console.log(john);

const john2 = new Object({name: 'John'})
console.log(john2);

// ARRAY CONSTRUCTOR
const array1 = [1, 2, 3, 4];
const array2 = new Array(1,2,3,4);
console.log(array2);

// REGULAR EXPRESSION
const regEx1 = /\w+/; //word character that appears 1 or more times
const regEx2 = new RegExp('\\w+'); //using the constructor, you have to escape your slashes, which you don't when using the regular means of defining an reg ex in JS

console.log(regEx1);
console.log(regEx2);
