var player,playerImage;
var bg,bgImage;
var coin,coinImage,coinGroup;
var goomba,goombaImage,goombaGroup;

gameState="PLAY";

function preload(){
playerImage=loadImage("mario.png");
bgImage=loadImage("backg.png.jpg");
coinImage=loadImage("coin.png");
goombaImage=loadImage("goomba.png");  
  
}

function setup() {
 createCanvas(600,600);
  
  bg=createSprite(300,100,10,10);
  bg.addImage("bg",bgImage);
  bg.velocityX=1;
  bg.scale=2;
  
  player=createSprite(100,200,20,20);
  player.addImage("player",playerImage);
  player.scale=0.2;
  player.velocityX=0;
  
  coinGroup=new Group();
  goombaGroup=new Group();
}

function draw() {
 background("white");
  
  if(gameState==="PLAY"){
  if(bg.x>400){
    bg.x=300;
  }
  
    
  
  if(keyDown("UP_ARROW")){
    player.y=player.y-3;
  }
  if(keyDown("DOWN_ARROW")){
    player.y=player.y+3;
  }
    if(coinGroup.isTouching(player)){
       goomba.velocityX=-18;
       coinGroup.destroyEach();
  }
    if(goombaGroup.isTouching(player)){
       player.scale=0.4;
    
  }
  }
  
      
     
  if(gameState==="END"){
    player.destroy();
    coinGroup.destroyEach();
    goombaGroup.destroyEach();
    bg.destroy();
    
    fill("yellow");
    textSize(30);
    text("GAMEOVER",230,250);
  }
  
   spawnCoins();
   spawnGoomba();
  drawSprites();
}
function spawnCoins(){
   if(frameCount%150===0){
     coin=createSprite(500,50);
     coin.addImage("coin",coinImage);
     coin.y=Math.round(random(20,400));
     coin.velocityX=-18;
     coin.lifetime=800; 
     coin.scale=0.1;
     coinGroup.add(coin);
   } 
}
  
  function spawnGoomba(){
   if(frameCount%120===0){
     goomba=createSprite(500,50);
     goomba.addImage("goomba",goombaImage);
     goomba.y=Math.round(random(130,400));
     goomba.velocityX=-16;
     goomba.lifetime=800; 
     goomba.scale=0.5;
     goombaGroup.add(goomba);
     
   }
  }