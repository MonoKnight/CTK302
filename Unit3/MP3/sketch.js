//health variables
let [pHealth, pMax, pRatio, pHColor, eHealth, eMax, eRatio, eHColor] = [5, 5, 1, 0, 50, 50, 1, 0];
//player variables
let [pSize, playerPos, pSpeed, pTimer, pCooldown, isAlive] = [90, 0, 7.5, 0, false, true];
//player bullet variables
let [pBTimer, pBWidth, pBHeight, pBMultiplier, pBCooldown, pPT, pbullets, pSpawn] = [0, 20, 40, 2, 60, 0, [], []];
//enemy variables 
let [eF, eIT, eSize, enemyPos, eSpeed, eAMultiplier, enemyDirection, eIsAlive] = [0, 0, 200, 0, 5, 1, true, true];
//enemy bullet variables
let [bTimer, bSize, bCooldown, bulletCount, bullets, velX, velY] = [0, 30, 1, 0, [], [], []];
//state variables
let [pUState, lCState, pState, gameState, eBState, eAnger, inStartAnim] = [0, 0, 1, 0, 0, false, true];
//difficulty variables
let [dV, bState] = [0, [false]];
//start animation variables
let [sAY, sATimer] = [-400, 0];
//dev variables
let [devV, devState, devM, necoMode, necoBoss] = [0, false, 1, false, false];
//assets
let [iV, dET, dEV, i, pI, bI, eI, dEI, nI, s, f, pUI] = [0, 0, 0, [], [], [], [], [], [], [], [], []];


function preload(){
  i[0] = loadImage("assets/images/Glass/GlassLight.png");
  i[1] = loadImage("assets/images/Glass/GlassMedium.png");
  i[2] = loadImage("assets/images/Glass/GlassHeavy.png");
  i[3] = loadImage("assets/images/Background/IGBackground.png");
  i[4] = loadImage("assets/images/Powerups/Shield.png");
  i[5] = loadImage("assets/images/Background/MMBackground.png");
  pI[0] = loadImage("assets/images/PC/PCLeanLeft.png");
  pI[1] = loadImage("assets/images/PC/PCNeutral.png");
  pI[2] = loadImage("assets/images/PC/PCLeanRight.png");
  bI[0] = loadImage("assets/images/Bullets/RedCircle.png");
  bI[1] = loadImage("assets/images/Bullets/BlueArrow2.png");
  bI[2] = loadImage("assets/images/Bullets/YellowKnife.png");
  bI[3] = loadImage("assets/images/Bullets/BlackStar.png");
  bI[4] = loadImage("assets/images/Bullets/BlueArrow.png");
  pUI[0] = loadImage("assets/images/Powerups/Heart.png");
  pUI[1] = loadImage("assets/images/Powerups/Star.png");
  eI[0] = loadImage("assets/images/Enemy/GoombudLeft.png");
  eI[1] = loadImage("assets/images/Enemy/GoombudRight.png");
  eI[2] = loadImage("assets/images/Enemy/AGLeft.png");
  eI[3] = loadImage("assets/images/Enemy/AGRight.png");
  //pUI[2] = loadImage("assets/images/BulletBlack.png");
  s[1] = loadSound("assets/music/Easy.mp3");
  s[2] = loadSound("assets/music/Medium.mp3");
  s[3] = loadSound("assets/music/Hard.mp3");
  s[4] = loadSound("assets/music/NightofNights.mp3");
  s[5] = loadSound("assets/music/dENoise.mp3");
  s[6] = loadSound("assets/music/catvillage.mp3");
  f[0] = loadFont("assets/fonts/Tfont2.ttf");
  for(let i = 0; i < 17; i++) dEI[i] = loadImage("assets/images/Explosion/DExplosion (" + (i+1) +").gif");
  for(let i = 0; i < 8; i++) nI[i] = loadImage("assets/images/neco/neco (" + (i+1) +").gif");
}

function setup() {
  createCanvas(1200, 1200);
  angleMode(DEGREES);
  rectMode(CENTER);
  textAlign(CENTER);
  imageMode(CENTER);
  pHColor = createVector(0, 0, 0);
  eHColor = createVector(0, 0, 0);
  playerPos = createVector(width/2, 900);
  enemyPos = createVector(width/2, 200);
  textFont(f[0]);
  for(let i = 1; i < s.length; i++) s[i].setVolume(0.5);
}


