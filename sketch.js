var movingRect;
var fixedRect;
var object;
var object1;

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(200, 200, 100, 50);
  object = createSprite(100,200,50,50);
  object1 = createSprite(700,200,50,50);
  object.shapeColor = 'green';
  object1.shapeColor = 'green';
  movingRect.shapeColor='green';
  fixedRect.shapeColor='green';
}

function draw() {
  background(255,255,255);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect, object)) {
    object.shapeColor = 'red';
    movingRect.shapeColor = 'red';
  }

  else {
    movingRect.shapeColor='green';
    object.shapeColor='green';
  }
  drawSprites();
}