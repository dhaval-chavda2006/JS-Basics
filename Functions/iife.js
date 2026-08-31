
/*immediately invoked function expression (iife) used to execute the function as fast as possible. generally we do for db connection. as application starts this function should immediate run so the syntax is: (function x(){console...})();


-- to remove pollution from global scope variables we use iife 

*/

// the below is 'named iife' name is db()
(function db(){
    console.log("db connnected......");
})();


/*
   we need to insert ';' at the end of '()' because if we dont then it will constantly call itself no other function would be allowed to call
 */

((name) =>{
    console.log(`connection done: ${name}`);
}
)("djdj");