function draw() {
  background(220);
  fill(255);
  noStroke();
  print(gameState);

  switch(gameState){
    case 0: //start screen
      startGame();
      break;
    case 1: //in game
      if(inStartAnim == true){
        startAnim()
      }
      else if(inStartAnim == false){
        bossFight();
        player();
        enemy();
        shootBullet();
        powerUpSpawn();
        health();
      }
      break;
    case 2: //game over
      if (s[dV].isPlaying()) s[dV].stop();
      gameOver();
      noStroke();
      health();
      break;
    case 3: //win
      if (s[dV].isPlaying()) s[dV].stop();
      youWin();
      noStroke();
      health(); 
      break;
    case 4: //you explode
      if (s[dV].isPlaying()) s[dV].stop();
      image(i[3], width/2, height/2, width, height);
      health();
      enemyimage(enemyPos.x, enemyPos.y, 0);
      image(pI[1], playerPos.x, playerPos.y, pSize - 30, pSize);
      youExplode(playerPos.x, playerPos.y);
      break;
    case 5: //enemy explodes
      if (s[dV].isPlaying()) s[dV].stop();
      image(i[3], width/2, height/2, width, height);
      health();
      enemyimage(enemyPos.x, enemyPos.y, 0);
      image(pI[1], playerPos.x, playerPos.y, pSize - 30, pSize);
      enemyExplode(enemyPos.x, enemyPos.y);
      break;
  }
}

function mouseReleased(){

  switch(gameState) {
    case 0:
      devV++;
      if(devV >= 3) necoMode = true;
      if(devV >= 5) devState = true, devM = 25;
      break;
    case 1:
      break;
    case 2:
      gameReset();
      lCState++;
      gameState = 1;
      break;
    case 3:
      gameReset();
      lCState = 0;
      gameState = 1;
      break;
  }
  //difficulty modifiers
  if(bState[0] == true && gameState == 0) gameState++, dV = 1, difficulty();
  if(bState[1] == true && gameState == 0) gameState++, dV = 2, difficulty();
  if(bState[2] == true && gameState == 0) gameState++, dV = 3, difficulty();
  if(bState[3] == true && gameState == 0) gameState++, dV = 4, difficulty();
  if(bState[5] == true && gameState == 0) gameState++, dV = 6, difficulty(), necoBoss = true;
}

function difficulty(){
  if(dV == 1) eHealth = 50, eMax = 50, pHealth = 7, pMax = 7, bCooldown = 2;
  else if(dV == 2) eHealth = 100, eMax = 100, pHealth = 5, pMax = 5, bCooldown = 1.25;
  else if(dV == 3) eHealth = 150, eMax = 150, pHealth = 5, pMax = 5, bCooldown = 0.75;
  else if(dV == 4) eHealth = 200, eMax = 200, pHealth = 3, pMax = 3, bCooldown = 0.5;
  else if(dV == 6) eHealth = 100, eMax = 100, pHealth = 5, pMax = 5, bCooldown = 1.25;
}

function startGame(){
  image(i[5], width/2, height/2, width, height);
  fill(255);
  strokeWeight(5);
  stroke("black");
  textSize(100);
  text("Bullet Hell Demo", width/2, height/2 - 300);
  textSize(50);
  text("CONTROLS:\nMovement: Arrow Keys / WASD\nShoot: Shift", width/2, 400)
  noStroke();
  buttonCreate(0, "Easy", 200, 800, 350, 150, "#69fffc", "#54c7c5");
  buttonCreate(1, "Medium", 600, 800, 350, 150, "#f7ec4d", "#b3aa36");
  buttonCreate(2, "Hard", 1000, 800, 350, 150, "#db0000", "#910101");
  buttonCreate(3, "EXTREME", 600, 1000, 350, 150, "#7419a8", "#4e1270");
  if(devState == true)buttonCreate(4, "Dev Mode On", 200, 100, 350, 150, "#53cf29", "#53cf29");
  if(necoMode == true)buttonCreate(5, "Neco Mode", width-200, 100, 350, 150, "#ffed66", "#bfb24d");
}

