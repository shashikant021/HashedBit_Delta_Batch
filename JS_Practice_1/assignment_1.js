// Q1. Write a JavaScript function that declares a variable using let, const, and var. What is the difference in scope for each?
function variable() {

    if (true) {
        var a = 'var is a global scope';
    }
    console.log(a);



    if (true) {
        let b = 'let is a local/block scope ';
        console.log(b);
    }

    if (true) {
        const c = 'const is also a local/block scope';
        console.log(c);
    }
}

variable();

// var is a global scope and it can be accessed anywhere within that function, including outside of any block.
// let is a block scope and it cannot be access from outside the block where the variable declare. It only access within a block where it declare.
// const is same as let. And in const we cannot reassign the value.

// Q2. Create an array called fruits that contains five different fruit names. Write a function that returns the second fruit in the array.

let fruits=['Apple', 'Banana', 'Mango', 'Pineapple', 'Watermelon'];
function fruits_name () {
console.log(fruits[1]);
}
fruits_name();

// Q3. Write a function that takes an array as an argument, adds a new element to the end of the array using push(), and then removes the last element using pop(). Return the modified array.

function number (array){
return array;
}
const array = [10, 20, 30, 40, 50];
console.log(number(array));
array.push(60);
console.log(array);
array.pop();
console.log(array);

// Q4. Create an array of numbers and write a function that uses the map() method to return a new array containing each number squared.

let array = [2, 3, 4, 5, 6];
function number() {
    return array.map((temp) => temp * temp); //temp taking the index value one by one and multiply by same index value.
}
console.log(number());
console.log(array);


// Q5. Write a function that filters out all even numbers from an array of numbers using the filter() method. Return the new array of odd numbers

let number = [1,2,3,4,5,6,7,8,9,10];
function filter_even_odd () {
return number.filter(temp => temp%2 != 0);
}
console.log(filter_even_odd());


// Q6. Create an object called person with properties for name, age, and occupation. Write a function that logs a greeting message using these properties.

let person = {
    name: 'Shashi',
    age: 23,
    occupation: 'Software Developer'
};

function greetPerson() {
    console.log(`Hello, my name is ${person.name}, I am ${person.age} years old, and I work as a ${person.occupation}.`);
  }
greetPerson();

// Q7. Write a function that takes an object with properties width and height and returns the area of a rectangle (width * height).

let myRectangle = {
    width: 5,
    height: 10
  };
function area_rectangle () {
    return myRectangle.width * myRectangle.height;
}

console.log(area_rectangle());

// Q8. Given an object with various properties, write a function that returns an array of the object’s keys using Object.keys().

let myObject = {
    name: 'vivek',
    age: 25,
    occupation: 'Developer'
};
function getObjectKeys() {
    return Object.keys(myObject);
}
console.log(getObjectKeys(myObject));

// Q9. Write a function that takes two objects as arguments and merges them into one object using Object.assign(). Return the new object.

let objectA = {
    name: 'shashi',
    age: 25
};

let objectB = {
    occupation: 'Developer',
    city: 'ranchi'
};

function mergeObjects() {
    return Object.assign(objectA, objectB);
}

console.log(mergeObjects(objectA, objectB));

// Q10. Create an array of numbers and write a function that uses the reduce() method to calculate the sum of all the numbers in the array.

let array = [1,2,3,4,5,6];
function sum_of_number () {
    return array.reduce((temp, temp2) => temp + temp2);
}

console.log(sum_of_number());

