// const arr = [1,2,3,4,5,6,7,8,9,10];

// add 10 at every value
// const newArr = arr.map((num)=> num+10);
// console.log(newArr);


/************************************************************************************************* */

// method chaining with map and filter

const arr = [1,2,3,4,5];
// task is multiply all number with 10 and then add 1. return only num which are above 40

const answer = arr.map((num)=>num*10).map((num)=>num+1).filter((num)=> num>40);
console.log(answer);

// output of first map will be sent to next map and output of 2nd map will be sent to 
// filter so operation will be performed on other outputs