//function for starting animation
function startAnim(){
  image(i[3], width/2, height/2, width, height);
  enemyimage(enemyPos.x, enemyPos.y, sAY);
  image(pI[1], playerPos.x, playerPos.y, pSize - 30, pSize);
  sAY += 4;
  textSize(30)
  strokeWeight(2);
  stroke("black");
  text("Press Enter to skip.", width/2, 1000);
  if(sAY >= 0) {
    sAY = 0;
    textSize(30)
    startText();
    sATimer++
    if(sATimer > 5 * 60) inStartAnim = false;
  }
  if(keyIsDown(ENTER)) inStartAnim = false;
}

//function to determine the starting text
function startText(){
  textSize(30);
  if(lCState > 3) lCState = 3;
  switch(lCState){
    case 0:
      switch(dV){
        case 1:
          text("So you want to spar?\nWell I'm always down for a challenge!", width/2, 400);
          break;
        case 2:
          text("So you want to fight?\nAlright, but I wont go easy on you!", width/2, 400);
          break;
        case 3:
          text("A battle? You look tough, I better get serious!", width/2, 400);
          break;
        case 4:
          text("You seem serious, I guess I better give it my all.", width/2, 400);
          break;
      }
      break;
    case 1:
      text("Back again? Well I'll keep going as long as you do!", width/2, 400);
      break;
    case 2:
      text("Your resilience is admireable, but that doesn't mean ill give up!", width/2, 400);
      break;
    case 3:
      text("I can go easier on you if you want, just say the word and I will!", width/2, 400);
      break;
  }
}

//function for when the bossfight starts
function bossFight(){
  image(i[3], width/2, height/2, width, height);
  if(!s[dV].isPlaying()) s[dV].play();
  if(isAlive == false) gameState = 4;
  if(eIsAlive == false) gameState = 5;
}

//function for when you game over
function gameOver(){
  image(i[3], width/2, height/2, width, height);
  //clears all bullets
  bullets.length = 0;
  pbullets.length = 0;
  pSpawn.length = 0;
  //summons enemy in the center
  enemyimage(width/2, height/2 - 300, 0);
  //text
  strokeWeight(3);
  stroke("black");
  textSize(50);
  text("Why don't you come back when\nyou're a bit stronger?", width/2, height/2 - 100);
  textSize(30);
  text("Click to restart, hit escape to go back to the main menu", width/2, height/2 + 100);
  //return to main menu
  if(keyIsDown(ESCAPE)) {
    gameState = 0;
    gameReset();
    lCState = 0;
    devV = 0;
    devState = false;
    devM = 1;
    necoMode = false;
  }
}

//function for when you win the game
function youWin(){
  image(i[3], width/2, height/2, width, height);
  //clears all bullets
  bullets.length = 0;
  pbullets.length = 0;
  //summons enemy in the center
  enemyimage(width/2, height/2 - 300, 0);
  //summons player in the center
  image(pI[1], width/2, 1000, pSize - 30, pSize);
  //text
  strokeWeight(2);
  stroke("black");
  textSize(50);
  text("Ow okay you win ):", width/2, height/2);
  textSize(30);
  text("Click to restart, hit escape to go back to the main menu", width/2, height/2 + 100);
  //return to main menu
  if(keyIsDown(ESCAPE)) {
    gameState = 0;
    lCState = 0;
    gameReset();
    devV = 0;
    devState = false;
    devM = 1;
    necoMode = false;
  }
}

//resets all variables in the game
function gameReset(){
  for(let i = 0; i < bState.length; i++) bState[i] = false;
  difficulty();
  isAlive = true;
  eIsAlive = true;
  enemyDirection = true;
  eAnger = false;
  pCooldown = false;
  inStartAnim = true;
  enemyPos = createVector(width/2, 200);
  playerPos = createVector(width/2, 900);
  eAMultiplier = 1;
  sAY = -300;
  eRatio = 1;
  pBCooldown = 60;
  dET = 0;
  dEV = 0;
  eF = 0;
  pPT = 0;
}

