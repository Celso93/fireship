// access the properties
const dog = {
    name: 'peter',
    age: 15,
    friend: "cat",
    bark(){
        console.log('au au')
    }
}

// bad way to access many properties
//const name = dog.name;
//const age = dog.age;

// best way
// you can change the name of a property
const { name, age, friend: bestFriend } = dog;
console.log(name)
console.log(age)
console.log(bestFriend)


console.log("----------------------ARRAY-----------------------")

const example = ['foo', 'bar', 'baz']

// destruturing: other way to access
const [a, b, c] = example;
console.log(a)

console.log("----------------------COURSE EXAMPLES-----------------------")

// Object destructuring
const person = {
  name: 'John',
  age: 32,
  city: 'New York',
  country: 'USA'
};

const { name, age } = person;

// Object destructuring with alias
const { name: firstName, age: years } = person;

// Array destructuring
const fruits = ['apple', 'banana', 'orange'];
const [first, second, third] = fruits;