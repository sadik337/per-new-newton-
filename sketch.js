const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
 createCanvas(800, 700);

engine = Engine.create();
world = engine.world;
    
roof=new Roof(350,100,300,50);

bob1=new Bob(250,300,10);
bob2=new Bob(300,300,10);
bob3=new Bob(350,300,10);
bob4=new Bob(400,300,10);
bob5=new Bob(450,300,10);

chain1=new Chain(bob1.body,roof.body,-60,0);
chain2=new Chain(bob2.body,roof.body,-40,0);
chain3=new Chain(bob3.body,roof.body,-20,0);
chain4=new Chain(bob4.body,roof.body,0,0);
chain5=new Chain(bob5.body,roof.body,20,0);


Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  drawSprites();
 
}

 function keyPressed(){
   if(keyCode===UP_ARROW){
     Matter.Body.applyForce(bob1.body,bob1.body.position,{x:85,y:-85})
   }
 }

