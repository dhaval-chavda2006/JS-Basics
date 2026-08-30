

/*
 * on the basis of method to store the given code.. how it is storing in memory?? 
 * we divide into two categories:
 * 
 * 
 * primitive: 7 types these are call by value 
 * string 
 * number
 * boolean
 * null
 * undefined
 * symbol
 * BigInt
 * 
 * 
 * Non-primitive / reference type: 
 * Arrays
 * Objects
 * Functions
 */

// lets write for Symbol:

const value = Symbol('123');
const value1 = Symbol('123');

console.log(value);
console.log(value1);

console.log(value === value1);