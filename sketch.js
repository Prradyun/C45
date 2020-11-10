var playerShip,attackerShip;
var playerShipImg,attackerShipImg;
var missileGroup,missileImg;

function preload(){
   playerShipImg = loadImage("images/PlayerShip.png");
   attackerShipImg = loadImage("images/AttackerShip.png");
   missileImg = loadImage("images/Missile.png");
}
function setup() {
  createCanvas(1000, 400);
   playerShip = createSprite(100,200,10,10);
   playerShip.addImage("PlayerShip",playerShipImg);
   attackerShip = createSprite(900,200,10,10);
   attackerShip.addImage("AttackerShip",attackerShipImg);

   missileGroup = new Group();




}

function draw() {
  background("black");

  if(keyDown("UP_ARROW")){
    playerShip.y = playerShip.y-10;
  }

  
  if(keyDown("DOWN_ARROW")){
    playerShip.y = playerShip.y+10;
  }
 
  playerShip.display();
  attackerShip.display();
  spawnMissile();
  drawSprites();
}

function spawnMissile() {
  //write code here to spawn the missiles
  if (frameCount % 60 === 0) {
    var missile = createSprite(900,200,40,10);
    missile.y = Math.round(random(50,350));
    missile.addImage("Missile",missileImg);
    
    missile.velocityX = -2;
    
     //assign lifetime to the variable
    missile.lifetime = 900;
    
 
   
    
    //add each missile to the group
    missileGroup.add(missile);
  }
  
}
