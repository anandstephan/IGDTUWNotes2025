class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log(`My name is ${this.name} and my age is ${this.age}`)
    }
}
const p1 = new Person("Black Widow",34)

// p1.greeting()

module.exports = Person