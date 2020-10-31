class Bob{
    constructor(x,y,r){
        var options = {
            isStatic:false
        }
        this.bodies = Bodies.circle(x,y,r);
        this.r = r;
        World.add(world,this.bodies);
    }
    display(){
        var pos = this.bodies.position;

        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        ellipse(0,0,this.r);
        pop();
    }
}