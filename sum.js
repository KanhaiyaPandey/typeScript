export function greet(person) {
    return ("hello mister " + person.name + " glad you are now " + person.age + " years old");
}
console.log(greet({
    name: "kanhaiya",
    age: 21
}));
