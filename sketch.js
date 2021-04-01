
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var tree1, ground1, stone1;

function preload()
{

}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

    //image1.addImage(400,400,40,40);
	

	tree1 = new Tree(800,300,300,300);
	//tree1 = new Tree(700,600,30,100);

	//Create the Bodies Here.
	ground = new Ground(500,500,1000,100);
	stone1 = new Stone(100,320,50,50);
	boy = new Boy(200,390,300,300);
	mango1 = new Mango(900,200,50,50);
	mango2 = new Mango(870,250,50,50);
	mango3 = new Mango(750,240,50,50);
	mango4 = new Mango(820,280,50,50);
	rope = new Rope(stone1.body,100,320);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  tree1.display();
  ground.display();
  
  boy.display();
  stone1.display();
  mango1.display();
  mango2.display()
  mango3.display()
  mango4.display()
  rope.display();

  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);

  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(this.stone1, {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased(){
	rope.fly();
  }

  function detectCollision(lstone,lmango){
	  mangoBodyPosition = lmango.body.position
	  stoneBodyPosition = lstone.body.position

     var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
    if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
	
	}
	function keyPressed(){
       if(keyCode === 32){
		   Matter.Body.setPosition(stone1.body,{x:100,y:320})
		   launcherObject.attach(stone1.body)
	   }

	}


