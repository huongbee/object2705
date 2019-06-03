// let teo = {
//     name : 'Teo',
//     age: 11
// }

// let ti = {
//     name : 'Ti',
//     age: 12
// }

class Person {
    /**
     * constructor Person
     * @param {string} txtName 
     * @param {number} age 
     * @returns {void}
     */
    constructor(txtName, age){
        this.name = txtName;
        this.age = age
    }
    getName(){
        return this.name;
    }
}
const teo = new Person('Teo', 11);
console.log(teo.getName());

// function Person02(name, age){
//     this.name = name;
//     this.age = age;
    
//     this.getName = function(){
//         return this.name;
//     }
// }
// const ti = new Person('Ti', 12);
// console.log(ti.getName());
// console.log(typeof ti)

// function a(){
//     return 1;
// }
// let n = a();
