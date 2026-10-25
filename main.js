
 //Exercise 1 - Phone

function Phone(brand, model) {
    this.brand = brand;
    this.model = model;

    this.details = function() {
        console.log(`Phone: ${this.brand} ${this.model}`);
    };
}

const phone1 = new Phone("Samsung", "S22");
phone1.details();


//Exercise 2 - Rectangle

function Rectangle(width, height) {
    this.width = width;
    this.height = height;

    this.area = function() {
        return this.width * this.height;
    };
}

const rectangle1 = new Rectangle(5, 4);
console.log(rectangle1.area());


//Exercise 3 - BankAccount

function BankAccount(owner, balance) {
    this.owner = owner;
    this.balance = balance;

    this.deposit = function(amount) {
        this.balance += amount;
         console.log(`Balance: ${this.balance}`);
    };

    this.withdraw = function(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
         console.log(`Balance: ${this.balance}`);
    };

    this.checkBalance = function() {
        console.log(`Balance: ${this.balance}`);
    };
}

const account1 = new BankAccount("Reut", 1000);

account1.deposit(500);
account1.withdraw(200);
account1.checkBalance();


//Exercise 4 - Animal & Dog

function Animal(name) {
    this.name = name;

    this.speak = function() {
        console.log(`${this.name} makes a sound`);
    };
}

function Dog(name) {
    Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log(`${this.name} barks`);
};

const animal1 = new Animal("Lion");
animal1.speak();

const dog1 = new Dog("Rocky");
dog1.speak();
dog1.bark();

// Exercise 5 - Vehicle & Car

function Vehicle(type) {
    this.type = type;
}

Vehicle.prototype.describe = function() {
    console.log(`This is a ${this.type}`);
};

function Car(brand ,type) {
    Vehicle.call(this, type);
    this.brand = brand;
}

Car.prototype = Object.create(Vehicle.prototype);


Car.prototype.info = function() {
    console.log(`This is a ${this.brand} ${this.type}`);
};

const car1 = new Car("GMC" , "car");

car1.describe(); 
car1.info();    

// Exercise 6 - Shape Polymorphism

function Shape () {

    this.area = function() {
        return 0;
    };
}
function Circle(radius) {
    this.radius=radius

    this.area = function() {
        return Math.PI * this.radius**2;
    };
}
function Square(side) {
    this.side=side

    this.area = function() {
        return this.side**2;
    };
}
const circle1 = new Circle(3);
const square1 = new Square(4);

console.log(circle1.area()); 
console.log(square1.area());

//Exercise 7 - Book

class Book
{
   constructor(title, author) 
   {
     this.title = title;
        this.author = author;
   }
   info() {
        console.log(`${this.title} by ${this.author}`);
    }
}
const book1 = new Book("The Hobbit", "Tolkien");

book1.info();

//Exercise 8 - Person & Student

class Person
{
  constructor(name)
  {
    this.name=name
  }
  greet(){console.log( `Hello, Im ${this.name}`)}
}
class Student extends Person
{
    constructor(name, school)
    {
        super(name)
        this.school=school
    }
    study() {
       console.log(`${this.name} is studying at ${this.school}`);  
    }
}
const student1 = new Student("Alice", "Oxford");

student1.greet();
student1.study();

//Exercise 9 - Employee & Manager (Polymorphism + Private Fields)

class Employee {
    #salary;

    constructor(salary) {
        this.#salary = salary;
    }

    getSalary() {
        return this.#salary;
    }

    work() {
        console.log("Employee is working");
    }
}

class Manager extends Employee {
    work() {
        console.log("Manager is managing");
    }
}

const employee1 = new Employee(8000);
const manager1 = new Manager(15000);

employee1.work();
manager1.work();

console.log(manager1.getSalary());