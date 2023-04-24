
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var ground, leftGround, rightGround


function setup() {
	createCanvas(1200, 500);
	

	engine = Engine.create();
	world = engine.world;
	ground = new Ground (600,450,1200,10);
	leftGround = new Ground (800,395,10,100);
	rightGround = new Ground (950,395,10,100);


	//Create the Bodies Here.

	var ball_options= {
		isStatic: false,
		restitution:0.3,
		friction: 0, 
		density:1.2
	}
	ball = Bodies.circle (250,100,10, ball_options);
	World.add (world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show ();
  leftGround.show ();
  rightGround.show ();
  ellipseMode(RADIUS);
  ellipse (ball.position.x, ball.position.y,10,10);
  drawSprites();
 
}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		Matter.Body.applyForce (ball,ball.position,{x:20,y:-20})
	}
}



