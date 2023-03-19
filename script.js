
// max(21, 20);

// function max(a, b) {
//         console.log((a > b) ? " a is greater" : "b is greater");
// }



// let numero = alto(20, 32);
// console.log(numero);

// function alto(v1, v2) {
//     return (v1 > v2) ? v1 : v2;
// }

// function isLandScape(width, height) {
//     return (width > height);
// }

// let orient = isLandScape(500, 1000);
// console.log(orient);

//  Fizz Buzz Again:

// function fizzBuzz(input) {

//     return (typeof input !== "number") ? NaN
//     : ((input % 3 === 0) && (input % 5 === 0)) ? "FizzBuzz"
//     : (input % 3 === 0) ? "Fizz"
//     : (input % 5 === 0) ? "Buzz"
//     : input
// }
// console.log(fizzBuzz(30));

// Create a loop that runs through each item in an array:

// let myStrArr = ["1", "2", "3", "4", "5"];
// let arrLength = myStrArr.length;

// for (let i = 0; i < arrLength; i++) {
//     console.log(i, myStrArr[i]);
// }

// Create a loop that runs as long as i is less than 10 but increase i with 2 each time.
// *** This is a way to output only the even numbers!
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i = i + 2;
// }

// Make the loop (for loop) when i is 5. Using break;

// for (i = 0; i < 10; i++) {
//     console.log(i);
//     if (i == 5) {
//         break;
//     }
// }

// Make the loop (for loop) jump to the next iteration when i is 5:

// for (i = 0; i < 10; i++) {
//     if (i == 5) {
//         continue;
//     }
//     console.log(i)
// }

// Output: 0 1 2 3 4 6 7 8 9. 

// Using getElementById() Method:
// document.getElementById("test-p").innerHTML = "Hello";

//  Using the getElementByTagName() Method:
// document.getElementsByTagName("h2")[0].innerHTML = "Loko é pouco" // the index selection!!!


// // for in loop: to show only the strings of this object:
// const movie = {
//     title: "Só os Loucos Sabem", // => String
//     releaseYear: 2023,
//     rating: 4.8,
//     director: "John Coffee" // => String
// };

// showProperties(movie); // function passing the object above as a parameter!

// function showProperties(obj) {
//     for (let key in obj) // the foor in loop, searching the keys of the object!
//     if (typeof obj[key] === "string") // the conditional statement to identify if the key has a string as its value!
//     console.log(key, obj[key]); // logging the key and the bracket notation to log the key of the object with the condition above!
// }


// the for loop to sum the multiples of 3 and 5:
// console.log(sum(10));

// function sum(limit) {
//     let sum = 0; 
// // create this variable(above) to increment it with i to get the total defined by the conditional statement bellow:    
//     for (let i = 0; i <= limit; i++) 
//         if (i % 3 === 0 || i % 5 === 0) // the conditional statement to get the multipliers of 3 and 5.
//             sum += i; // the increment necessary to make the sum of the statement above
        
//     return sum;
// }

// Exercise 9 => Grade Average: Using for of loop.
// Average grade => 70.

// const marks = [90, 80, 90];

// function calculateGrade(marks) {
//     const average = calculateAverage(marks); // the average function created bellow, passing the array => marks 

//     return (average < 60) ? "F" // 0-59: F.
//     : (average < 70) ? "D" // 60-69: D.
//     : (average < 80) ? "C" // 70-79: C.
//     : (average < 90) ? "B" // 80-89: B.
//     : "A" // 90-100: A.
// }


// //Single Responsibility Principal => Using functions only to caltulate smal things like the Average bellow
// function calculateAverage(array) {
//     let sum = 0;
//     for (let value of array) //for of loop
//         sum += value;
//     return sum / array.length; // parameter to be modified    
// }

// console.log(calculateGrade(marks));

// Exercise 10 - Stars: Using nested loop and empty string!

// showStars(5);

