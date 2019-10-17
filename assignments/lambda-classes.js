// CODE here for your Lambda Classes
class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}
class Instructor extends Person{
    constructor(attributes){
    super(attributes);
    this.specialty = attributes.specialty;
    this.favlanguage = attributes.favlanguage;
    this.catchPhrase = attributes.catchPhrase;
   }
   demo(subject){
    return `Today we are learning about ${subject}`;
   }
   grade(student, subject){
   return `${student} receives a perfect score on ${subject}`;
   }
}
const Ada = new Instructor({
    name: "Ada",
    age: 23,
    location: "Kenya",
    specialty: "redux",
    favlanguage: "Python",
    catchPhrase:"Welcome to Python"
});
