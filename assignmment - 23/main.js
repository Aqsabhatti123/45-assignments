var car = 'subaru';
// Test 1: Equality comparison (True)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True
// Test 2: Strict equality comparison (True )
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); // True
// Test 3 : Inequality comparison (False )
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru'); // False
// Test 4: Strict inequality comparison (False )
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); // False
// Test 5: Less then comparison (False )
console.log("Is car < 'subaru'? I predict False.");
console.log(car < 'subaru'); // False (lexicographic comparison)
// Test 6: Greater then comparison (False )
console.log("Is car > 'subaru'? I predict False.");
console.log(car > 'subaru'); // False (lexicographic comparison)
// Test 7: Less then or equal  comparison (True )
console.log("Is car <= 'subaru'? I predict True.");
console.log(car <= 'subaru'); // True
// Test 8: Less then or equal  comparison (True )
console.log("Is car >= 'subaru'? I predict True.");
console.log(car >= 'subaru'); // True
// Test 9: Checking truthiness (True)
console.log(" Is car? I predict True.");
console.log(car); // True (non-empty string is truthy)
// Test 10: Checking falsiness (False)
console.log(" Is car? I predict False.");
console.log(car); // False (negation of a truthy value)
