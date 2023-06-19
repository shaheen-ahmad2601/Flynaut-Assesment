// 4) console.log("7" > 7)
// console.log("2">"21")
// console.log("KL">"S")

/**Coercion in JavaScript refers to the automatic conversion of values from one type to another when performing operations or comparisons. It allows JavaScript to handle different types of data interchangeably.
 * 
 */

// this is happening due to coercion, 
console.log("7" > 7); //false
console.log("2" > "21"); //false
console.log("KL" > "S"); //false

// In JavaScript, string comparison is performed character by character. When comparing the strings "KL" and "S", the comparison starts with the first characters: "K" and "S". Since "K" has a lower Unicode value than "S", the expression "KL" > "S" evaluates to false.