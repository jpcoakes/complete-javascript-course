let country = "United States";
let continent = "North America";
let population = 331.9;

console.log(country);
console.log(continent);
console.log(population);

let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = "English";

let half = population / 2;
console.log(half);
console.log(++population);
console.log(population > 6);
// 4
console.log(population < 33);
console.log(population);

// let description =
country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;

let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

if (population > 33) console.log(`${country}'s population is above average`);
else console.log(`${country}'s population is ${33 - population} below average`);

console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); // 6 + '17' = 617
console.log("19" - "13" + 17); // 6 + 17 = 23
console.log("123" < 57); // false
console.log(5 + 6 + "4" + 9 - 4 - 2); // left to right
// 11 + '4' + 9 - 4 - 2
// '114' + 9 - 4 - 2
// '1149' - 4 - 2
// 1145 - 2
// 1143

// FUNDAMENTALS PART 2 ASSIGNMENTS

// Functions

// 1
const describeCountry = function (country, population, capitalCity) {
  return `${country} has ${population} million people and its
  capital city is ${capitalCity}`;
};

console.log(describeCountry("Finland", 6, "Helsinki"));
console.log(describeCountry("Greenland", 1, "Greenville"));
console.log(describeCountry("Canada", 80, "Vancouver"));

// Function Declarations vs Expressions

// function declaration
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

console.log(Math.trunc(percentageOfWorld1(300)));
console.log(Math.trunc(percentageOfWorld1(500)));
console.log(Math.trunc(percentageOfWorld1(3000)));

// function expression
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

console.log(Math.trunc(percentageOfWorld2(400)));
console.log(Math.trunc(percentageOfWorld2(700)));
console.log(Math.trunc(percentageOfWorld2(5000)));

// arrow function
const percentageOfWorld3 = (population) => (population / 7900) * 100;

console.log(Math.trunc(percentageOfWorld3(200)));
console.log(Math.trunc(percentageOfWorld3(100)));
console.log(Math.trunc(percentageOfWorld3(2000)));

// Functions calling other functions

// 1
const describePopulation = function (country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )}% of the world.`;
};

console.log(describePopulation("USA", 331.9));
console.log(describePopulation("Portugal", 10.3));
console.log(describePopulation("Spain", 47.42));

// Arrays
// 1
const populations = [331.9, 10.3, 47.2, 20];
console.log(populations.length === 4);
const percentages = [
  percentageOfWorld1(331.9),
  percentageOfWorld1(10.3),
  percentageOfWorld1(47.2),
  percentageOfWorld1(20),
];
console.log(percentages);

// Basic array operations
// 1
const neighbours = ["Sweden", "France", "Portugal"];
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes("Germany"))
  console.log("Probably not a central European country :D");
let x = neighbours.findIndex((e) => e === "Sweden");
neighbours[x] = "Republic of Sweden";
console.log(neighbours);

// Objects
// 1
const myCountry = {
  country: "USA",
  capital: "Washington, D.C.",
  language: "English",
  population: 331.9,
  neighbours: ["Mexico", "Canada"],
  describe: function () {
    console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries
and a capital called ${this.capital}.`);
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length > 0 ? false : true;
    return this.isIsland;
  },
};
console.log(myCountry);

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries
and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] += 2;
console.log(myCountry["population"]);

// Object methods
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

// const populations = [331.9, 10.3, 47.2, 20];
let percentages2 = [];
for (let p of populations) {
  percentages2.push(percentageOfWorld1(p));
}
console.log(percentages2);

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let n of listOfNeighbours) {
  for (let neighbor of n) {
    console.log(`Neighbour: ${neighbor}`);
  }
}
