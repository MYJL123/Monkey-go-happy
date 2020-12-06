
var player, player_running;
var ground;

var FoodGroup, bananaImage;
var obstaclesGroup, obstacleImage;

var score=0;


var survivalTime=0;

player = createSprite(100,340,20,50);
player.setAnimation("monkey");
player.scale=0.1;

ground = createSprite(400,350,800,10);
ground.velocityX=-4;
ground.x=ground.width/2;

FoodGroup = new Group();
obstaclesGroup = new Group();

score = 0;





function draw() {
  
  background(255);
  
    
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  
   
    if(keyDown("space") ) {
      player.velocityY = -12;
    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);   
    spawnFood();
    spawnObstacles();
 
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);        
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/60) ;
  text("Survival Time: "+ survivalTime, 100,50);
}

function spawnFood() {
  if (frameCount%80===0) {
    var x = randomNumber(200,300);
    var banana = createSprite(450,x,10,10);
    banana.   velocityX = -6;
    banana.setAnimation("Banana");
    banana.scale=0.05;
    banana.lifetime= 500;
    FoodGroup.add(banana);
}
}

function spawnObstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(800,320,10,40);
    obstacle.velocityX = -6;
    
    //add image to the obstacle 
    obstacle.setAnimation("Stone");
    obstacle.scale=0.15;
    
    //lifetime to the obstacle     
    obstacle.lifetime = 300;
    
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}


  
