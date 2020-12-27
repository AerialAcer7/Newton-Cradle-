class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling =Matter.Constraint.create(options);
        World.add(world, this.body);
    }

display(){
   var pos = this.bodyA.position;
   var pos2 = this.pointB.position;
  line(pos.x,pos.y,pos2.x,pos2.y); 
}
}