// function showStars(rows) {
//     for (let row = 0; row <= rows; row++) {
//         let pattern = '';
//         for (let i = 0; i < row; i++)
//             pattern += '* ';
//         console.log(pattern);
//     }
// }

// Exercise 11: Prime Numbers, using nested for loops and dedicated function.
  
/*  Prime number => Whose factors are only 1 and itself!
    Composite: Ex.: 12 = 1, 2, 3, 4, 6, 12 => It's a Composite number because it has many factors to be divided.

    A Prime number has only 2 factors it's 1 and itself like 11 => 1 and 11. and 13 => 1 and 13!

    Whenever you have a nested loop, that's propably an indication 
    that you can extract the logic in the inner loop and put it somewhere else
    in a different function.
*/
// showPrimes(20);

// function showPrimes(limit) {
//     for (let number = 2; number <= limit; number++) {
//         // the nested function is to find the prime numbers so it starts in the number 2.
//         let isPrime = true;
//         for (let factor = 2; factor < number; factor++) {
//             if (number % factor === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) console.log(number);
//     }
// }

// // Another way with the small function responsible for the prime number task!
// showPrimes(20);

// function showPrimes(limit) {
//     for (let number = 2; number <= limit; number++)
//         if (isPrime(number)) // here we are passing the isPrime function!
//         console.log(number);
// }

// function isPrime(number) { // This is a dedicated function to find prime numbers!
// // In this loop we try to find a factor for this number, if we find a factor we immediately return false.    
//     for (let factor = 2; factor < number; factor++)
//         if (number % factor === 0) 
//             return false; // Composite number
// // if we get to this point it means we didn't find any factors for this number so we return true (it's a prime number)
//     return true; 
// }

// OBJECTS Code with mosh:

