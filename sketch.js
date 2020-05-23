var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(50, 200, 20, 50);
  fixedRect.shapeColor ="green";
  fixedRect.velocityX = 2;
  movingRect = createSprite(500, 200, 30, 70);
  movingRect.shapeColor ="green";
  movingRect.velocityX =-2;

}

function draw() {
  background(0);
  
  //movingRect.x = mouseX;
  //movingRect.y = mouseY;

  /*if(isTouching(movingRect, fixedRect)) {
    fixedRect.shapeColor ="red";
    movingRect.shapeColor ="red";
  }
  else{
    fixedRect.shapeColor ="green";
    movingRect.shapeColor ="green";
  }*/

  BounceOff(fixedRect, movingRect);

  drawSprites();
}


