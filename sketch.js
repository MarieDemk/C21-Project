
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1340, 700);

	
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(670,500,1340,20, "yellow");
	var ballOptions={
		restitution: 0.3,
		friction: 0.1,
		density: 1.2

	}
	//Create the Bodies Here.
	ball = Bodies.circle(100,450,50);
	World.add(world,ball);
	console.log(ball);
	Engine.run(engine);
  
}


function draw() {
	background(0);
	Engine.update(engine);
  	rectMode(CENTER);
	ellipse(ball.position.x,ball.position.y,50,50);



  	ground.display();

  	drawSprites();
 
}



