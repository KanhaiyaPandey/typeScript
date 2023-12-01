
interface personInterface {
    name: string,
    age: number,
    greet(): string
}

class person implements personInterface{
    name: string;
    age: number;

    constructor(name:string, age: number){
        this.name = name;
        this.age = age;

    }

    greet(){
        return "hi mr." +this.name;
    }
}

const personObject = new person("kanhaiya", 21)
console.log(personObject.greet());




