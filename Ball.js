class Ball{
    constructor(x,y,r){
      var options ={
        isStatic: true
      }
      this.body = Bodies.circle(x,y,r,options);  
      this.r = r;
      this.x = x;
      this.y = y;
      World.add(world,this.body);
    }

display(){
 var pos = this.body.position;
 ellipseMode(RADIUS);
 fill("red");
 ellipse(pos.x,pos.y,this.r,this.r);
}
}