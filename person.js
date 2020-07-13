// const person = {
//     name: 'hahaha',
//     age:3

// }
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
        
    }
    greeting(){
        console.log(`My name is ${this.name}and I am${this.age}`);
    }
    goodbye(){
        console.log(`잘가!!!`);
    }
}
module.exports = Person;