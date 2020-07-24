var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b","03f81584-abc8-4c8b-adc9-94ed7a51e88d","1ee8eb00-3cc2-4ef4-a2dc-e946cf50eec7","4d2eeaca-e60f-4f35-870f-bfa19880ee7c"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":10,"looping":true,"frameDelay":12,"version":"2uKAt3c4mZYlXVVEYVTl3.hLNOtwvFAx","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"Banana","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"l5FSG.ohFVDj4iQusANoB968MLzyMRdT","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"Stone","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"jKCHTeexeZspiv8EkozuuTrPmu.WJnl7","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png"},"03f81584-abc8-4c8b-adc9-94ed7a51e88d":{"name":"GAME OVER","sourceUrl":"assets/v3/animations/myRlu05xULe6l3EpXi7s4CJHtdnLCxFc5n1MRBID9Sc/03f81584-abc8-4c8b-adc9-94ed7a51e88d.png","frameSize":{"x":474,"y":476},"frameCount":1,"looping":true,"frameDelay":4,"version":"bQRJgqtaXmHXvPg_88cIWtm.H7ifIHXN","loadedFromSource":true,"saved":true,"sourceSize":{"x":474,"y":476},"rootRelativePath":"assets/v3/animations/myRlu05xULe6l3EpXi7s4CJHtdnLCxFc5n1MRBID9Sc/03f81584-abc8-4c8b-adc9-94ed7a51e88d.png"},"1ee8eb00-3cc2-4ef4-a2dc-e946cf50eec7":{"name":"Reset","sourceUrl":"assets/v3/animations/myRlu05xULe6l3EpXi7s4CJHtdnLCxFc5n1MRBID9Sc/1ee8eb00-3cc2-4ef4-a2dc-e946cf50eec7.png","frameSize":{"x":802,"y":520},"frameCount":1,"looping":true,"frameDelay":4,"version":"JkJhdiWmK0OULX.ds.GMNP5L46f_3uny","loadedFromSource":true,"saved":true,"sourceSize":{"x":802,"y":520},"rootRelativePath":"assets/v3/animations/myRlu05xULe6l3EpXi7s4CJHtdnLCxFc5n1MRBID9Sc/1ee8eb00-3cc2-4ef4-a2dc-e946cf50eec7.png"},"4d2eeaca-e60f-4f35-870f-bfa19880ee7c":{"name":"pine_trees_1","sourceUrl":"assets/api/v1/animation-library/gamelab/z8Dgk.em0WaIbb.0CaPSgLIoJa8HoEZe/category_backgrounds/pine_trees.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"z8Dgk.em0WaIbb.0CaPSgLIoJa8HoEZe","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/z8Dgk.em0WaIbb.0CaPSgLIoJa8HoEZe/category_backgrounds/pine_trees.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bG=createSprite(20,20,400,400);
bG.setAnimation("pine_trees_1");
bG.x=bG.width/2;
bG.scale=2.5;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey = createSprite(100,340,20,50);
monkey.setAnimation("monkey");
monkey.scale=0.1;

var ground = createSprite(400,350,800,10);
ground.visible=false;

var bananaGroup = createGroup();
var obstacleGroup = createGroup();

var survivalTime=5;

var gameOver=createSprite(200,240);
gameOver.setAnimation("GAME OVER");
gameOver.scale=0.2;
var restart=createSprite(200,340);
restart.setAnimation("Reset");
restart.scale=0.2;

gameOver.visible = false;
restart.visible = false;

stroke("black"); 
textSize(20);
fill("black");

function draw() {
  
background(255);


if (gameState===PLAY){
  
  bG.velocityX=-4;
  
   monkey.collide(ground);
  
  if (bG.x < 0 ){
    bG.x = bG.width/2;
  }
  
  if (bananaGroup.isTouching(monkey)){
      survivalTime = survivalTime + 1;
      bananaGroup.destroyEach();
    } 
    
  if (obstacleGroup.isTouching(monkey)){
      survivalTime = survivalTime - 1;
      monkey.scale=0.1;
      obstacleGroup.destroyEach();
    }
    
  if(keyDown("space") && monkey.y>313){
      monkey.velocityY = -13;
    }
    
    if(survivalTime%10===0&&survivalTime>0){
      monkey.scale=monkey.scale + 0.0001;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
                                            
  
    food();
 
    obstacles();
     

  if(survivalTime===0){
      gameState=END;
  }
    
}

  else if (gameState===END){
    
    bG.velocityX=0;
    
    gameOver.visible = true;
    restart.visible = true;
    
    obstacleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    
    monkey.velocityY = 0;
    monkey.scale=0.1;
     
    obstacleGroup.destroyEach();
    bananaGroup.destroyEach();
    
    
  
}

if(mousePressedOver(restart)) {
    reset();
  }
   
   

 
  drawSprites();
  
  text("Survival Time: " + survivalTime , 200, 50);
}

function reset(){

  gameState=PLAY;
  monkey.scale=0.1;
  restart.visible = false;
  gameOver.visible = false;
  obstacleGroup.destroyEach();
  bananaGroup.destroyEach();
  survivalTime = 5;
  
}


function food(){
  if(World.frameCount % 70 === 0) {
    var banana=createSprite(400,365,10,40);
    banana.velocityX=-4;
    banana.setAnimation("Banana");
    banana.scale=0.05;
    banana.y = randomNumber(220,280);
    banana.lifetime=120;
    
     bananaGroup.add(banana);
     
     
}

}

function obstacles(){
  if(World.frameCount % 100 === 0){
  var obstacle= createSprite(400,335,10,40);
  obstacle.velocityX=-4;
  obstacle.setAnimation("Stone");
  obstacle.scale=0.15;
  obstacle.lifetime=120;
  
  obstacleGroup.add(obstacle);
  
  }
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
