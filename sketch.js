var rec,rec1,edges;

function setup() {
  createCanvas(1200,600);

edges=createEdgeSprites();

ob =createSprite(400,400,50,50);
ob.shapeColor="yellow";
ob1=createSprite(100,100,50,50);
ob1.shapeColor="orange";
ob1.velocityY=5;
rec2=createSprite(100,200,50,50);
rec2.shapeColor="purple";
rec3=createSprite(100,300,50,50);
rec2.velocityY=-5;
rec3.shapeColor="yellow";
rec4=createSprite(100,400,50,50);
rec4.shapeColor="red";
rec4.velocityY=5;
rec5=createSprite(100,500,50,50);
rec5.shapeColor="cyan";
rec5.velocityY=-5;


}

function draw() {
  background(0); 
  
  Bounce(ob1,rec2);
Bounce(rec4,rec5);
  
ob1.bounceOff(edges);

rec2.bounceOff(edges);

rec4.bounceOff(edges);
rec5.bounceOff(edges);

  drawSprites();
} 


function Touch(rec,rec1){
  if(rec.x-rec1.x<rec.width/2+rec1.width/2 && rec1.x-rec.x<rec.width/2+rec1.width/2 &&
    rec.y-rec1.y<rec.height/2+rec1.height/2 && rec1.y-rec.y<rec.height/2+rec1.height/2){
 return true;
 }
 else{
   return false;
 }
}

function Bounce(rec,rec1){
if(rec.x-rec1.x<rec.width/2+rec1.width/2 && rec1.x-rec.x<rec.width/2+rec1.width/2){
  rec.velocityX=(-1)*rec.velocityX;
  rec1.velocityX=(-1)*rec1.velocityX;
}
if(rec.y-rec1.y<rec.height/2+rec1.height/2 && rec1.y-rec.y<rec.height/2+rec1.height/2){
  rec.velocityY=(-1)*rec.velocityY;
  rec1.velocityY=(-1)*rec1.velocityY;
}
}