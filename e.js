 /**
 * A = Point(x,y)
 * B = Point(a,b)
 * tinh do dai doan AB
 */
const Point = require('./d')
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
}
const A = new Point(0,1);
const B = new Point(2,2);
const AB = new Line(A,B);
console.log(AB.length);

 
  /**
 * A = Point(x,y)
 * B = Point(a,b)
 * C = Point(u,v)
 * tinh chu vi tam giac ABC
 */