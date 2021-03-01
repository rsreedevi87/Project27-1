
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var r1,r2,r3,r4,r5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  
 
	bob1 = new Bob(200,500,50);
	bob2 = new Bob(250,500,50);
	bob3 = new Bob(300,500,50);
	bob4 = new Bob(350,500,50);
  bob5 = new Bob(400,500,50);
  
 
	roof = new Roof(300,300,20000,10);

	r1 = new Chain(bob1.body,roof.body,-100,0);
	r2 = new Chain(bob2.body,roof.body,-50,0);
	r3 = new Chain(bob3.body,roof.body,0,0);
	r4 = new Chain(bob4.body,roof.body,50,0);
	r5 = new Chain(bob5.body,roof.body,100,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(30,104,76);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();

  drawSprites();
 keyPressed();
}


function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bob1.body,{x:bob1.body.position.x,y:-bob1.body.position.y},{x:0.05,y:0});
  }
}
