function PersonAdult (name , age)
{
     Person.call(this, name, age); 
}
PersonAdult.prototype= Object.create(Person.prototype)
Person.prototype.print = function() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    };
function Person (name , age)
{
  this.name= name
    this.age=age
}
 const person =new Person("Reut Juli" ,16)
 
person.print();
const personAdult =new PersonAdult("Reut Juli" ,25)
personAdult.print();

function Animal(name, ) {
    this.name = name;
    

    
}
Animal.prototype.makeSound = function() {
        console.log(`${this.name} make sound `);
    };
const dog = new Animal("🐶  Max")
const cat = new Animal("🐱  Mitzi")
dog.makeSound();
cat.makeSound();
console.log(Object.getPrototypeOf(cat) === Object.getPrototypeOf(dog));