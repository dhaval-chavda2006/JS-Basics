
// creating promise


// only after connecting our task or promise that we made, to resolve() method it will be properly consumed with .then

// const promiseone = new Promise(function(resolve,reject){
//     // Do async task, DB calls, Network

//     setTimeout(function(){
//         console.log("async task is done");
//         resolve();
//     }, 3000);
// });

// here we receive the promise that have been made
// promiseone.then(function(){
//     console.log("Promise Consumed!@#$%")
// })

//-------------------------------------------------------------------------------

// second method to define and declare promise

// new Promise((resolve, reject)=>{

//     setTimeout(()=>{
//         console.log("Async task 2");
//         resolve();
//     }, 2000);
// }).then(()=>{
//     console.log("Async resolved...")
// })

//------------------------------------------------------------------------------

// passing parameter in resolve and catching or receving at .then()
// here we are passing API or json to resolve and .then is able to catch

// new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         resolve({
//             username:"dhaval",
//             email:"dhavalchavda999@gmail.com"
//         })
//     }, 2000);
// }).then((i)=>{
//     console.log(i);
// });

//--------------------------------------------------------------------------------------

// we are going to do eroor catching and handling through reject 
// catch the error and give the error message written 
// this is syntax 1 to handle with .then() and .catch()

/* 
new Promise((resolve,reject) => {
    setTimeout(()=>{
        let error = true;

        if(!error)
        {
            resolve({
                username: "dhaval",
                password:123456,
                email: "dhaval@gmail.com"
            })
        }
        else{
            reject('something went wrong!!')
        }
    },2000)
})

.then((i) => {
    console.log(i.email);
})

.catch((error)=>{
    console.log(error);
})

.finally(()=>{
    console.log("this is the finally block");
})
*/

//--------------------------------------------------------------------------------------
// second syntax using async and await keyword

// const promise5 = new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         let error = false;

//         if(!error)
//         {
//             resolve({
//                 username: "dhaval",
//                 password:123456,
//                 email: "dhaval@gmail.com"
//             })
//         }
//         else{
//             reject('something went wrong!!')
//         }
//     },2000)
// });

// async function consume(){
//     try{
//         const response = await promise5;
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// consume();

//-------------------------------------------------------------------------------------
    
async function getAllUser(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    }
    catch(error)
    {
        console.log("E: ",error);
    }

}
getAllUser();