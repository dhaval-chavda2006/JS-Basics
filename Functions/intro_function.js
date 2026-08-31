
function MyName(){
    console.log("dhaval");
    console.log("manthan");
}
// MyName();


function addTwoNum(num1, num2)
{
    // let result = num1+num2;
    // return result;

    return num1+num2;
}
// console.log(addTwoNum(5,5));

// task is to give your name as argument and console it with greeting 
// hello, i am xxx thank you!!

function greeting(name){
    return `hello, i am ${name} thank you !!!`
}
// console.log(greeting("dj"));    
// if not even inverted quotes are there it gives o/p 'undefined'



//Rest parameter must be last formal parameter
function CalculatePriceOfCarts(...cart1)
{
    return cart1;
}
// console.log(CalculatePriceOfCarts(56,99,66,32));



// handling of object through functions
const user={
    username: "rajesh",
    cart: "battery",
    price:89                //price === prices???? xxxxx
}

function handleObject(anyobject)
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user);


// task is take array as an argument and return its second value
const arr= [8,9,5,95,47,2,55,6,4,2,];

function SecValue(anyArr){
    return anyArr[2];
}
// console.log(SecValue(arr))
