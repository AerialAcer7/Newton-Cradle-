
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
  createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     bar = new Bar(300,200,200,20);
     
     ball = new Ball(210,250,15);
     ball2 = new Ball(222,250,15);
     ball3 = new Ball(254,250,15);
     ball4 = new Ball(266,250,15);

     rope1 = new Chain(ball.body,{x:230,y:200});
     rope2 = new Chain(ball2.body,{x:260,y:200});
     rope3 = new Chain(ball3.body,{x:290,y:200});
     rope4 = new Chain(ball4.body,{x:320,y:200});
	  Engine.run(engine); 
}

function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();

  //display the objects here
  bar.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();

  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
}

function mouseDragged(){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  
}




