var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400,100,50,80);
  movingRect = createSprite(400,800,80,30);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  movingRect.velocityY = -5;
  fixedRect.velocityY = 5;
}

function draw() {
  background("black");  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

 /* text("Moving rect x Position: "+movingRect.x,600,100);
  text("Fixed rect x Position: "+fixedRect.x,600,130);
  text("Moving rect Width: "+movingRect.width,600,160);
  text("fixed rect width: "+fixedRect.width,600,190);*/

 /* if(movingRect.x-fixedRect.x < (movingRect.width+fixedRect.width)/2 &&
  fixedRect.x-movingRect.x < (movingRect.width+fixedRect.width)/2 && 
  movingRect.y-fixedRect.y < (movingRect.height+fixedRect.height)/2 &&
  fixedRect.y-movingRect.y < (movingRect.height+fixedRect.height)/2
    ) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
*/
   
if(movingRect.x-fixedRect.x < (movingRect.width+fixedRect.width)/2 &&
fixedRect.x-movingRect.x < (movingRect.width+fixedRect.width)/2) {
  movingRect.velocityX = movingRect.velocityX * (-1);
  fixedRect.velocityX = movingRect.velocityX * (-1); 
}
if(movingRect.y-fixedRect.y < (movingRect.height+fixedRect.height)/2 &&
fixedRect.y-movingRect.y < (movingRect.height+fixedRect.height)/2) {
  movingRect.velocityY = movingRect.velocityY * (-1);
  fixedRect.velocityY = movingRect.velocityY * (-1); 
}


  drawSprites();
}