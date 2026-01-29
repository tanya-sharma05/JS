const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // this refers to current context (object's values) 
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// Arrow function
const chai =  () => {
    let username = "hitesh"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 // addTwo is a expression here // hoisting 

// const addTwo = (num1, num2) => ( num1 + num2 ) 

// this is not allowed 
const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(3, 4))
