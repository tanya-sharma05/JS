// Immediately Invoked Function Expressions (IIFE)
// Syntax ()()
// IIFE is a function which immediately executes after it's creation. 
// It is written as one parentheses for wrapping the function and other for execution. 

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh') // can pass argument in second parentheses 
