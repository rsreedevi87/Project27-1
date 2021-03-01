class Chain{
    constructor(bodyA,bodyB,offsetX,offsetY){

      this.offsetX = offsetX;
      this.offsetY = offsetY;

     //World.add(world,this.pointB);
      var options = {
          bodyA:bodyA,
          bodyB:bodyB,
          pointB:{x:offsetX,y:offsetY},
          /*
          stiffness:0.1,
          length:10
          */
      }
     

     this.rope = Constraint.create(options);
     World.add(world,this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        stroke(95,147,227); 
        strokeWeight(4);
        var Anchor1X = pointA.x;
        var Anchor1Y = pointA.y;

        var Anchor2X = pointB.x+this.offsetX;
        var Anchor2Y = pointB.y+this.offsetY;

        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
}