class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
       this.sling.bodyA = body;
    }

    display(){
        image(this.sling1,200,20);
        image(this.sling2,175,20)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(10);
            stroke(42,22,8)
            if(pointA.x<220){
                line(pointA.x-22, pointA.y, pointB.x, pointB.y-3);
                line(pointA.x-22, pointA.y, pointB.x+20, pointB.y-3);
                image(this.sling3,pointA.x-27,pointA.y-12,10,30);
            }
            else{
                line(pointA.x+22, pointA.y, pointB.x, pointB.y-3);
                line(pointA.x+22, pointA.y, pointB.x+20, pointB.y-3);
                image(this.sling3,pointA.x+27,pointA.y-12,10,30);
            }
            pop();
        }
    }
    
}