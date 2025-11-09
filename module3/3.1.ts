{

//oop - class

class Animal {
    constructor(public name: string, public species: string, public sound: string){}

    makeSound(){
        console.log(`The ${this.name} ${this.species} says ${this.sound}`)
    }
}

const dog = new Animal("German shephard", "dog", "ghew ghew");
const cat = new Animal("persian", "cat", "mew mew")

dog.makeSound();
cat.makeSound();






























}