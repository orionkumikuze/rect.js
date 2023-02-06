class rect {
    constructor(x,y,width,height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }
}
function collide(rect,rect2) {
    let distance = Math.sqrt((Math.pow(rect.x-rect2.x,2)) + Math.pow(rect.y-rect2.y,2)) 
    console.log(distance,rect.x,rect.y,rect2.x,rect2.y)
    if (distance < 35) {
        return true
    } else {
        return false
    }
    
}