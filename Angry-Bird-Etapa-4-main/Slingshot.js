class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.estilingo = loadImage("sprites/sling1.png");
        this.estilinguinho = loadImage("sprites/sling2.png");
        this.estiligo = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.estilingo,201,19);
        image(this.estilinguinho,171,19);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(80,48,22);
            if(pointA.x<219){
            strokeWeight(4);
            line(pointA.x-19, pointA.y, pointB.x-19, pointB.y);
            line(pointA.x-19, pointA.y, pointB.x+28, pointB.y);
            image(this.estiligo,pointA.x-29,pointA.y-7,16,29);
            }
            else{
            line(pointA.x+19, pointA.y, pointB.x-19, pointB.y);
            line(pointA.x+19, pointA.y, pointB.x+28, pointB.y);
            image(this.estiligo,pointA.x-29,pointA.y-7,16,29)
            }
            pop();
        }
    }
    
}