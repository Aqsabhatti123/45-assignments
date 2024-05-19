var personName = "Aqsa Bhatti";
// Lowercase
var lowercaseName = personName.toLowerCase();
console.log("Lowercase", lowercaseName);
// Uppercase
var uppercaseName = personName.toUpperCase();
console.log("Uppercase:", uppercaseName);
// Titlecase
var titlecaseName = personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
console.log("Titlecase:", titlecaseName);
