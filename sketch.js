
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     bar = new Bar(300,200,200,20);
     
     rope1 = new Chain(ball,{x:200,y:200});
     
     
     ball = new Ball(210,250,10);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();

  //display the objects here
  bar.display();

  ball.display();
 
}



