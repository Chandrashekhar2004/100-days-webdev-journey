// // Constructors
// function Person(name, age){
//     this.name = name,
//     this.age = age
// }
// Person.prototype.talk = function(){
//     console.log(`Hi , my name is ${this.name}`);
// }

// let p1 = new Person("adam" , 25);
// let p2 = new Person("eve" , 23);

// Classes

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi , my name is ${this.name}`);
    }
}



class Student extends Person{
    constructor(name,age,marks){
        super(name, age);
        this.marks = marks;
    }
   
}
let stu1 = new Student("adam",25 , 95);
console.log(stu1);
class Teacher extends Person{
    constructor(name,age,subject){
        super(name, age);
        this.subject  = subject;
    }
}
let p1 = new Teacher("eve", 46, "english");
console.log(p1);