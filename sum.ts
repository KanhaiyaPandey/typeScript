
interface person {
    name: string,
    age: number,
}


export function greet (person: person ): string{
   return ("hello mister "+ person.name +" glad you are now "+ person.age + " now")
}

console.log(greet({
    name: "kanhaiya",
    age: 21
}));
