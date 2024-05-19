let car: string = 'subaru';
let numberA: number = 15;
let numberB: number =  10;
let fruits: string[] = ['apple','onrage','banana'];

// Tests for equality and inequality with string
console.log("Test 1: Is car equal to 'subaru'? I predict true")
console.log(car === 'subaru')

console.log("Test 2: Is car equal to 'honda'? I predict false")
console.log(car === 'honda')

// Tests using the lower case function
console.log("Test 3: Is car in lowercase equal to 'subaru'? I predict true.");
console.log(car.toLowerCase() === 'subaru');

console.log("Test 4: Is car in lowercase equal to 'SUBARU'? I predict false.");
console.log(car.toLowerCase() === 'SUBARU');

// Numerical tests
console.log("Test 5: Is numberA grester than numberB? I predict true.");
console.log(numberA > numberB);

console.log("Test 6: Is numberA less than numberB? I predict false.");
console.log(numberA <= numberB);

// Tests using "and" and "or" operators
console.log("Test 7: Is car equal to 'subaru' and numberA greater than 5? I predict true.");
console.log(car === 'subaru' && numberA > 5);

console.log("Test 8: Is car equal to 'subaru' and numberB greater than 10? I predict false.");
console.log(car !== 'subaru' || numberB > 10);

// Test whether an item an item is in an array
console.log("Test 9: Is 'apple' in the fruits array? I predict true.");
console.log(fruits.includes('apple'));

// Test whether an item is not in an array
console.log("Test 10: Is 'grape' in the fruits array? I predict false.");
console.log(fruits.includes('grape'));




