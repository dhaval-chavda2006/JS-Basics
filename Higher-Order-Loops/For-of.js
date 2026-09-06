// for of 
// main point is it prints directly value. 


 
const arr = [1,2,3,4,5,6];
for (const i of arr) {
    // console.log(arr);
    console.log(i);
}

const greet = ["hello", "hi", "goodbye", "will meet again"];
for (const i of greet) {
    // console.log(i);
}
// console.log(greet);




//Maps  [key, value] pair but in same order, unique values only

const map = new Map();

map.set('IN','india');
map.set('EU', 'europe');
map.set('AUS', 'Australia');
map.set('USA', 'United states of America');

// console.log(map);
for (const [key,value] of map) {
    // console.log(key);
}
for (const [key,value] of map) {
    // console.log(value);
}
for (const [key,value] of map) {
    // console.log([key,value]);
    // console.log(map);
}


/***************************************************************************** */

// for of ->  objects 
// for of doesn't work for objects 
const obj={
    name:"dhaval",
    cgpa:8.8,
    schoolName:"dholakiya"
};
// for (const i of obj) {
    // console.log(obj);
// }
/************************************************************************************/


