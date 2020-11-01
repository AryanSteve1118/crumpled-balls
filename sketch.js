
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground;
var rect1,rect2,rect3
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400,height-25,width,20)
	rect1 = new Dustbin(650,height-40,200,15)
	rect2 = new Dustbin(750,height-80,15,100)
	rect3 = new Dustbin(550,height-80,15,100)
	paper = new Paper(100,height-40,40)
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect1.display();
  rect2.display();
  rect3.display();
  paper.display();
  ground.display();
  
//   drawSprites();
}
function keyPressed(){
	   if(keyCode === UP_ARROW){
		   Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-65})
	   }
}
