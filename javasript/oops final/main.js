//1. Create a Car class that has brand and model properties. Use a constructor to initialize them. Create a method getDetails() that returns the full name of the car.

// class car {
//   constructor(brand, model) {
//    this.brand=brand;
//    this.model=model
//   }

//   getDtails(){
//     document.writeln(this.brand,this.model)
//   }
// }

// const mycar = new car("aura","xyz");
// mycar.getDtails();


// ------------------------------------------------------------------------------------------------------

// 2.Create a Person class that stores name and age. Make age private (use closure or #age) and provide methods to getAge() and setAge() safely.

// class Person {
//     name;
//     #age;



//     getAge() {
//         document.writeln("Age " + this.#age);
//         document.writeln("<br>")
//         document.writeln("Name "+this.name);
//     }

//     setAge(name, age) {
//         this.name=name;
//         this.#age=age;
//     }

// }
// const person = new Person();
// person.setAge("tanmay",21); 
// person.getAge();


//----------------------------------------------------------------------------------------------------------------



//4. Create a Calculator class that hides the internal result property (e.g., using #result). Add methods to add(num), subtract(num), and getResult(). 

// class Calculator {
//   #result; 
//   constructor() {
//     this.#result = 0;
//   }

//   add(num) {
//     this.#result += num;
//   }

//   subtract(num) {
//     this.#result -= num;
//   }

//   getResult() {
//     document.writeln("result"+this.#result)
//   }
// }
// const calc = new Calculator();
// calc.add(5);
// calc.subtract(2);
// calc.getResult()


//----------------------------------------------------------------------------------------------------------------


// 5.Create a BankAccount class where balance is private. Add deposit(amount), withdraw(amount), and getBalance() methods. Try to access balance directly (it should not work).

// class BankAccount{
//     #balance

//     constructor(balance=0){
//         this.#balance=balance;
//     }


//     deposit(amount){
//         this.#balance=this.#balance+amount;
//         document.writeln("deposit",+amount); 
//         document.writeln("<br>");
//     }

//     withdraw(amount){
//         this.#balance=this.#balance-amount;
//         document.writeln("withdraw",+amount);
//          document.writeln("<br>"); 

//     }

//     getBalance(){
//         document.writeln("current balance",+this.#balance); 
//     }

// }
// const acc = new BankAccount();
// acc.deposit(5000);
// acc.withdraw(4000);
// acc.getBalance();


//----------------------------------------------------------------------------------------------------------------



// 6.Create a Vehicle class with a method move(). Then create a Bike class that extends Vehicle. Create an object of Bike and call the move() method.


// class Vehicle {
//   move() {
//    document.writeln("The vehicle is go fast");
//   }
// }

// class Bike extends Vehicle {

// }

// const bike = new Bike();
// bike.move();


//----------------------------------------------------------------------------------------------------------------


//7. Create a Person class with a method greet(). Create a Student class that extends Person and adds a method study(). Use both methods on a Student object.

// Parent class
// class Person {
//     greet() {
//         document.writeln("Hello! I am a Tanmay.");
//     }
// }

// // Child class
// class Student extends Person {
//     study() {
//         document.writeln("I am studying.");
//     }
// }


// let st = new Student();

// st.greet();
// st.study();


//----------------------------------------------------------------------------------------------------------------


// 8.Create a Bird class with a method makeSound(). Then create Sparrow and Parrot classes that override the makeSound() method with their unique sounds.


// Base class
// class Bird {
//   makeSound() {
//     document.writeln("Some generic bird sound");
//   }
// }

// class Crow extends Bird {
//   makeSound() {
//     document.writeln("caw caw!");
//   }
// }

// class Pigeons extends Bird {
//   makeSound() {
//     document.writeln("coo coo!");
//   }
// }

// let crow = new Crow();
// let pigeons = new Pigeons();

// crow.makeSound();  
// pigeons.makeSound();   


//----------------------------------------------------------------------------------------------------------------


//9.Create a Shape class with a method area(). Then create Circle and Square classes that extend Shape and implement their own area() logic.


// Base class
class Shape {
  area() {
    console.log("Area method not implemented in base class.");
  }
}

// Circle class
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    const result = Math.PI * this.radius * this.radius;
    console.log(`Area of Circle: ${result.toFixed(2)}`);
  }
}

// Square class
class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  area() { 
    const result = this.side * this.side;
    console.log(`Area of Square: ${result}`);
  }
}


let circle = new Circle(5);
let square = new Square(4);

circle.area();  
square.area();  
