// initializing the function in different ways

// 1] normal declaration


function add(num1,num2)
{
    return num1+num2;
}
// console.log(add(5,6));


// 2] variable / expression declaration


const ans = function(n1,n2){
    return n1+n2;
}
// console.log(ans(2,3));

/********************************************************************************************/
// this keyword and working / context of it
// this keyword is mainly used in object anything refering to object only

const user = {
    username:"dhaval",
    age: 55,
    address: "opposite of dream girl",
    occupation: "job",
    welcomeMessage: function(){
        console.log(`${this.username} is greeting you`);
        console.log(this);
    }
}

// console.log(user.welcomeMessage);
// user.welcomeMessage();
// console.log(this); 

// this will be empty but in browser we will see Window object.

/******************************************************************************* */

// this keyword does not apply for function and not applied on arrow function

function n(){
    let username = "dhaval";
    console.log(this.username);
    console.log(this);
}
// n();

// const dh = function(){
//     let username = "dhaval";
//     console.log("this.username");
// }

            // arrow function
// const dh = () => {
//     let username = "dhaval";
//     console.log(this.username);
// }
// dh();


// task is add two numbers by arrow function
const ans1 = (num1, num2) => {
    return num1+num2;
}
// console.log(ans(3,6));


// 2] option
const Ans = (n1,n2) => n1+n2;
console.log(Ans(3,6));


/*  if we put ans=(n1,n2) => (n1+n2); we dont need to write return
 *  if we put ans=(n1,n2) => {return n1+n2;} we need to write return
*/