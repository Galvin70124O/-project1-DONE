
var wall,car;
var deformation;
var speed, weight;



function setup() {
  createCanvas(1600,400);

  speed= random(10,50)
weight=random(400,550)
car=createSprite(50,200,50,50)
wall=createSprite(1500,200,60,height/2)
car.velocityX=10;
deformation =0.5*weight*speed*speed/2250;
}

function draw() {
  background("white");
  if (collision(car,wall) && deformation<100) {
  car.shapeColor=rgb(0,255,0)
  car.velocityX=0;
  }
  if (collision(car,wall) && deformation>100 && deformation<180) {
    car.shapeColor=rgb(230,230,0)
    car.velocityX=0;
    }
    if (collision(car,wall) && deformation>180) {
      car.shapeColor=rgb(255,0,0)
      car.velocityX=0;
      }
  drawSprites();
}
function collision ( object1,object2) {
  if (object1.x - object2.x < object1.width/2 + object2.width/2 && object2.x - object1.x < object2.width/2 + object1.width/2 && object1.x - object2.x < object1.width/2 + object2.width/2 && object2.y - object1.y < object2.height/2 + object1.height/2 ) {
    return true
  }}