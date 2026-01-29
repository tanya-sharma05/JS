// for of

// for of loop works on arrays, strings and maps to iterate and print their values.
// ["", "", ""]
// [{}, {}, {}]

// Arrays 
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

// Strings
const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// Objects
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) { // does not work on objects
//     console.log(key, ':-', value);    
// }
