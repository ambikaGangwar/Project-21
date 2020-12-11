
var bullet;
var wall;
var speed;
var weight,thickness;

function setup() {
createCanvas(1600,400);
 
speed=random(223,321);
weight=random(30,52);
thickness=random(22,83);
 
bullet=createSprite(50,200,50,50);
 bullet.velocityX=speed;
 bullet.shapeColor=color(255);

wall=createSprite(1500,200,thickness,height/2);
 wall.shapeColor=color(80,80,80);

 bullet.collide(wall);

}

function draw() {
 
 if(hasCollided(bullet,wall))
 {
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage>10){
  wall.shapeColor=color(255,0,0);
}
if(damage<10){
  wall.shapeColor=color(0,255,0)
}

background(0);  
drawSprites();
}

 }
function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false;
}
 

 
//if(wall.x-bullet.x<(bullet.width+wall.width)/2)
//{
//bullet.velocityX=0;
//var damage=0.5*weight*speed*speed/22500;
//if(damage>180&& damage>100)
//{
 // wall.shapeColor=color(255,0,0);
//}
//if(damage<180 && damage>100)
//{
//  wall.shapeColor=color(230,230,0);
//}
//if(damage <100){
//  wall.shapeColor=color(0,255,0);
//}

//}
