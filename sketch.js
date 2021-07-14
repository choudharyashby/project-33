const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
 const Body = Matter.Body
 
 var backgroundImg
  var snow = []
  var engine,world;
  
 
  

 function preload () {
  backgroundImg = loadImage("snow3.jpg");

}




function setup() {
  engine = Engine.create();
  world = engine.world;
  
  createCanvas(800,400);
  if(frameCount % 50 === 0){ 
    for(var i=0; i<200; i++){ 
    snow.push(new Snow(random(0,800), random(0,800))); 

  } 
  }

  
   //snow = new Snow(400,100,30);
   


   Engine.run(engine);
}

function draw() {
  background(backgroundImg);  

  for(var i = 0; i<200; i++)
  { snow[i].showDrop(); 
    snow[i].updateY() 
  }

  drawSprites();
}