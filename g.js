const Point  = require('./d');
class Line{
    /**
     * @param {Point} pointA 
     * @param {Point} pointB 
     */
    constructor(pointA, pointB){
        this.pointA = pointA;
        this.pointB = pointB;
    }
    get length(){
        let dx = this.pointA.x - this.pointB.x;
        let dy = this.pointA.y - this.pointB.y;
        return Math.sqrt(dx*dx + dy*dy);
    }

    setName(name){
        this.name = name;
    }
    /**
     * 
     * @param {Line} line1 
     * @param {Line} line2 
     */
    static compare(line1, line2){
        return line1.length > line2.length ? 
        `${line1.name} longer than ${line2.name}`
        :`${line1.name} shorted than ${line2.name}` ;
    }
}

const A = new Point(0,0);
const B = new Point(0,5);
const C = new Point(0,4);

const AB = new Line(A,B);
AB.setName('AB');
const BC = new Line(B,C);
BC.setName('BC');
let r = Line.compare(AB, BC)
console.log(r);




