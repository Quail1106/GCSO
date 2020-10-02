var car,wall;

var speed,weight;

var deformation

speed=random(55,90);
weight=random(400,1500);

car = createSprite(50,200,50,50)
car.velocityX = speed;

deformation = 0.5*weight*speed*speed/22500

wall = rect(1500,200,60,400/2)
wall.shapeColor = rgb(80,80,80)

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
 background(0); 

 drawSprites();

 if(wall.x-car.x < (car.width+wall.width)/2){
 
  if(deformation > 180){
      car.shapeColor = rgb(255,0,0)
    }
    
    if(deformation > 100 && deformation < 180){
      car.shapeColor = rgb(230,230,0)
    }

    if(deformation < 100){
      car.shapeColor = rgb(0,255,0)
    }
  } 
}