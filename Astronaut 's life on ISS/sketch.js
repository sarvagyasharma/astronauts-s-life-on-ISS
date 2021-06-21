var bg ;
var sleep;
var astronaut;
var gym;
var bath;
var brush;
var drink ;
var eat ;
var move ;

function preload(){
  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  gym = loadAnimation("images/gym1.png","images/gym2.png");
  bath = loadAnimation("images/bath1.png","images/bath2.png");
  brush = loadAnimation("images/brush.png");
  drink = loadAnimation("images/drink1.png","images/drink2.png");
 eat = loadAnimation("images/eat1.png","images/eat2.png");
  move = 
  loadAnimation("images/move.png","images/move.png","images/move1.png","images/move1.png");

}

function setup() {
  createCanvas(700,700);
  astronaut = createSprite(556,480,10,10);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.addAnimation("gymming",gym);
  astronaut.addAnimation("bathing",bath);
  astronaut.addAnimation("brushing",brush);
  astronaut.addAnimation("drinking",drink);
  astronaut.addAnimation("eating",eat);
  

  astronaut.scale = 0.15;


}

function draw() {
  background(bg);
  drawSprites();
  edges = createEdgeSprites();
astronaut.bounceOff(edges);
  
  if(keyDown("m")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.y = 400;
    astronaut.velocityX = 2
    astronaut.velocityY = 2
  }
if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing");
  astronaut.y = 400;
  astronaut.x = 200;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
  
}
if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gymming",gym);
  astronaut.changeAnimation("gymming");
  astronaut.y = 400;
  astronaut.x = 400;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}
if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating");
  astronaut.y = 500;
  astronaut.x = 500;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}
if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnimation("bathing");
  astronaut.y = 500;
  astronaut.x = 200;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}
}