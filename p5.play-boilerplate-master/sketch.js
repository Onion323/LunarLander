var rocket, moon, a1, a2;
var rocketD, moonD, a1D, a2D, a3D, a4D;
var lives = 2;
var aDGroup;
var levels = "inital";
var play;
var life1;
var life1D, life2D, life3D, life4D, life5D;


function preload() {
  rocket = loadImage("images/rocket1.png");
  moon = loadImage("images/moon.PNG");
  a1 = loadImage("images/a2.png");
  life1 = loadImage("images/heart.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  rocketD = createSprite(150, 250);
  rocketD.addImage(rocket);
  rocketD.scale = 0.05;
  rocketD.visible = false;

  life1D = createSprite(50,50)
  life1D.addImage(life1);
  life1D.scale = 0.03;

  life2D = createSprite(90,50)
  life2D.addImage(life1);
  life2D.scale = 0.03;

  life3D = createSprite(130,50)
  life3D.addImage(life1);
  life3D.scale = 0.03;

  life4D = createSprite(170,50)
  life4D.addImage(life1);
  life4D.scale = 0.03;

  life5D = createSprite(210,50)
  life5D.addImage(life1);
  life5D.scale = 0.03;

  play = createButton("PLAY");
  aDGroup = new Group();
}

function draw() {
  background(moon);
  drawSprites();

  

  if (levels === "inital") {
    textSize(250);
    fill(0, 0, 0);
    text("Lunar Lander", width / 2 - 600, height / 2 - 250);
    play.position(width / 2, height / 2);
    play.style('font-size', '100px');
    play.style('background-color', 'orange')

    play.mousePressed(()=>{
      play.hide();
      levels = "stage_1"
    })
      
  }
  else if (levels === "stage_1") {
    rocketD.visible = true;
    if (keyDown("up") && keyDown("right")) {
      rocketD.x = rocketD.x + 4;
      rocketD.y = rocketD.y - 8;
    }

    if (keyDown("up") && keyDown("left")) {
      rocketD.x = rocketD.x - 4;
      rocketD.y = rocketD.y - 8;
    }

    rocketD.y = rocketD.y + 4;

    if (World.frameCount % 40 == 0) {
      asteroids();
    }
    if (aDGroup.isTouching(rocketD)) {
      lives = lives - 1
      reset();
    }
  }

  console.log(lives);
}

function reset(){
  rocketD.x = 150;
  rocketD.y = 250;
  aDGroup.destroyEach();
}

function asteroids() {
  var aD = createSprite(width + 100, random(0, height - 200));
  aD.addImage(a1);
  aD.scale = 0.2;
  aD.velocityX = -7;
  aDGroup.add(aD);
}
