var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["cd43ee88-6cc1-4ebb-bffb-43b3bebfe000","3db63bf5-6c92-4d6b-9746-d9c1f9e7158a"],"propsByKey":{"cd43ee88-6cc1-4ebb-bffb-43b3bebfe000":{"name":"a","categories":["people"],"frameCount":1,"frameSize":{"x":165,"y":399},"looping":true,"frameDelay":12,"jsonLastModified":"2021-01-15 21:43:56 UTC","pngLastModified":"2021-01-15 21:43:56 UTC","version":"mZBwUeQ46neY7fkSgkWLcM9Oe33p2m10","sourceUrl":null,"sourceSize":{"x":165,"y":399},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/cd43ee88-6cc1-4ebb-bffb-43b3bebfe000.png"},"3db63bf5-6c92-4d6b-9746-d9c1f9e7158a":{"name":"b","categories":["sports"],"frameCount":1,"frameSize":{"x":393,"y":394},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:36:20 UTC","pngLastModified":"2021-01-05 19:36:27 UTC","version":"HnGkChZ0Lf5fTeAmaQDwhmGSUiF59YcY","sourceUrl":"assets/api/v1/animation-library/gamelab/HnGkChZ0Lf5fTeAmaQDwhmGSUiF59YcY/category_sports/golfball.png","sourceSize":{"x":393,"y":394},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/HnGkChZ0Lf5fTeAmaQDwhmGSUiF59YcY/category_sports/golfball.png"}}};
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

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;
var gameState="serve";

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  sam.setAnimation("a")
  sam.scale = 0.03;
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car1.setAnimation("b")
  car1.scale = .06;
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car2.setAnimation("b")
  car2.scale = 0.06;
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car3.setAnimation("b")
  car3.scale = 0.06;
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  car4.setAnimation("b")
  car4.scale = 0.06;
  
 
//add the velocity to make the car move.
car1.velocityY = 8;
car2.velocityY = 8;
car3.velocityY = -8;
car4.velocityY = -8;


function draw() {
   background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// create bounceoff function to make the car bounceoff the boundaries
car1.bounceOff(boundary2)
car1.bounceOff(boundary1)
car2.bounceOff(boundary2)
car2.bounceOff(boundary1)
car3.bounceOff(boundary2)
car3.bounceOff(boundary1)
car4.bounceOff(boundary2)
car4.bounceOff(boundary1)
//Add the condition to make the sam move left and right
 if(keyDown("right")) {
  sam.x = sam.x+2;
 }
  
if(keyDown("left")) {
  sam.x = sam.x-2;
 }
//Add the condition to reduce the life of sam if it touches the car.
  if(sam.isTouching(car1) || sam.isTouching(car2) || sam.isTouching(car3) || sam.isTouching(car4)) {
    sam.x = 20;
    sam.y = 190;
    life = life+1;
    
  }
  

 drawSprites();
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