//function to play death anim
function youExplode(eX, eY) {
  if(!s[5].isPlaying()) s[5].play();
  dET++;
  if(dET > 0.1 * 60) {
    dEV++
    if(dEV >= 15) gameState = 2;
    dET = 0;
  }
  image(dEI[dEV], eX, eY, 150, 150);
}

//function to play enemy death anim
function enemyExplode(eX, eY){
  if(!s[5].isPlaying()) s[5].play();
  dET++;
  if(dET > 0.1 * 60) {
    dEV++
    if(dEV >= 15) gameState = 3;
    dET = 0;
  }
  image(dEI[dEV], eX, eY, 300, 300);
}

//function to spawn powerups
function powerUpSpawn(){
  pPT++ 
  if(pPT > 15 * 60){
    pUState = int(random(0,2));
    pSpawn.push(new Powerup());
    pPT = 0;
  }

  for(let i = 0; i < pSpawn.length; i++){
    pSpawn[i].display();
    pSpawn[i].update();

    if(pSpawn[i].pos.dist(playerPos) < (50 / 2) + (pSize / 2)) {
      switch(pSpawn[i].image) {
        case 0:
          if(pHealth < pMax) pHealth ++;
          pSpawn.splice(i, 1);
          break;
        case 1:
          if(pBCooldown > 10) pBCooldown += -10;
          pSpawn.splice(i, 1);
          break;
      }
    }
  }
}

//Healthbar Height = TopY + (Distance Between Top and Bottom Y * (1 - Current Health - Max Health))
function health(){
  pRatio = pHealth/pMax;
  eRatio = eHealth/eMax;
  //Healthbar Boxes
  fill("gray");
  rect(50, 165, 75, 300);
  rect(width-50, 165, 75, 300);
  push();
  imageMode(CORNERS);
  rectMode(CORNERS);
  //Player Health
  if(pRatio > 0.5) pHColor.set(0, 234, 255);
  else if(pRatio > 0.25 && pRatio <= 0.5){
    pHColor.set(141, 10, 255);
    iV = 0;
  } 
  else if(pRatio <= 0.25) {
    pHColor.set(255, 0, 0);
    iV = 1;
  }
  noStroke();
  fill(pHColor.x, pHColor.y, pHColor.z);
  rect(20, (40 + (260 * (1 - pRatio))), 80, 300);
  fill(pHColor.x, pHColor.y, pHColor.z, 50);
  rect(20, 40, 80, 300);
  if(isAlive == false) {
    fill(54, 54, 54);
    rect(20, 40, 80, 300);
    iV = 2;
  }
  if(pRatio <= 0.5) image(i[iV], 20, 40, 80, 300);
  stroke("black");
  strokeWeight(2);
  noFill();
  rect(20, 40, 80, 300);
  //Enemy Health 
  if(eRatio > 0.5) eHColor.set(0, 255, 8);
  else if(eRatio > 0.25 && eRatio <= 0.5){
    eHColor.set(255, 251, 0);
    iV = 0;
  } 
  else if(eRatio <= 0.25) {
    eHColor.set(255, 0, 0);
    iV = 1;
  }
  noStroke();
  fill(eHColor.x, eHColor.y, eHColor.z);
  rect(width-20, (40 + (260 * (1 - eRatio))), width-80, 300);
  fill(eHColor.x, eHColor.y, eHColor.z, 50);
  rect(width-20, 40, width-80, 300);
  if(eIsAlive == false) {
    fill(54, 54, 54);
    rect(width - 20, 40, width - 80, 300);
    iV = 2;
  }
  if(eRatio <= 0.5) image(i[iV], width-20, 40, width-80, 300);
  stroke("black");
  strokeWeight(2);
  noFill();
  rect(width - 20, 40, width - 80, 300);
  pop();
  //Healthbar Text
  textSize(25);
  fill("white");
  stroke("black");
  text("You", 50, 35);
  text("Boss", width - 50, 35);
}

