//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for (let j = 0; j < Object.keys(person3).length; j++) {
    console.log(Object.values(person3)[j]);
  }

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


function Person(name,age){
    this.name = name;
    this.age = age;

    // A Method inside of a JS Prototype
    this.printInfo = function() {
        return `The name of the person is ${this.name}, the person age is ${this.age}`
    }

    this.age_up = ( function() {
                return function () { return age++}
            }) ()
}


let my_person = new Person('Saad', 23)
let my_person2 = new Person('Thor', 1000)

console.log(my_person.printInfo())
console.log(my_person2.printInfo())
console.log(my_person.age_up())



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let wordSize = (str) => {
    return new Promise( (resolve,reject) => {
        if(str.length > 10){
            resolve(str)
        } else {
            reject(str)
        }
    })
}

wordSize("Complete")
.then( (result) => {
    console.log(`Big Word: ${result}`)
})
.catch( (error) => {
    console.log(`Small Number: ${error}`)
})