// Object Oriented Programming:

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function() {
//         console.log('draw');
//     }
// };

// Factory Function: It's basically creating a function to operate the values of the object with different arguments. 

// function createCircle(radius) { // We can pass keys of the object as parameters
//     return {
//         radius, // radius: radius, If our key and the value are the same, we can simply write the name once!
//         draw() { // same as wirting => function draw() {}.
//             console.log('draw');
//         }
//     };
// }

// // Now we can call the function with different arguments to get different 
// const circle1 = createCircle(1);
// console.log(circle1);

// const circle2 = createCircle(2);
// console.log(circle2);

//****************************/

// // Constructor Function:
// // Uses Pascal Notation => OneTwoThreeFour => the first letter of every word should be in Uppercase!

// function Circle(radius) {
// // The keyword (this) is a reference to the object that is executing this peace of code
//     this.radius = radius; // new property to an empty object
// // Now adding a method (draw) to this new empty object
//     this.draw = function() {
//         console.log('draw');
//     }
// }
// /* When we use the (new) operator,
// 3 things happen => 1-creates a new empty, 2-sets (this) to point to this new object, 3-returns this new object from this function
// ex.: "return this;"
// */
// const circle = new Circle(1);
// console.log(circle);

// // There is really no different between Factory functions and Constructor functions. They do the same job!

// Treino Mon 13 Mar 2023:

// Write a function that takes two numbers and returns the maximum of the two:

// console.log(max(10, 20));

// function max( num1, num2) {
//     return (num1 > num2) ? num1 : num2;
// }

// LandScape function:

// console.log(isLandScape(800, 600));

// function isLandScape(width, height) {
//     return (width > height);
// }

// FizzBuzz:

// console.log(fizzBuzz(30));

// function fizzBuzz(input) {
//     return (typeof input !== 'number') ? NaN
//     : ((input % 3 === 0) && (input % 5 === 0)) ? "'FizzBuzz"
//     : (input % 3 === 0) ? 'Fizz'
//     : (input % 5 === 0) ? 'Buzz'
//     : input
// }

// Demerit Points 

// Speed limit => 70km get the Ok message.
// Every 5km above the speed limit gets 1 point.
// If the points execeed 12, gets the message License Suspended.
// Use Math.floor()

// checkSpeed(130);

// function checkSpeed(speed) {
//     const limit = 70;
//     const kmPerPoint = 5;
//     const limitPoints = 12;
    
//     if (speed < (limit + kmPerPoint)) {
//         console.log('Ok');
//         return;
//     }
//     // the result of this expression can be a floating point number that's why we need a Math.floor() method.
//     const points = Math.floor((speed - limit) / kmPerPoint); 
//     if (points >= limitPoints)
//     console.log('License Suspended');
//     else
//     console.log('Points', points);
// }


// Even and Odd:

// console.log(showNumbers(20));

// function showNumbers(number) {
//     for(let i = 0; i <= number; i++) {
//         const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
//         console.log(i, message);
//     }
// }

// Count Truthy:

// Because this is a string of characters Js converts it to a TRUTHY value! NOT A BOOLEAN TRUE, IT'S TRUTHY!
// Falsy:

// undefined
// null
// ''
// false
// 0
// NaN

// const array = [1, 2, 3, '', NaN, false, [1, 2]];

// function countTruthy(array) {
//     let count = 0;
//     for (let value of array)
//         if (value)
//             count++;
//         return count;
// }

// console.log(countTruthy(array));


// For in loop REVIEW: Used to iterate over the properties of an Object!

// const person = {
//     name: 'Lucas',
//     age: 30,
//     hobby: 'Beatmaker'
// };

// for (let key in person)
//     console.log(key, person[key])
// Dot Notation -> person.name

/* Bracket Notation -> person['name']
---> Used when we don't know aheade of time what property we are going to access

 */

// for of loop: To iterate over arrays (ES6):

// const toys = ['estilingue', 'bola', 'boneca', 'hominho', 'bicicleta'];

// for (let toy of toys)
// console.log(toy)

// const iterable = [10, 20, 30];

// for (let value of iterable) {
//     value += 5;
//     console.log(value)
// }

// const toys = ['carrinho', 'boneca', 'estilingue'];
// for (let value of toys) {
//     const status = ' Tá Tenu Jovem';
//     value + status;
//     console.log(value, status);
// }

// Even and odd numbe:

// function parImpar(number) {
//     let i = 0;
//     while (i <= number) {
//         let message = (i % 2 === 0) ? 'Even' : 'Odd';
//         i++
//         console.log(i, message);
//     }
// }

// parImpar(20);

// Grades Exercise: Review Tue 14 Mar 2023 Solna centrum lunch time.

// const marks = [90, 90, 90];

// // Average -> 70.

// // 0-59 -> F.
// // 60-79 -> D.
// // 70-79 -> C.
// // 80-89 -> B.
// // 90-100 -> A.

// function calculateGrade(marks) {
// // assigns the calculateAverage function to the average variable.
//     const average = calculateAverage(marks);

//     return (average < 60) ? 'F'
//     : (average < 70) ? 'D'
//     : (average < 80) ? 'C'
//     : (average < 90) ? 'B'
//     : 'A'
//     }

// console.log(calculateGrade(marks));


// // calculateAverage function dedicated to only get the average number.
// function calculateAverage(array) {
//     let sum = 0;
//     for (let value of array)
//         sum += value; // to get the total of the array values sum.
//     return sum / marks.length;
// }
// *************************** //
// *************************** //

//**************** */
// Objects Basics:
//**************** */
// Object-Oriented Programming (OOP).



// console.log(circle.draw()); // This function call is called a Method.


// Factory function: Basically to have a model function to fabricate objects!

// function createCircle(radius) {
//    return {
// // if our key and value are the same you can write the name only once (radius: radius)
//         radius, 
//         draw() {
//             console.log('draw');
//         }
//     };
// }

// const circle1 = createCircle(10);
// console.log(circle1.radius);

// const circle2 = createCircle(20);
// console.log(circle2.radius);

// Constructor Function:
// Uses Pascal Notation: OneTwoThreeFour.

// function Circle(radius) {
// // the this keyword references an empty object!
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }



