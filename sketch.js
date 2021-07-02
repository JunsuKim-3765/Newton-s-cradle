const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball1, ball2, ball3, ball4, ball5;
var ground;
var con, con2, con3, con4, con5;



function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  var ball_options = {
    restitution: 0.8
  }
  
  ball1 = Bodies.circle(100,50,10,ball_options);
  World.add(world,ball1);

  ball2 = Bodies.circle(150,50,10,ball_options);
  World.add(world,ball2);
  
  ball3 = Bodies.circle(200,50,10,ball_options);
  World.add(world,ball3);

  ball4 = Bodies.circle(250,50,10,ball_options);
  World.add(world,ball4);

  ball5 = Bodies.circle(300,50,10,ball_options);
  World.add(world,ball5);
  con1 = Matter.Constraint.create({
          pointA:{x:100,y:20},
          bodyB:ball1,
          pointB:{x:0,y:0},
          length:100,
          stiffness:0.3,
        });
  
      World.add(world,con1);
       
      con2 = Matter.Constraint.create({
        pointA:{x:150,y:20},
        bodyB:ball2,
        pointB:{x:0,y:0},
        length:100,
        stiffness:0.3,
      });

    World.add(world,con2);

    con3 = Matter.Constraint.create({
      pointA:{x:200,y:20},
      bodyB:ball3,
      pointB:{x:0,y:0},
      length:100,
      stiffness:0.3,
    });

  World.add(world,con3);

  con4 = Matter.Constraint.create({
    pointA:{x:250,y:20},
    bodyB:ball4,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.3,
  });

World.add(world,con4);

con5 = Matter.Constraint.create({
    pointA:{x:300,y:20},
    bodyB:ball5,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.3,
});

World.add(world,con5);

ground=new Ground(200, 20, 210, 20);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball1.position.x, ball1.position.y,10);
  ellipse(ball2.position.x, ball2.position.y, 10);
  ellipse(ball3.position.x, ball3.position.y, 10);
  ellipse(ball4.position.x, ball4.position.y, 10);
  ellipse(ball5.position.x, ball5.position.y, 10);

  push();
  strokeWeight(2);
  stroke(255);
  line(con1.pointA.x,con1.pointA.y,ball1.position.x,ball1.position.y);
  line(con2.pointA.x,con2.pointA.y,ball2.position.x,ball2.position.y);
  line(con3.pointA.x,con3.pointA.y,ball3.position.x,ball3.position.y);
  line(con4.pointA.x,con4.pointA.y,ball4.position.x,ball4.position.y);
  line(con5.pointA.x,con5.pointA.y,ball5.position.x,ball5.position.y);
  pop();
 
  ground.show();
}

function keyPressed()
{
  if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(ball1,{x:0,y:0},{x:0.05,y:0});
    }
}

