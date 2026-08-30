

// const user = new Object();      //singleton

const user = {};                // non-singleton

user.name ="dhaval";
user.address="opposite of dream girl";
user.degree="Btech";
user.CGPA=9;

// i want to make nested object;;;


/*
const user1={
    name:"raja",
    user2:{
        standard:9,
        user3:{
            school:"banaras"
        }
    }
}
console.log(user1.user2.user3.school);
*/


// i want to concatinate obj1+obj2
const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};

// const obj3 = Object.assign(obj1, obj2);
// console.log(obj3);

// const obj3 = {...obj1, ...obj2};
// console.log(obj3);

// ***************************************************************************************


// most used while working with databases


/*

const user = {};                // non-singleton

user.name ="dhaval";
user.address="opposite of dream girl";
user.degree="Btech";
user.CGPA=9;
*/
// here providing the object but in output we are getting array and we can appy
// normal methods on given array

console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));

console.log(user.hasOwnProperty('Address'));