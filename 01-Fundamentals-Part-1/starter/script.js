/*
let js = 'amazing';
if (js === 'amazing') alert('JavaScript is FUN!');

console.log(40 + 8 + 23 - 10);

console.log("Joel");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27; // only _ and $ allowed characters in variable names

let person = 'jonas';
let PI = 3.1415; // all capitals for constants

// good naming
let myFirstJob = 'Programmer'; 
let myCurrentJob = 'Teacher';

// bad naming
let job1 = 'programmer';
let job2 = 'teacher';

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

// dynamic typing example, you can change a variable to a different type
// technically the value has the type, not the variable
javascriptIsFun = 'YES!';

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);

let massMark = 22;
let heightMark = 40;
let massJohn = 24;
let heightJohn = 50;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark);
console.log(BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

const firstName = 'Joel';
const job = 'developer';
const birthYear = 1988;
const year = 2037;

const joel = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(joel);

const joelNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(joelNew);

console.log(`Just a regular string...`);

// before ES6 new lines
console.log('String with \n\
multiple \n\
lines');

// template literals with ES6+
console.log(`String
multiple
lines`);

const age = 15;
const isOldEnough = age >= 18;

if(isOldEnough){
    console.log('Sarah can start driving license 🚗');
}
else{
    const yearsLeft = 18 - age;
    console.log(`Sarash is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if(birthYear <= 2000){
    century = 20;
}
else {
    century = 21;
}
console.log(century);

// challenge 2

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
if(BMIMark > BMIJohn){
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
}
else{
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion example 23 is coerced to String
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);

// truthy falsy
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if(money){
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height = 0;
if(height) {
    console.log('Yay! Heigh is defined');
} else {
    console.log('Height is UNDEFINED');
}

const age = '18';
if(age === 18) console.log('You just became an adult :D (strict)');
// '18' string is converted to 18 number when == is used
if(age == 18) console.log('You just became an adult :D (loose)');

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if(favorite === 23) {
    console.log('Cool! 23 is an amazing number!');
}
else if(favorite === 7){
    console.log('7 is also a cool number');
}
else if(favorite === 9){
    console.log('9 is also a cool number');
}
else {
    console.log('Number is not 23 or 7 or 9');
}

if(favorite !== 23) console.log('Why not 23?');

// challenge 3

let dolphins = (96 + 108 + 89) / 3;
let koalas = (88 + 91 + 110) / 3;
if(dolphins > koalas){
    console.log('Dolphins win the trophy');
}
else if(dolphins === koalas){
    console.log('Both win the trophy');
}
else{
    console.log('Koalas win the trophy');
}

// ternary operator

const age = 23;
age >= 23 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');
const drink = age >= 18 ? 'wine ' : 'water ';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine ';
}
else {
    drink2 = 'water ';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine ' : 'water '}`);
*/

const bill = 275;

/* Write your code below. Good luck! 🙂 */

let tip = bill >= 50 && bill <= 300 ? bill * .15 : bill *.2;

// you can do expressions inside template literals also
console.log(`The bill was ${bill}, the tip was ${tip}, and the total was ${bill+tip}`);