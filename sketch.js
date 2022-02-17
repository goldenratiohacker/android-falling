var PLAY = 1;
var OVER = 0;
gameState = PLAY;


var android,android_img,dead,dead_img;
var ground1,ground2,ground3,ground4;
var ground1_img,ground2_img,ground3_img,ground4_img,killground_img;
var agroup,bgroup,dgroup;
var score = 0;


function preload(){
android_img = loadImage("android1.png")
ground1_img = loadImage("img2.png")
ground2_img = loadImage("img6.png")
killground_img = loadImage("img1.png")
dead_img = loadImage("dead.png")
}


function setup() {
createCanvas(500,750);

android = createSprite(250,600,20,20);
android.addImage("run",android_img);
android.scale = 0.5;

agroup = new Group();
bgroup = new Group();
dgroup = new Group();

android.setCollider("rectangle",0,0,10,10);
//android.debug = "true"
}





function draw() {
background("pink");

fill("red")
textSize(25);
text("score = "+score,30,40);

if(gameState === PLAY){
if(keyDown("space")){
  android.velocityY = -12; 
  score = score+1;
}else{
  android.collide(agroup);
  android.collide(bgroup);
  android.collide(dgroup);
}

android.velocityY = android.velocityY+ 0.7;
android.x = World.mouseX;

if(android.isTouching(dgroup) || android.y <0 || android.y >750){
  gameState = OVER;
  }
  
}
else if(gameState === OVER){
  android.x = 250;
  android.y = 370;
  android.velocityY = 0;
  agroup.setVelocityYEach(0);
  bgroup.setVelocityYEach(0);
  dgroup.setVelocityYEach(0);
  dead = createSprite(250,425,20,20);
  dead.addImage("d",dead_img);
  dead.scale = 2;
}

  drawSprites();
  g1();
  g2();
  g5();
}



function g1(){
if(frameCount%100 === 0){  
ground1 = createSprite(random(50,450),-20,20,20);
ground1.addImage("w",ground1_img);
ground1.scale = 0.4
ground1.velocityY = 4;
ground1.lifetime = 200;
android.depth = ground1.depth;
android.depth = android.depth+1;
agroup.add(ground1);
}
}



function g2(){
  if(frameCount%220 === 0){  
  ground2 = createSprite(random(50,450),-20,20,20);
  ground2.addImage("fd",ground2_img);
  ground2.scale = 0.4
  ground2.velocityY = 3;
  ground2.lifetime = 200;
  android.depth = ground2.depth;
  android.depth = android.depth+1;
  bgroup.add(ground2);
  }
  }

 

function g5(){
  if(frameCount%300 === 0){  
  ground4 = createSprite(random(50,450),-20,20,20);
  ground4.addImage("gh",killground_img);
  ground4.scale = 0.4
  ground4.velocityY = 5;
  ground4.lifetime = 200
  android.depth = ground4.depth;
  android.depth = android.depth+1;
  dgroup.add(ground4);
  }
  }































