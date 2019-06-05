
/**
 * A = Point(x,y)
 * B = Point(a,b)
 * C = Point(u,v)
 * tinh chu vi tam giac ABC
 */
const Point = require('./d');
// const line = require('./e').Line;
// const Person = require('./e').Person;
const { Line, Person, number, str } = require('./e')

class Triangle{
    /**
     * 
     * @param {Point} pointA 
     * @param {Point} pointB 
     * @param {Point} pointC 
     */
    constructor(pointA, pointB, pointC){
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
    }
    get perimeter(){
        const AB = new Line(this.pointA, this.pointB);
        const AC = new Line(this.pointA, this.pointC);
        const BC = new Line(this.pointB, this.pointC);
        return AB.length + AC.length + BC.length;
    }
}
const A = new Point(0,0);
const B = new Point(0,1);
const C = new Point(1,0);
const ABC = new Triangle(A,B,C);
console.log(ABC.perimeter);

console.log(str)