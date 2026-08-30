

let myname = "DJ";
let email = "d@j.com"


// string interpolation method

// console.log("heeelooo my name is " +myname+ "and email is " +email+ "thank you"); -> purana tarika

// console.log(`heeelooo my name is ${myname} and email is ${email} thank you`);



const Aname =  new String("dhaval");     // object with name Aname
/*
console.log(Aname[0]);
console.log(Aname.toUpperCase());
console.log(Aname.charAt(-2)); 
*/

const Bname = Aname.substring(0,3);
// console.log(Bname);

const Cname = Aname.slice(-3,3);
// console.log(Cname);


const newString = "    dhav al  fvd   ";
console.log(newString);
console.log(newString.trim());
console.log(newString.trimEnd());
console.log(newString.trimStart());