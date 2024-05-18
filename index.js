// Task: Array Filtering And Mapping
const person = [
  { name: "Cartel", age: 45, gender: "male" },
  { name: "Mendalina", age: 45, gender: "female" },
  { name: "Ava Max", age: 45, gender: "female" },
  { name: "Alan", age: 45, gender: "male" },
  { name: "Sabrina", age: 45, gender: "female" },
];

function femalePeoples(peoples) {
  const isFemale = (person) => person.gender === "female";
  const femalePerson = peoples.filter(isFemale);
  const femaleNames = femalePerson.map((femaleName) => femaleName.name);
  console.log(femaleNames);
}
femalePeoples(person);

// Task: Object Manipulation
const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
];

function onlyBooks(book) {
  const onlyTiltls = book.map((books) => books.title);
  console.log(onlyTiltls);
}

onlyBooks(books);

// Task: Function Composition

function firstFunction(num) {
  return num * num;
}

function secondFunction(num) {
  // return num + num
  return num * 2;
}

function thirdFunction(num) {
  return num + 5;
}

function newFunction(func1, func2, func3) {
  const result1 = func1(50);
  const result2 = func2(30);
  const result3 = func3(10);

  const sumThree = result1 + result2 + result3;
  const sqNumber = 2;
  const sqFunc = Math.pow(sumThree, sqNumber);
  const add5 = sqFunc + 5;
  console.log(add5);
}
newFunction(firstFunction, secondFunction, thirdFunction);

// Task: Sorting Objects

const cars = [
  {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
  },
  {
    make: "Honda",
    model: "Civic",
    year: 2019,
  },
  {
    make: "Ford",
    model: "Mustang",
    year: 2021,
  },
  {
    make: "Tesla",
    model: "Model S",
    year: 2022,
  },
  {
    make: "Chevrolet",
    model: "Silverado",
    year: 2018,
  },
];

function carsByYear(cars) {
  const result = cars.sort((car1, car2) => car1.year - car2.year);
  console.log(result);
}
carsByYear(cars);