//function that controls the player
function player(){
  //Player Movement
  if(pHealth == 0) isAlive = false;
  if((keyIsDown(LEFT_ARROW) || keyIsDown(65)) && playerPos.x > 0 + (pSize / 2)) playerPos.x -= pSpeed, pState = 0;
  if((keyIsDown(RIGHT_ARROW) || keyIsDown(68)) && playerPos.x < width - (pSize / 2)) playerPos.x += pSpeed, pState = 2;
  if((keyIsDown(UP_ARROW) || keyIsDown(87)) && playerPos.y > 0 + (pSize / 2)) playerPos.y -= pSpeed;
  if((keyIsDown(DOWN_ARROW) || keyIsDown(83)) && playerPos.y < height - (pSize / 2)) playerPos.y += pSpeed;
  if(!keyIsDown(LEFT_ARROW) && !keyIsDown(RIGHT_ARROW) && !keyIsDown(65) && !keyIsDown(68)) pState = 1;
  switch (pState){
    case 0:
      image(pI[0], playerPos.x, playerPos.y, pSize - 30, pSize);
      break;
    case 1:
      image(pI[1], playerPos.x, playerPos.y, pSize - 30, pSize);
      break;
    case 2:
      image(pI[2], playerPos.x, playerPos.y, pSize - 30, pSize);
      break;
  }

  //Player Bullets
  pBTimer++;
  if(keyIsDown(SHIFT) && pBTimer > pBCooldown * 0.25) {
    for(let i = 0; i < 1; i++){
      pbullets.push(new PBullet());
    }
    
    pBTimer = 0;
  }
  for(let i = 0; i < pbullets.length; i++){
    pbullets[i].display();
    pbullets[i].update();

    if(pbullets[i].pos.dist(enemyPos) < (pBHeight / 2) + (eSize / 2)) {
      if(eIsAlive == true) {
        eHealth = eHealth - 1 * devM;
        pbullets.splice(i, 1);
      }
      if(eHealth == 0) eIsAlive = false;
    }

    else if(pbullets[i].pos.y < -100){
      pbullets.splice(i, 1);
    }
  }
  
  //player hit cooldown
  cooldown();
}

//function for shield
function cooldown(){
  if(pCooldown == true){
    image(i[4], playerPos.x, playerPos.y, pSize * 2, pSize * 2);
    pTimer ++ 
    if(pTimer > 3*60) pCooldown = false, pTimer = 0;
  }
}

//function for enemy movement
function enemy(){
  if(eRatio <= 0.5) eAnger = true, eAMultiplier = 1.5;
  if(enemyPos.x > width - 200) enemyDirection = false;
  else if(enemyPos.x < 200) enemyDirection = true;
  if(enemyDirection == true) enemyPos.x += eSpeed * eAMultiplier * (dV/2);
  else if(enemyDirection == false)  enemyPos.x += -eSpeed * eAMultiplier * (dV/2);
  if(eAnger == false) fill("orange");
  if(eAnger == true) fill("red");
  enemyimage(enemyPos.x, enemyPos.y, 0);
}

//function for animating the enemy
function enemyimage(ePX, ePY, aY){
  if(necoBoss == false){
    eIT++;
    if(eIT >= 0.5 * 60){
      eF++;
      if(eRatio > 0.5){
        if(eF == 2) eF = 0;
      }
      if(eRatio <= 0.5){
        if(eF == 4) eF = 2;
      }
      eIT = 0;
    }
    image(eI[eF], ePX, ePY + aY, eSize, eSize);
  }
  if(necoBoss == true){
    eIT++;
    if (eIT >= 0.1 * 60){
      eF++;
      if(eF >= nI.length) eF = 0;
      eIT = 0;
    }
    image(nI[eF], ePX, ePY + aY, eSize, eSize);
  }
}

