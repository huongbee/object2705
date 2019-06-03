class Person{
    /**
     * @param {string} name 
     * @param {number} age 
     * @param { {} } school 
     */
    constructor(name, age, school){
        this.name = name;
        this.age = age;
        this.school = school;
    }
    getData(){
        // console.log('Ban ' + this.name + ' dang hoc o truong ' + this.school.name+ ' dia chi la ' + this.school.address)

        console.log(`Ban ${this.name} dang hoc o truong ${this.school.name} , dia chi la ${this.school.address}`)
    }
}
const school = { 
    name: 'KPT',
    address: '38 Nguyen Lam'
}
const teo = new Person('Teo Nguyen', 12, school)
teo.getData();