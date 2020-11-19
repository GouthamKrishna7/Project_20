var car,wall;
var edge
var weight,speed;
var deformation
function setup() {
  createCanvas(800,400);
car = createSprite(50,200,50,50)
wall = createSprite(700,200,10,height/2)
wall.shapeColor="Blue"
  speed=Math.round(random(55,90))
  weight=Math.round(random(400,1500))
  edge = createEdgeSprites()
}

function draw() {
  background("Black");
  car.velocityX=speed  
  deformation=(0.5*weight*speed*speed)/22500
  if(car.isTouching(wall)&&deformation<100){
    car.velocityX=0
    car.shapeColor=color(0,255,0)
  }
  if(car.isTouching(wall)&&deformation>=100&&deformation<=180){
    car.velocityX=0
    car.shapeColor=color(230,230,0)
  }
  if(car.isTouching(wall)&&deformation>180){
    car.velocityX=0
    car.shapeColor=color(255,0,0)
  }
  car.collide(edge)
  drawSprites();
}