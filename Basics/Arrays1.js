// let arr= [4,5,4,1,8];
// console.log(arr);


// const arr1= new Array(5,9,8,2,31);
// arr1.push(56);
// console.log(arr1);

// console.log(arr1.includes(98));   //searching element exists in array or not
// console.log(arr1.indexOf(2));    // returns the index of provided value 
// console.log(arr1.indexOf(98));

// const newArr = arr1.join();         // these method converts arr to string
// console.log(newArr);
// console.log(arr1);


// slice and splice differences and imp for interviews
/*
*************SLICE****************************
* slice doesnt change original array, Extracts/copies a portion of an array
* slice(start, end)	
* Typical use Get a subarray without modifying data


************SPLICE****************************
* splice changes the original array, Adds/removes/replaces elements in the original array
* splice(start, deleteCount, ...items)
* Typical use Modify the array itself
*/

const arr = [1,2,3,4,5,6];


console.log(arr.slice(1,5));
console.log(arr);

console.log(arr);
console.log(arr.splice(1,3));
console.log(arr);
