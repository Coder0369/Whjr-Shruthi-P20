function preload(){
  bg= loadImage("images/iss.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  sleep= loadImage("images/sleep.png");
  bath = loadAnimation("images/bath1.png","images/bath2.png");
  brush= loadImage("images/brush.png");
  drink = loadAnimation("images/drink1.png","images/drink2.png");
  gym = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
  move = loadAnimation("images/move.png","images/move1.png");
}
function setup() {
  createCanvas(800,400);
  astronaut = createSprite(300, 230, 50, 50);
  astronaut.addImage("sleep",sleep);
  astronaut.scale= 0.1;
}

function draw() {
  background(bg);  
  drawSprites();
  text("Instructions",20,35);
  text("UP ARROW = Brushing",20,35);
  text("DOWN ARROW = Gymming",20,35);
  text("LEFT ARROW = Eating",20,35);
  text("RIGHT ARROW = Bathing ",20,35);
  text("m kEY = Moving ",20,35);

  edges = createEdgeSprite();
  astronaut.bounceOff(edges);

  if(keyDown("UP_ARROW")){
    astronaut.addImage("brushing",brush);
    astronaut.changeImage("brushing");
    astronaut.y = 350;
    astronaut.velocityX= 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("Gymming",gym);
    astronaut.changeAnimation("Gymming");
    astronaut.y = 350;
    astronaut.velocityX= 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("Eating",eat);
    astronaut.changeAnimation("Eating");
    astronaut.y = 350;
    astronaut.velocityX= 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX= 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("m_KEY")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("move");
    astronaut.y = 350;
    astronaut.velocityX= 0;
    astronaut.velocityY = 0;
  }

  
}