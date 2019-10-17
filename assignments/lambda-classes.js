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

class Student extends Person{
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    listSubjects(){
        for(let i=0; i<this.favSubjects.length; i++){
            console.log( this.favSubjects[i]);
        }
    }
    PRAssignments(subject){
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }
    
}
class ProjectManager extends Instructor{
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.grandClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student}'s code on ${subject}`
    }
}
const Ada = new ProjectManager({
    name: "Ada",
    age: 23,
    location: "Kenya",
    specialty: "redux",
    favlanguage: "Python",
    catchPhrase:"Welcome to Python",
    // previousBackground: "Musician" ,
    // className: "WebEU7",
    // favSubjects: ["java", "CSS", "Angular"]
    gradClassName: "CS1",
    favInstructor: "Sean"
});
console.log(Ada.debugsCode("Ann", "js"));
console.log(Ada.standUp("WebEU4"));
// console.log(Ada.PRAssignments("maths"));
// console.log(Ada.sprintChallenge("maths"));
// console.log(Ada.listSubjects());
console.log(Ada);


