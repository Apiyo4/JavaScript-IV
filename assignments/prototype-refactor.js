/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.stomach = [];
//   }
//   Person.prototype.eat = function(edible) {
//     if (this.stomach.length < 10) {
//       this.stomach.push(edible);
//     }
//   };
//   Person.prototype.poop = function() {
//     this.stomach = [];
//   };
//   Person.prototype.toString = function() {
//     return `${this.name}, ${this.age}`;
//   };

  class Person{
      constructor(name, age){
        this.name = name;
        this.age = age;
        this.stomach = [];  
      }
      eat(edible){
        if (this.stomach.length < 10) {
            this.stomach.push(edible);
          }
      }
      poop(){
        this.stomach = [];
      }
      toString(){
        return `${this.name}, ${this.age}`;
      }
  }


//   function Car(model, milesPerGallon) {
//     this.model = model;
//     this.milesPerGallon = milesPerGallon;
//     this.tank = 0;
//     this.odometer = 0;
//   }
//   Car.prototype.fill = function(gallons) {
//     this.tank += gallons;
//   };
//   Car.prototype.drive = function(distance) {
//     if (this.tank >= distance / this.milesPerGallon) {
//       this.odometer += distance;
//       this.tank -= distance / this.milesPerGallon;
//     } else {
//       this.tank = 0;
//       this.odometer += distance - (distance % this.milesPerGallon);
//       return `I ran out of fuel at ${this.odometer} miles!`;
//     }
//   };

class Car{
    constructor(model, milesPerGallon){
        this.model = model;
        this.milesPerGallon = milesPerGallon;
        this.tank = 0;
        this.odometer = 0;
    }
    fill(gallons){
        this.tank += gallons;
    }
    drive(distance){
        if (this.tank >= distance / this.milesPerGallon) {
            this.odometer += distance;
            this.tank -= distance / this.milesPerGallon;
          } else {
            this.tank = 0;
            this.odometer += distance - (distance % this.milesPerGallon);
            return `I ran out of fuel at ${this.odometer} miles!`;
    }
}
}

//   function Baby(name, favoriteToy) {
//     Person.call(this, name, favoriteToy);
//     this.name = name;
//     this.favoriteToy = favoriteToy;
//   }
//   Baby.prototype = Object.create(Person.prototype);
//   Baby.prototype.play = function() {
//     return `Playing with ${this.favoriteToy}`;
//   };
  class Baby extends Person{
      constructor(name, favoriteToy){
          super(name, favoriteToy);
          this.name = name;
          this.favoriteToy = favoriteToy;
      }
      play(){
        return `Playing with ${this.favoriteToy}`;
      }
  }