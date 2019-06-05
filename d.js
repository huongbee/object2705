/**
 * A = Point(x,y)
 * tinh khoang cach doan OA
 */

class Point{
    /**
     * 
     * @param {number} x 
     * @param {number} y 
     */
    constructor(x, y){
        this.x = x;
        this.y = y
    }
    get distance(){
        return Math.sqrt(
            this.x * this.x +
            Math.pow(this.y,2)
        )
    }
}
// const A = new Point(3,4);
// console.log(A.distance)

module.exports = Point