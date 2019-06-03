
/**
 * totalLike = 10;
 * onLike()
 */
class Like{
    constructor(totalLike = 10, checkUserLike = false){
        this.totalLike = totalLike;
        this.checkUserLike = checkUserLike;
    }

    onLike(){
        this.checkUserLike ? this.totalLike -= 1 : this.totalLike += 1;
        this.checkUserLike = !this.checkUserLike
        // dk ? data for dk is true : data for dk is false 
    }
}
const user = new Like;
user.onLike();
// user.onLike();
// user.onLike();

console.log(user.totalLike);