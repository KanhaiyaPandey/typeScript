"use strict";
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return "hi mr." + this.name;
    }
}
const personObject = new person("kanhaiya", 21);
console.log(personObject.greet());
