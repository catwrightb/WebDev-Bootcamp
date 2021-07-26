class Pet {
    constructor(name, age){
        this.age = age;
        this.name = name;
    }

    eat(){
        return `${this.name} is eating biscuts`
    }
}

class Cat extends Pet{

    constructor(name, age, livesleft){
        super(name, age)
        this.livesleft = livesleft;
    }

    meow(){
        return `${this.name} says MEOW`
    }

    lives(){
        return `${this.name} has ${this.livesleft} lives left`
    }
}

class Dog extends Pet{
    woof(){
        return `${this.name} says WOOF`
    }
}

class Puppy extends Dog{
    cry(){
        return `${this.name} is crying`
    }

    eat(){
        return `${this.name} is eating wet food`
    }
}

let puppy = new Puppy("Mickey", "2 months");
let dog = new Dog("Pepper", "5 years");
let cat = new Cat("Odin", "2 years", 9);

