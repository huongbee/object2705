/**
 * A = Point(x,y)
 * tinh khoang cach doan OA
 */

class Point{
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
const A = new Point(3,4);
console.log(A.distance)


 /**
 * A = Point(x,y)
 * B = Point(a,b)
 * tinh do dai doan AB
 */

  /**
 * A = Point(x,y)
 * B = Point(a,b)
 * C = Point(u,v)
 * tinh chu vi tam giac ABC
 */