// console.log(circle.location);

// Factory Functions: To Produce Objects and avoid repeated code blocks.

// function createCircle(radius) {

//     return {
//         radius,
//         draw() { // Functions inside of an object dont need the keyword-function
//             console.log('draw');
//         }
//     };
// }

// const circle1 = createCircle(1);
//     console.log(circle1);

// const circle2 = createCircle(2);
//     console.log(circle2);

// Constructor Function: Construct or Create an Object!
// Uses Pascal Notation: OneTwoThreeFour

// function Circle(radius) {
//     this.radius = radius; // here we are adding a new prop. to an empty object!
//     this.draw = function() {
//         console.log('draw');
//     }
//     this.color = "Black";
// }

// // here we introduce the new Object(with properties) to the function
// const circle = new Circle(1); 
// // 3 things happen when we use the [new] operator:
// // 1 - it creates an empty object
// // 2 - it will set [this] to point to this new empty Object
// // 3 - It will return this new object from this function.

// console.log(circle);

// ****************** //

// Dynamic Nature of Objets: 
 
// const carro = {
//     modelo: "Golf",
//     ano: 2021,
//     cor: "Azul Metalico"
// };

// // Adding properties and values
// carro.turbo = "sim";
// carro.donos = "'Unico";

// // Deleting properties and values
// delete carro.ano;

// console.log(carro);


// ********************* //
// Constructor Property: Every Object has a constructor property.
// and that references a function that was used to create that object.
//  Object() => to access => ex.: circle.constructor.

// function createCircle(radius) {
//     return {
//         radius,
//         draw: function() {
//             console.log('draw');
//         }
//     };
// }
// const circle = createCircle(1);



// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const Circle1 = new Function('radius', `
// this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
//     `);
// const circle = new Circle(1);

// Some Methods:
// Circle.call({}, 1) is exactly like this => const another = new Circle(1);
// Circle.apply({}, [1, 2, 3]);



//***********************/
/* Function are Objects: 
Circle.lenght => rerturns the number of arguments in the function.
*/

// Value vs Refence types:

// Value Types(Primitives):   
// Number
// String
// Boolean
// Symbol (ES6)
// undefined
// null
//-------------//
// Reference Types: (Objects)
// Function (Functions are also Objects)
// Object
// Array (Arrays are also Objects)


// Here x and y are two independent variables:
// Value Type - Primitive Example:
// let x = 10;
// let y = x;

// x = 20;

// //Reference Type - Object Example:

// let a = { value: 10 };
// let b = a;

// let c = 20;

// // Primitives are copied by their value.
// // Objects are copied by their reference.

// let number = 10;
// function increase(number) {
//     number++;
// }

// increase(number);
// console.log(number);

//******************************/

// Enumerating Properties of an Object: using for in and for of loops.

// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// };
// //for in loop:
// for (let key in circle)
//     // console.log(key); // to access the properties
//     // console.log(circle[key]); // to access the value

// // for of loop: Using the built-in constructor function -> Object.keys().

// for (let key of Object.keys(circle))
// console.log(key); // Uncaught TypeError: circle is not iterable!
// // an object is not iterable. we can not iterate it using a for of loop.

// // Other methods: Object.entries()
// // It returns each entry as an array (the key "radius" is [0], and the value 1 is [1]).
// for (let entry of Object.entries(circle))
// console.log(entry);

// /* To check if a given object has a given property or method,
// to do that you can use the in operator:
// */
// if ('radius' in circle) console.log('yes');

// const circle = {
//     carro: Audio,
//     ano: 2023
// }

// for (let key in circle)
// console.log(key);

// for (let key of Object.keys(circle)) // to return an array from an object(keys/props)!
//     console.log(key);

