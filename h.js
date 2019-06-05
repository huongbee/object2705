class Person{
    constructor(age){
        this.name = 'Person';
        this.age = age;
    }
}
class Student extends Person{
    constructor(height){
        // super(); // extends all 
        super(Person.age);
        this.name = 'Student';
        this.height = height;
    }
}
const s = new Student;
// set name, age, height
// s.name = 'Teo';
s.age = 10;
s.height = 160;
console.log(s);