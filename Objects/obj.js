

// we are studying the objects


const Mysym = Symbol("this is symbol");
const myobj={
    name:"dhaval",
    age:89,
    College:"MU",
    "CGPA OF SEM 5":"eigth",
    [Mysym] :"sym",
    "cpi":5,
    Passionate:"technology"
};

// 1] to access the object
// console.log(myobj.age);
// console.log(myobj.name);

// console.log(myobj.cpi, myobj.Passionate);
// console.log(myobj.cpi);

// 2] to access the object in another way
// console.log(myobj["CGPA OF SEM 5"],myobj["cpi"]);


// ****************************************************************************

// console.log(myobj[Mysym]);

// we can overwrite values inside object

// myobj.College = "Nirma";
// console.log(myobj.College);


// we can stop overwritting or changing

// myobj.College = "PDEPU";
// Object.freeze(myobj);
// myobj.College = "SRMU";
// console.log(myobj.College);
//********************************************************************************

// we are passing function in object

// myobj.greet=function(){
//     console.log("hello, doston");
// }
// console.log(myobj.greet());

// myobj.greet2=function(){
//     console.log(`hello everyone my name is ${this.name}`);
// }
// console.log(myobj.greet2());