// for (let entry of Object.entries(circle)) // to return an array for each element in an object (keys and values)!
//     console.log(entry);


//     if ('carro' in circle) console.log('yes');

//********************************************/

// // Cloning Objects:

// // This is the old way of cloning Objects in JavaScript!
// const circle = {
//     carro: Audio,
//     ano: 2023,
//     funcLoka() {
//         console.log(Nois);
//     }
// };

// const outra = {};

// for (let key in circle)
//     outra[key] = circle[key];



// // Other ways to clone an object:

// outra1 = Object.assign({}, circle);
// console.log(outra1);

// // Object.assign() => copies the properties and methods from one or more source objects into a target object,
// // and we can use it to clone an object, or combine multiple objects into a single object!
// // The Object.assign() doesnt have to be an empty object(above), it can be an existing object,
// // have 1 or more properties or methods, as bellow:

// outra2 = Object.assign({
//     color: 'yellow',
//     dono: 'Unico' // we can even add other key-value pars!
// }, circle);
// console.log(outra2);

// // Simpler and more elegant way to clone an object
// // The Spread Operator => { . . . } basically means getting all its properties and methods and putting them into another object.

// outra3 = { ...outra2 }; // this operator takes all the properties and methods 
// console.log(outra3);

//**********************************/

// Garbage Collector:
  
//****************************/

// // Math is a built-in object that has properties and methods
// // for mathematical constants and functions. Not a function object!


// function getRan(min, max) {
//     return Math.random() * (max - min) + min;
// }
// console.log(Math.floor(getRan(10, 15)));

// Math.round(1.4) // --> 1
// Math.round(1.5) // --> 2

// Math.max(1, 2, 3, 6, 10) // --> 10
// Math.min(-1, 1, 2, 3, 6, 10) // --> -1

//*******************************/

// // The String built-in object: In Js we have two kinds of strings: 

// // String Primitive
// const message = 'hi'; // typeof message --> "string"

// // String object
// const another = new String('hi'); // typeof message --> "object"

// const message2 = 'This is my first message';
// // message2.length --> 24 (returns the number of characters in the string)

// message2.length // -> 24
// message2[0] // -> "T"
// message2[1] // -> "h"
// message2.includes('my') // -> true
// message2.includes('not') // -> false
// message2.startsWith('This') // -> true
// message2.startsWith('this') // -> false (these searches are case sensetive)
// message2.endsWith('e') // -> true
// message2.indexOf('my') // -> 8 ( it starts at index 8)
// message2.replace('first', 'second') // -> "This is my second message"
// // (.replace, returns a new string and does not modify the original one).
// message2.toUpperCase() // -> "THIS IS MY FIRST MESSAGE"
// message2.trim() // -> removes the white space before and after the string
// message2.trimLeft()

// // Escape Notation:
// const message3 = 'This is my \'first\' message'; // -> "This is my 'first' message".

// const message4 = 'This is my\n first message'; // -> new line after \n.

// message2.split(' ') // -> returns an array(5) with 5 items -> [ "This", "is", "my", "first", "message" ]

//****************************************/

// Template Literals: `` (Instead of escape notation):

// String primitive
// const message =
// 'This is my\n' +
// '\'first\' message';

// // Template literal --> ``(backticks)
// const another = 
// `This is my
// 'first' message, better`;

// console.log(message);
// console.log(another);

// // Useful if you wanna send emails with your app:

// const email = `Hi John,
// Thank you for joining my mailing list.

// Regards,
// Lucas`;

// //Place Holders with ``

// const name = 'Maria';

// const email2 = `Hi ${name},

// Did you know that 2 + 2 is equal to: ${2 + 2},
// Thank you for joining my mailing list.

// Regards,
// Lucas`;

// console.log(email2);

// Date object: 