//functions to create and shoot bullets
function shootBullet(){
  bTimer++
  if(bTimer > (bCooldown / eAMultiplier) * 60){
    //chooses a random bullet type and then determines all of its specifics
    eBState = int(random(0, 5));
    bulletCalc();
    for(let i = 0; i < bulletCount; i++){
      switch(eBState){
        case 0://normal bullet
          bulletAngle(90, 90, 20);
          bullets.push(new Bullet(velX[i], velY[i], 0.05, 0, 0, 2, 180, 0, i, -1));
          break;
        case 1://left bullet
          bulletAngle(90, 90, 10);
          bullets.push(new Bullet(velX[i], velY[i], 0.03, 4, 0, 1.5, 180, 30, i, -1));
          break;
        case 2://right bullet
          bulletAngle(-90, 90, 10);
          bullets.push(new Bullet(velX[i], velY[i], 0.03, 1, 0, 1.5, 180, 30, i, 1));
          break;
        case 3://fast bullet
          bulletAngle(33, 33, 10);
          bullets.push(new Bullet(velX[i], velY[i], 0.1, 2, 0, 1.5, 125, 55, i, -1));
          break;
        case 4://slow bullet
          bulletAngle(45, 45, 10);
          bullets.push(new Bullet(velX[i], velY[i], 0.03, 3, 0.2, 1, 125, 55, i, -1));
          break;
      }
    }
    bTimer = 0;
  }
  
  //hit detection/bullet despawn
  for(let i = 0; i < bullets.length; i++) {
    bullets[i].display();
    bullets[i].update();
    if(bullets[i].pos.dist(playerPos) < (bSize / 3) + (pSize / 3)) {
      if(isAlive == true) {
        if(pCooldown == false && devState == false) pHealth += -1, pCooldown = true, background("red");
        bullets.splice(i, 1);
      }
    }
    else if(bullets[i].pos.y > height + 200 || bullets[i].pos.x > width + 200 || bullets[i].pos.x < -200){
      bullets.splice(i, 1);
    }
  }
}

//function to determine bullet angle
function bulletAngle(bSAX, bSAY, bAngle){
  for(let i = 0; i < bulletCount; i += 1){
    velX[i] = 100 * sin(-bSAX + (i * bAngle));
    velY[i] = 100 * cos(-bSAY + (i * bAngle));
  }
}

//function for getting bullet count
function bulletCalc(){
  if(eBState == 0) bulletCount = 10;
  else if(eBState == 1) bulletCount = 15;
  else if(eBState == 2) bulletCount = 15;
  else if(eBState == 3) bulletCount = 7;
  else if(eBState == 4) bulletCount = 10;
}

//creates buttons
function buttonCreate(bSV, bT, bX, bY, bW, bH, bC, bC2) {
  bState[bSV] = false;
  fill(bC);
  if(mouseX > (bX - (bW/2)) && mouseX < (bX + (bW/2)) && mouseY > (bY - (bH/2)) && mouseY < (bY + (bH/2))){
    fill(bC2);
    bState[bSV] = true;
  }
  rect(bX, bY, bW, bH, 20);
  fill(255);
  textSize(40);
  text(bT, bX, bY + 10);
}

//creates enemy bullets
class Bullet{
  constructor(velX, velY, bMultiplier, bV, magnifier, bSI, bSA, bEA, i, rl){
    this.pos = createVector(enemyPos.x, enemyPos.y);
    this.velocity = createVector(velX * bMultiplier, velY * bMultiplier);
    this.image = bV;
    this.magnifier = magnifier;
    this.size = bSize * bSI;
    this.bC = bulletCount;
    this.angle = createVector(bSA, bEA, i);
    this.rl = rl
  }
  display(){
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle.x + (this.angle.z * ((this.angle.x - this.angle.y) / this.bC)) * this.rl);
    image(bI[this.image], 0, 0, this.size, this.size);
    pop()
  }
  update(){
    this.pos.add(this.velocity);
    this.size += this.magnifier; 

  }
}

//creates player bullets
class PBullet{
  constructor(){
    this.pos = createVector(playerPos.x, playerPos.y);
    this.velocity = createVector(0, -10 * pBMultiplier);
  }
  display(){
    fill("white");
    ellipse(this.pos.x, this.pos.y, pBWidth, pBHeight);
  }
  update(){
    this.pos.add(this.velocity);
  }
}

class Powerup{
  constructor(){
    this.pos = createVector(random(200, 1000), -100);
    this.velocity = createVector(0, 5);
    this.image = pUState;
  }
  display(){
    image(pUI[this.image], this.pos.x, this.pos.y, 75, 75); 
  }
  update(){
    this.pos.add(this.velocity);
  }
}