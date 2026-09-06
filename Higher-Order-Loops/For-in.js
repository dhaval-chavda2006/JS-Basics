// for in  it works on object as well as arrays 
// main point is it prints key not value. 
// we need to specify the value by arr[key], obj1[key]

const obj1={
    name:"dhaval",
    cgpa:8.8,
    schoolName:"dholakiya",
    ProgrammingLang:"Java"
};
// for (const key in obj1) { 
//     // console.log(obj1);
// }

// on- arrays it worked
// const arr = [5,6,5,1,8,2,8];
// for (const key in arr) {

//     // console.log(key);
//     // console.log(arr[key]);
// }

/************************************************************************* */


// on map
// it doesn't work....
// because it only iterates over enumerable string keys of an object,

const map1 = new Map();

map1.set('IN','india');
map1.set('EU', 'europe');
map1.set('AUS', 'Australia');
map1.set('USA', 'United states of America');

for (const key in map1) {
    console.log(map1[key]);
}