// const now = new Date();
// const date1 = new Date('May 11 2018 09:00');
// // The weird thing about the Date object is that
// // moths are 0 based so january is 0 and December is 11 just like arrays index
// const date2 = new Date(2018, 4, 11, 9); // may is 4 and not 5!

// now.setFullYear(2017);

// console.log(now.toDateString());
// console.log(now.toTimeString());
// this is a standard ISO format commonly used in web apps/mobile apps
// that talks to a backend. This is the format you commonly use to transfer date
// console.log(now.toISOString()); 


// console.log(new Date())


//******************************/

// Arrow functions with Parameters

// const doubler = (item) => item * 2;
// console.log(doubler(4));

// const myConcat = (arr1, arr2) => arr1.concat(arr2);
// console.log(myConcat([1, 2], [3, 4, 5]));

//********************************/

// Exercise: Address Object: for in loop, iterate object, basic function.
// street, city, zipCode, showAddress(address):


// const address = {
//     street: "King st",
//     city: "Cotia",
//     zipCode: "175 60"
// };


// function showAddress(address) {
//     for (let key in address)
//     console.log(key, address[key]);
// }

// showAddress(address);

//Exercise: Factory and Constructor Functions:

// Factory function:

// function createAddress(street, city, zipCode) {
//     return {
//         street,
//         city,
//         zipCode
//     }
// };
// let address = createAddress('clovis', 'Cotia', '04514-001')
// console.log(address);

//Constructor function:

// function Address(street, city, zipCode) {
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;
// }
// let address = new Address('a', 'b', 'c');
// let address1 = new Address('d', 'e', 'f');
// let address2 = new Address('g', 'h', 'i');
// console.log(address);
// console.log(address1);
// console.log(address2);

//**********************************/

// Exercise: Comparing property values (Reference type)
// Objects are reference types.
// create function -> areEqual() check if the objects have the same reference type using (===).
// We need to check their properties (iterate with a for in loop).
// create function -> areSame() to check if they are referencing the same object. using (===).
// let address1 = new Address('a', 'b', 'c');
// let address2 = new Address('a', 'b', 'c');

// function Address(street, city, zipCode) {
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;
// }

// // Strict Equality
// // it will return true because the objects and properties are equal but they are not the same object!
// function areEqual(address1, address2) { 
//     return address1.street === address2.street &&
//         address1.city === address2.city &&
//         address1.zipCode === address2.zipCode;
// }

// // it will return false because they are in two different places in memory
// function areSame( address1, address2) {
//     return address1 === address2;
// }

// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address2));

//*******************************/
//*******************************/

// Exercise Blog Post Object: Use Object literal syntax to create and initialize it.

// title
// body
// author
// views
// comments
//  (author, body)
// isLive

// const blogPost = {
//     title: 'Summer Crazy',
//     body: 'lorem10 era uma ve loucuras de verao',
//     author: 'Frank Anderson',
//     views: 104,
//     comments: [
//         { author: 'Giselle Bricks', body: 'Summer loucuras de verao Rocks! yeah!'},
//         { author: 'Chris Jingos', body: 'Shit is crazy bro!'}
//     ],
//     isLive: true    
// };

// console.log(blogPost);

// Exercise Construction Funtion for the blog post above:
// 
// function Post(title, body, author) {
//     this.title = title;
//     this.body = body;
//     this.author = author;
//     this.views = 0; // We don't want to initialize the number views in the Constructor Function!
//     this.comments = []; // The comments are also open to be added by the user inside of the array literal.
//     this.isLive = false;
// }

// const post = new Post('a', 'b', 'c');
// console.log(post);

// //Note that the more parameters a function has the harder it get to use it.

//************************************************************//
//Exercise: create an array of objects for 3 price ranges
// ex.: $, $$, $$$ (inexpensive, moderate, pricey)
// each object is a price range object.

// const priceRanges = [
//     { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerperson: 10},
//     { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerperson: 20},
//     { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerperson: 50}
// ];

// console.log(priceRanges);