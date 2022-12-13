//sprites
let floor, lwall, rwall, ceiling, c, ball, box, square, punchhitboxL, punchhitboxR, goombud, sHBL, sHBR, kHBL, kHBR;
//neco sprites
let nHurtBox, physicsball;
//goombud var;
let [goombuddamage, gCT, gCooldown,] = [0, 0, false];
//neco neutral/walk/run
let [nDir, nWTimer, nWV, nWalk, nWalkL, nNTimer, nNV, nNeutralR, nNeutralL, nRT, nRV, nRunR, nRunL, nVar] = [true, 0, 0, [], [], 0, 0, [], [], 0, 0, [], [], 0];
//neco jump
let [nIsJumping, nIsGrounded, nDoubleJump, nJTimer, nJV, nJumpR, nJumpL, jTimer] = [false, true, true, 0, 0, [], [], 0];
//neco crawl
let [nCT, nCV, nCrawlR, nCrawlL] = [0, 0, [], []];
//neco punch attack
let [isPunching, nPDir, nPV, nPTimer, nPunchL, nPunchR, ePV, ePTimer, explosion] = [false, false, 0, 0, [], [], 0, 0, []];
//neco swipe attack
let [isSwiping, nSV, nST, nSL, nSR] = [false, 0, 0, [], []];
//neco kick attack
let [isKicking, nKV, nKT, nKL, nKR, eKV, eKTimer, kExplosion] = [false, 0, 0, [], [], 0, 0, []];
//neco intro
let [nITimer, nIV, nIntro] = [0, 0, []];
//assets
let [goombudI, bgImage, bSV, bSV2, bV, fonts, keys, wBV, songs, necoNoises, hasPlayed, x] = [0, [], 0, 960, 1, [], [], 9, [], [], [], 0];
//gamestate variables
let [gameState, isLoaded, bState] = [0, false, [false]];
//effects variables
let [snow, flames, fT, waterSpeed, bubbles, raindrop] = [[], [], 0, 0, [], []];
//cloud variables
let [cloudX, cloudY, cloudMultiplier, cloudsize, cloudtranslate] = [0, 0, 1, [], []];
//weather variables
let weather, state = 0, coldImg, hotImg, deafaultImg, wV = 0;


function preload(){
  for(let i = 0; i < 8; i++) nWalk[i] = loadImage("Assets/NecoArc/Walk/walkR/walk (" + (i+1) +").gif");
  for(let i = 0; i < 8; i++) nWalkL[i] = loadImage("Assets/NecoArc/Walk/walkL/walkL (" + (i+1) +").gif");
  for(let i = 0; i < 5; i++) nNeutralR[i] = loadImage("Assets/NecoArc/Neutral/NeutralR (" + (i+1) +").gif");
  for(let i = 0; i < 5; i++) nNeutralL[i] = loadImage("Assets/NecoArc/Neutral/NeutralL (" + (i+1) +").gif");
  for(let i = 0; i < 8; i++) nJumpR[i] = loadImage("Assets/NecoArc/Jump/JumpRight/nJumpR (" + (i+1) +").gif");
  for(let i = 0; i < 8; i++) nJumpL[i] = loadImage("Assets/NecoArc/Jump/JumpLeft/nJumpL (" + (i+1) +").gif");
  for(let i = 0; i < 3; i++) nRunR[i] = loadImage("Assets/NecoArc/Run/RunRight/RunR (" + (i+1) +").gif");
  for(let i = 0; i < 3; i++) nRunL[i] = loadImage("Assets/NecoArc/Run/RunLeft/RunLeft (" + (i+1) +").gif");
  for(let i = 0; i < 7; i++) nPunchR[i] = loadImage("Assets/NecoArc/Attacks/Punch/PunchR (" + (i+1) +").gif");
  for(let i = 0; i < 7; i++) nPunchL[i] = loadImage("Assets/NecoArc/Attacks/Punch/NecoPunchLeft (" + (i+1) +").gif");
  for(let i = 0; i < 17; i++) explosion[i] = loadImage("Assets/Explosion/DExplosion (" + (i+1) +").gif");
  for(let i = 0; i < 5; i++) nCrawlR[i] = loadImage("Assets/NecoArc/Crawl/CrawlR (" + (i+1) +").gif");
  for(let i = 0; i < 5; i++) nCrawlL[i] = loadImage("Assets/NecoArc/Crawl/CrawlL (" + (i+1) +").gif");
  for(let i = 0; i < 9; i++) nIntro[i] = loadImage("Assets/NecoArc/Intro/Intro (" + (i+1) +").gif");
  for(let i = 0; i < 6; i++) nSR[i] = loadImage("Assets/NecoArc/Attacks/Swipe/NecoSwipeR (" + (i+1) +").gif");
  for(let i = 0; i < 6; i++) nSL[i] = loadImage("Assets/NecoArc/Attacks/Swipe/NecoSwipeL (" + (i+1) +").gif");
  for(let i = 0; i < 7; i++) nKR[i] = loadImage("Assets/NecoArc/Attacks/Kick/NecoKickR (" + (i+1) +").gif");
  for(let i = 0; i < 7; i++) nKL[i] = loadImage("Assets/NecoArc/Attacks/Kick/NecoKickL (" + (i+1) +").gif");
  for(let i = 0; i < 9; i++) kExplosion[i] = loadImage("Assets/Explosion/MExplosion (" + (i+1) +").gif");
  goombudI = loadImage("Assets/GoombudRight.png");
  bgImage[0] = loadImage("Assets/Backgrounds/SMW.png");
  bgImage[1] = loadImage("Assets/Backgrounds/smwforest.png");
  bgImage[2] = loadImage("Assets/Backgrounds/Volcano.png");
  bgImage[3] = loadImage("Assets/Backgrounds/Moon.jpg");
  bgImage[4] = loadImage("Assets/Backgrounds/underwater.jpg");
  bgImage[5] = loadImage("Assets/Backgrounds/cold.png");
  bgImage[6] = loadImage("Assets/Backgrounds/hot.png");
  bgImage[7] = loadImage("Assets/Backgrounds/sunny.png");
  bgImage[8] = loadImage("Assets/Backgrounds/rain.png");
  bgImage[9] = loadImage("Assets/Backgrounds/Question.jpg");
  fonts[0] = loadFont("Assets/Fonts/NewRodin.otf");
  fonts[1] = loadFont("Assets/Fonts/NewRodinB.otf");
  keys[0] = loadImage("Assets/Keys/computer_key_W_T.png");
  keys[1] = loadImage("Assets/Keys/computer_key_A_T.png");
  keys[2] = loadImage("Assets/Keys/computer_key_S_T.png");
  keys[3] = loadImage("Assets/Keys/computer_key_D_T.png");
  keys[4] = loadImage("Assets/Keys/computer_key_Shift_T.png");
  keys[5] = loadImage("Assets/Keys/computer_key_P_T.png");
  keys[6] = loadImage("Assets/Keys/computer_key_O_T.png");
  keys[7] = loadImage("Assets/Keys/computer_key_I_T.png");
  keys[8] = loadImage("Assets/Keys/computer_key_R_T.png");
  keys[9] = loadImage("Assets/Keys/computer_key_Esc_T.png");
  songs[0] = loadSound("Assets/Music/Mountain.mp3");
  songs[1] = loadSound("Assets/Music/MainLevel.mp3");
  songs[2] = loadSound("Assets/Music/Volcano.mp3");
  songs[3] = loadSound("Assets/Music/Moon.mp3");
  songs[4] = loadSound("Assets/Music/Water.mp3");
  songs[5] = loadSound("Assets/Music/Snow.mp3");
  songs[6] = loadSound("Assets/Music/Sun.mp3");
  songs[7] = loadSound("Assets/Music/Sun.mp3");
  songs[8] = loadSound("Assets/Music/Rain.mp3");
  songs[9] = loadSound("Assets/Music/Sun.mp3");
  necoNoises[0] = loadSound("Assets/SoundEffects/dENoise.mp3");
  necoNoises[1] = loadSound("Assets/SoundEffects/Jump.wav");
  necoNoises[2] = loadSound("Assets/SoundEffects/Punch.wav");
  necoNoises[3] = loadSound("Assets/SoundEffects/Swipe.wav");
  necoNoises[4] = loadSound("Assets/SoundEffects/Kick.wav");
}

function setup() {
  createCanvas(800, 800);
  snow = Array.from({ length: 200 }, () => new SnowFunction());
  raindrop = Array.from({ length: 200 }, () => new rainDropfunction());
  textAlign(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);
  angleMode(DEGREES);
  world.gravity.y = 30;
  //square = new Sprite(300, 30, 40, 40, 'kinetic');
  for(let i = 0; i < 40; i++) bubbles.push(new Bubble());
  for (let i = 0; i < 6; i++) {
    cloudtranslate[i] = random(-400, 1100);
  }
  for (let i = 0; i < 3; i++ ) {
    cloudsize[i + 3] = random(100, 150);
    cloudsize[i] = random(200, 250);
  }
  let myTotalString = "https://api.openweathermap.org/data/2.5/weather?lat=40.514&lon=-88.991&appid=23855a3dd622ce6eb6c2222ffd51c832&units=imperial";
  loadJSON(myTotalString, gotData); 
}

function gotData(data) {
  weather = data;
}

function draw() {
  switch (state) {
      
    case 0:
      if (weather) {
        state = 1;
      }
      break;

    case 1:
      if (weather.weather[0].id >= 200 &&  weather.weather[0].id < 600) {
        wV = 8;
        // set to Thunderstorm effect
      }

      if (weather.weather[0].id >= 600 &&  weather.weather[0].id < 700) {
        // set to Snow effect
        wV = 5;
      }

      if (weather.weather[0].id >= 700 &&  weather.weather[0].id < 900) {
        if (weather.weather[0].id == 800) {
          // set to clear effect
          wV = 6;
        }else {
          // set to Cloudy effect  
          wV = 7;
        }
      }
      break;
  }
  switch(gameState){
    case 0://Start screen
      if(isLoaded == true) spritePostion(), spriteInvisible();
      mainMenu();
      break;
    case 1://start anim
      if(isLoaded == true) spritePostion(), spriteMove();
      inGame();
      playerIntro();
      spriteVisible();
      break;
    case 2://in game
      inGame();
      playermove();
      spritePostion();
      levelModifiers();
      inGameText();
      damageCalc();
      spriteInvisible();
      spriteVisible();
      music();
      break;
    case 3://pause screen
      spritePostion();
      damageCalc();
      spriteInvisible();
      inGameBackground();
      spriteVisible();
      inGameText();
      controlScreen();
      if (songs[bV].isPlaying()) songs[bV].pause();
      break;
  }
}

function mouseReleased(){
  switch(gameState){
    case 0://Start screen
      if(isLoaded == false){
        floorcreate();
        spriteCreate();
        spriteInvisible();
        isLoaded = true;
      }
      break;
    case 1://start anim
      break;
    case 2://in game
      //gameReset();
      //gameState = 0;
      break;
    case 3://pause screen
      break;
  }

  //main menu buttons
  if(bState[0] == true && gameState == 0) gameState++;

  //background change buttons
  if(bState[0] == true && gameState == 3) bV = 0, floorColorChange("#948c62");
  if(bState[1] == true && gameState == 3) bV = 1, floorColorChange("green");
  if(bState[2] == true && gameState == 3) bV = 2, floorColorChange("#870000");
  if(bState[3] == true && gameState == 3) bV = 3, floorColorChange("#d4d4d4");
  if(bState[4] == true && gameState == 3) bV = 4, floorColorChange("#3032b3");
  if(bState[5] == true && gameState == 3) bV = wBV, floorColorChange("#707070");
  if(bState[6] == true && gameState == 3) {
    wBV += -1;
    if(wBV < 5) wBV = 9;
  }
  if(bState[7] == true && gameState == 3) {
    wBV += 1;
    if(wBV > 9) wBV = 5;
  }
}

//function for main menu
function mainMenu(){
  image(bgImage[0], bSV, height/2, width * 1.2, height);
  image(bgImage[0], bSV2, height/2, width * 1.2, height);
  bSV += -1;
  bSV2 += -1;
  if(bSV < -(((width * 1.2) / 2) + 75)) bSV = (width * 1.2) + width/2;
  if(bSV2 < -(((width * 1.2) / 2) + 75)) bSV2 = (width * 1.2) + width/2;
  push();
  textFont(fonts[1]);
  textSize(50);
  strokeWeight(5);
  stroke("black");
  text("Beat the Goombud\nSimulator", width/2, 100);
  textSize(25);
  text("By Brennen, Hamza, and Gabe", width/2, 750);
  pop();
  textFont(fonts[0]);
  buttonCreate(0, "Start Game", 40, 10, width/2, height/2 - 100, 300, 100, "#7f11ed", "#550b9e");
  //buttonCreate(1, "Credits", 40, 10, width/2, height/2 + 50, 300, 100, "#7f11ed", "#550b9e");
  push();
  translate(width/2, 550);
  rotate(x);
  image(goombudI, 0, 0, 200, 200);
  x++;
  pop();
  for(let i = 0; i < songs.length; i++) if(songs[i].isPlaying())songs[i].stop();
}

//function for in game
function inGame(){
  levelModifiers();
  inGameBackground();
  inGameText();
  if(kb.presses("Q")) gameState = 3;
  if(kb.presses("Escape")) gameState = 0, gameReset();
  if(kb.presses("r")){
    goombuddamage = 0;
    spriteMove();
  }
}

//function that controls the level
function inGameBackground(){
  image(bgImage[bV], width/2, height/2, width, height);
}

//function for text displayed in game
function inGameText(){
  push();
  textAlign(LEFT);
  strokeWeight(2);
  fill(255, 255 - 2 * goombuddamage, 255 - 2 * goombuddamage);
  stroke("black");
  textSize(20);
  text("Goombud Damage: " + goombuddamage + "%", 15, 40);
  fill("white");
  textAlign(RIGHT);
  text("Press Q to Pause", width - 15, 40); 
  pop();
}

function levelModifiers(){
  world.gravity.y = 30;
  waterSpeed = 1;
  switch(bV){
    case 0:
      break;
    case 2://volcano
      fT++;
      if(fT > 0.05 * 60){
        for(let i = 0; i < 1; i ++) {
          flames.push(new FireParticles());
        }
        fT = 0;
      }
      for(let i = 0; i < flames.length; i++){
        flames[i].display();
        flames[i].update();
        if(flames[i].opacity <= 0) flames.splice(i, 1);
      }

      break;
    case 3://moon
      world.gravity.y = 5;
      break;
    case 4://underwater
      world.gravity.y = 5;
      waterSpeed = 0.5;
      physicsball.vel.x = physicsball.vel.x * 0.5;
      for(let i = 0; i < bubbles.length; i++){
        bubbles[i].display();
        bubbles[i].update();
        print(bubbles[i].pos.y);
      }
      push();
      fill(0, 0, 255, 50);
      rect(width/2, height/2, width, height);
      pop();
      break;
    case 5: //snow
      snow.forEach(function (SnowFunction){
        SnowFunction.display();
        SnowFunction.move();
      });
      break;
    case 7://cloudy
      push();
      for (let i = 0; i < 6; i++) {
        cloudtranslate[i] += -1.5;
        if (cloudtranslate[i] < -800) cloudtranslate[i] = 700;
      }
      fill("white");
      cloud(cloudX + 50 + cloudtranslate[0], cloudY + 50, cloudMultiplier * 1.25);
      cloud(cloudX + 200 + cloudtranslate[1], cloudY + 50, cloudMultiplier * 0.75);
      cloud(cloudX + 350 + cloudtranslate[2], cloudY + 50, cloudMultiplier);
      cloud(cloudX + 500 + cloudtranslate[3], cloudY + 50, cloudMultiplier * 1.25);
      cloud(cloudX + 650 + cloudtranslate[4], cloudY + 50, cloudMultiplier * 0.75);
      cloud(cloudX + 800 + cloudtranslate[5], cloudY + 50, cloudMultiplier);
      pop();
      break;
    case 8: //storm
      raindrop.forEach(function (rainDropfunction){
        rainDropfunction.display();
        rainDropfunction.move();
      });
      push();
      for (let i = 0; i < 6; i++) {
        cloudtranslate[i] += -4;
        if (cloudtranslate[i] < -1000) cloudtranslate[i] = 1000;
      }
      fill("#494e57");
      cloud(cloudX + 50 + cloudtranslate[0], cloudY + 0, cloudMultiplier * 1.75);
      cloud(cloudX + 200 + cloudtranslate[1], cloudY + 0, cloudMultiplier * 1.5);
      cloud(cloudX + 350 + cloudtranslate[2], cloudY + 0, cloudMultiplier * 1.75);
      cloud(cloudX + 500 + cloudtranslate[3], cloudY + 0, cloudMultiplier * 1.5);
      cloud(cloudX + 650 + cloudtranslate[4], cloudY + 0, cloudMultiplier * 1.75);
      cloud(cloudX + 800 + cloudtranslate[5], cloudY + 0, cloudMultiplier * 1.5);
      pop();
      break;
    case 9:
      bV = wV;
      break;
  }
}

//function for pause screen 
function controlScreen(){
  if(kb.presses("Q")) gameState = 2;
  fill(0, 0, 0, 100);
  rect(width/2, height/2, width, height);
  //pause sprites
  physicsball.speed = 0;
  goombud.speed = 0;
  //controls
  push();
  strokeWeight(2);
  fill("white");
  stroke("black");
  textSize(50);
  text("CONTROLS", width/2, 95);
  textSize(20);
  //left side
  text("Jump", width/2 - 100, 150);
  image(keys[0], width/2 - 300, 145, 40, 40);
  text("Move Left", width/2 - 100, 200);
  image(keys[1], width/2 - 300, 195, 40, 40);
  text("Crouch", width/2 - 100, 250);
  image(keys[2], width/2 - 300, 245, 40, 40);
  text("Move Right", width/2 - 100, 300);
  image(keys[3], width/2 - 300, 295, 40, 40);
  text("Run", width/2 - 100, 350);
  image(keys[4], width/2 - 300, 345, 100, 40);
  //right side
  text("Punch", width/2 + 300, 150);
  image(keys[5], width/2 + 100, 145, 40, 40);
  text("Swipe", width/2 + 300, 200);
  image(keys[6], width/2 + 100, 195, 40, 40);
  text("Kick", width/2 + 300, 250);
  image(keys[7], width/2 + 100, 245, 40, 40);
  text("Reset", width/2 + 300, 300);
  image(keys[8], width/2 + 100, 295, 40, 40);
  text("Return to Menu", width/2 + 300, 350);
  image(keys[9], width/2 + 100, 345, 50, 40);
  pop(); 
  //background picker
  push();
  strokeWeight(2);
  fill("white");
  stroke("black");
  textSize(50);
  text("CHANGE LEVEL", width/2, 425);
  noStroke();
  image(bgImage[0], 150, 500, 100, 100);
  buttonCreate(0, "Mountain", 15, 5, 150, 575, 150, 30, "#d4d4d4", "#b3b1b1");
  image(bgImage[1], 400, 500, 100, 100);
  buttonCreate(1, "Forest", 15, 5, 400, 575, 150, 30, "#d4d4d4", "#b3b1b1");
  image(bgImage[2], 650, 500, 100, 100);
  buttonCreate(2, "Volcano", 15, 5, 650, 575, 150, 30, "#d4d4d4", "#b3b1b1");
  image(bgImage[3], 150, 675, 100, 100);
  buttonCreate(3, "Moon", 15, 5, 150, 750, 150, 30, "#d4d4d4", "#b3b1b1");
  image(bgImage[4], 400, 675, 100, 100);
  buttonCreate(4, "Underwater", 15, 5, 400, 750, 150, 30, "#d4d4d4", "#b3b1b1");
  image(bgImage[wBV], 650, 675, 100, 100);
  switch (wBV){
    case 5:
      buttonCreate(5, "Snow", 15, 5, 650, 750, 150, 30, "#d4d4d4", "#b3b1b1");
      break;
    case 6:
      buttonCreate(5, "Clear Skies", 15, 5, 650, 750, 150, 30, "#d4d4d4", "#b3b1b1");
      break;
    case 7:
      buttonCreate(5, "Cloudy", 15, 5, 650, 750, 150, 30, "#d4d4d4", "#b3b1b1");
      break;
    case 8:
      buttonCreate(5, "Storming", 15, 5, 650, 750, 150, 30, "#d4d4d4", "#b3b1b1");
      break;
    case 9:
      buttonCreate(5, "Your Weather", 15, 5, 650, 750, 150, 30, "#d4d4d4", "#b3b1b1");
      break;
  }
  buttonCreate(6, "<", 20, 5, 570, 675, 30, 30, "#d4d4d4", "#b3b1b1");
  buttonCreate(7, ">", 20, 5, 730, 675, 30, 30, "#d4d4d4", "#b3b1b1");
  pop();
}

//resets variables
function gameReset(){
  for(let i = 0; i < bState.length; i++) bState[i] = false;
  bV = 1;
  goombuddamage = 0;
  floorColorChange("green");
}

//function for basic player movement
function playermove(){
  //check is player is grounded
  if(physicsball.collides(floor)) nIsGrounded = true, nDoubleJump = true, hasPlayed[0] = false;
  //is jumping
  if(nIsJumping == true) {
    jTimer++ 
    if(jTimer > 0.5 * 60 && nIsGrounded == true) nIsJumping = false, jTimer = 0;
  }
  //jump
  if(kb.presses('up') && nIsGrounded == true)nIsJumping = true, nIsGrounded = false, physicsball.vel.y = -10 * waterSpeed;
  //double jump
  else if(kb.presses('up') && nDoubleJump == true) physicsball.vel.y = -10 * waterSpeed, nDoubleJump = false;
  //fast fall
  if(kb.presses('down') && nIsGrounded == false) physicsball.vel.y = 20 * waterSpeed;
  
  //checking what movement state the player is in
  if(kb.pressing('left') && nIsJumping == true && !kb.pressing('shift')) nVar = 5;
  else if(kb.pressing('right') && nIsJumping == true && !kb.pressing('shift')) nVar = 6;
  else if(kb.pressing('left') && nIsJumping == true && kb.pressing('shift')) nVar = 7;
  else if(kb.pressing('right') && nIsJumping == true && kb.pressing('shift')) nVar = 8;
  else if(kb.pressing('left') && kb.pressing('down') && nIsGrounded == true) nVar = 10;
  else if(kb.pressing('right') && kb.pressing('down') && nIsGrounded == true) nVar = 11;
  else if(kb.pressing('down') && nIsGrounded == true) nVar = 12;
  else if(kb.pressing('left') && !kb.pressing('shift')) nVar = 1;
  else if(kb.pressing('right') && !kb.pressing('shift')) nVar = 2;
  else if(kb.pressing('left') && kb.pressing('shift')) nVar = 3;
  else if(kb.pressing('right') && kb.pressing('shift')) nVar = 4;
  else if(nIsJumping == true) nVar = 9;
  else nVar = 0;

  if(isSwiping == false && isPunching == false && isKicking == false && kb.pressing('left')) nPDir = false; 
  else if(isSwiping == false && isPunching == false && isKicking == false && kb.pressing('right')) nPDir = true; 
  if(kb.pressing('p')) isPunching = true;
  else if(kb.pressing('o')) isSwiping = true;
  else if(kb.pressing('i')) isKicking = true;
  if(isPunching == true) playerPunch();
  else if(isSwiping == true) swipeAttack();
  else if(isKicking == true) kickAttack();

  switch(nVar){
    case 0://Neutral
      physicsball.vel.x = 0;
      if(nIsJumping == false && isPunching == false && isSwiping == false && isKicking == false) playerNeutral();
      break;
    case 1://Walk Left
      physicsball.vel.x = -5;
      nDir = false;
      if(nIsJumping == false && isPunching == false && isSwiping == false && isKicking == false) playerWalk();
      break;
    case 2://Walk Right
      physicsball.vel.x = 5;
      nDir = true;
      if(nIsJumping == false && isPunching == false && isSwiping == false && isKicking == false) playerWalk();
      break;
    case 3://Run Left
      physicsball.vel.x = -10;
      nDir = false;
      if(nIsJumping == false && isPunching == false && isSwiping == false && isKicking == false) playerRun();
      break;
    case 4://Run Right
      physicsball.vel.x = 10;
      nDir = true;
      if(nIsJumping == false && isPunching == false && isSwiping == false && isKicking == false) playerRun();
      break;
    case 5://Jump Left
      physicsball.vel.x = -5;
      nDir = false;
      if(isPunching == false && isSwiping == false && isKicking == false) playerJump();
      break;
    case 6://Jump Right
      physicsball.vel.x = 5;
      nDir = true;
      if(isPunching == false && isSwiping == false && isKicking == false) playerJump();
      break;
    case 7://Run Jump Left
      physicsball.vel.x = -10;
      nDir = false;
      if(isPunching == false && isSwiping == false && isKicking == false) playerJump();
      break;
    case 8://Run Jump Right
      physicsball.vel.x = 10;
      nDir = true;
      if(isPunching == false && isSwiping == false && isKicking == false) playerJump();
      break;
    case 9://Jump Neutral
      physicsball.vel.x = 0;
      if(isPunching == false && isSwiping == false && isKicking == false) playerJump();
      break;
    case 10://Crawl Left
      physicsball.vel.x = -2.5;
      nDir = false;
      if(isPunching == false && isSwiping == false && isKicking == false) playerCrawl();
      break;
    case 11://Crawl Right
      physicsball.vel.x = 2.5;
      nDir = true;
      if(isPunching == false && isSwiping == false && isKicking == false) playerCrawl();
      break;
    case 12://Crawl Neutral
      physicsball.vel.x = 0;
      if(isPunching == false && isSwiping == false && isKicking == false) playerCrawl();
      break;
  }

}

//function for intro animation
function playerIntro(){
  nITimer++;
  if(nITimer > 0.1*60){
    nIV++;
    nITimer = 0;
  }  
  image(nIntro[nIV], width/2, 750, 100, 100);
  if(nIV >= 8) nIV = 0, gameState++;
}

//function for player walking animation
function playerWalk(){
  nWTimer++;
  if(nWTimer >= 0.1 * 60){
    nWV++;
    if(nWV > 7) nWV = 0;
    nWTimer = 0;
  }
  if(nPDir == false) image(nWalkL[nWV], physicsball.x, physicsball.y, 100, 100);
  else if(nPDir == true) image(nWalk[nWV], physicsball.x, physicsball.y, 100, 100);
}

//function for player running animation
function playerRun(){
  nRT++;
  if(nRT >= 0.1 * 60){
    nRV++;
    if(nRV > 2) nRV = 0;
    nRT = 0;
  }
  if(kb.pressing('left')) image(nRunL[nRV], physicsball.x, physicsball.y, 100, 100);
  else if(kb.pressing('right')) image(nRunR[nRV], physicsball.x, physicsball.y, 100, 100);
}

//function for player being in neutral animation
function playerNeutral(){
  nNTimer++;
  if(nNTimer >= 0.1 * 60){
    nNV++;
    if(nNV > 4) nNV = 0;
    nNTimer = 0;
  }
  if (nDir == false) image(nNeutralL[nNV], physicsball.x, physicsball.y - 5, 100, 100);
  else if (nDir == true) image(nNeutralR[nNV], physicsball.x, physicsball.y - 5, 100, 100);
}

//function for player jumping animation
function playerJump(){
  if(!necoNoises[1].isPlaying() && hasPlayed[0] == false) necoNoises[1].play(), hasPlayed[0] = true;
  nJTimer++ ;
  if(nJTimer >= 0.1*60){
    nJV++;
    if(nJV > 7) nJV = 0;
    nJTimer = 0;
  }
  if (nDir == false) image(nJumpL[nJV], physicsball.x, physicsball.y - 5, 110, 110);
  else if (nDir == true) image(nJumpR[nJV], physicsball.x, physicsball.y - 5, 110, 110);
}

//function for player crawling animation
function playerCrawl(){
  nCT++;
  if(nCT > 0.1*60){
    nCV++;
    if(nCV > 4) nCV = 0;
    nCT = 0;
  }
  if (nDir == false) image(nCrawlL[nCV], physicsball.x, physicsball.y - 5, 100, 100);
  else if (nDir == true) image(nCrawlR[nCV], physicsball.x, physicsball.y - 5, 100, 100);
}

//function for punch animation
function playerPunch(){
  if(!necoNoises[2].isPlaying() && hasPlayed[1] == false) necoNoises[2].play(), hasPlayed[1] = true;
  nPTimer++;
  if(nPTimer >= 0.1*60){
    nPV++;
    nPTimer = 0;
  }
  if (nPDir == false) image(nPunchL[nPV], physicsball.x, physicsball.y - 5, 100, 100);
  else if (nPDir == true) image(nPunchR[nPV], physicsball.x, physicsball.y - 5, 100, 100);
  if(nPV > 2) punchExplosion();
  if(nPV >= 6) isPunching = false, hasPlayed[1] = false, nPV = 0, ePV = 0;
}

//function for punch explosion animation
function punchExplosion(){
  ePTimer++;
  if(ePTimer > 0.0175*60){
    ePV++;
    ePTimer = 0;
  }
  if(!necoNoises[0].isPlaying()) necoNoises[0].play();
  if (nPDir == false) image(explosion[ePV], physicsball.x -60, physicsball.y - 25, 100, 100);
  else if (nPDir == true) image(explosion[ePV], physicsball.x + 60, physicsball.y - 25, 100, 100);
}

function swipeAttack(){
  if(!necoNoises[3].isPlaying() && hasPlayed[1] == false) necoNoises[3].play(), hasPlayed[1] = false;
  nST++;
  if(nST > 0.1 * 60){
    nSV++;
    nST = 0;
  }
  if (nPDir == false) image(nSL[nSV], physicsball.x, physicsball.y - 5, 200, 100);
  else if (nPDir == true) image(nSR[nSV], physicsball.x, physicsball.y - 5, 200, 100);
  if(nSV >= 5) isSwiping = false, hasPlayed[1] = false, nSV = 0; 
}

function kickAttack(){
  if(!necoNoises[4].isPlaying() && hasPlayed[1] == false) necoNoises[4].play(), hasPlayed[1] == true;
  nKT++;
  if(nKT > 0.1 * 60){
    nKV++;
    nKT = 0;
  }
  if (nPDir == false) image(nKL[nKV], physicsball.x, physicsball.y - 5, 100, 100);
  else if (nPDir == true) image(nKR[nKV], physicsball.x, physicsball.y - 5, 100, 100);
  if(nKV > 2) kickExplosion();
  if(nKV >= 5) isKicking = false, nKV = 0, eKV = 0, hasPlayed[1] = false; 
}

function kickExplosion(){
  eKTimer++;
  if(eKTimer > 0.035*60){
    eKV++;
    eKTimer = 0;
  }
  if(!necoNoises[0].isPlaying()) necoNoises[0].play();
  if (nPDir == false) image(kExplosion[eKV], physicsball.x -70, physicsball.y + 15, 200, 200);
  else if (nPDir == true) image(kExplosion[eKV], physicsball.x + 70, physicsball.y + 15, 200, 200);
}

//function to create walls
function floorcreate(){
  floor = new Sprite(width/2, height - 5, width * 1.5, 10, 'static');
  //lwall = new Sprite(5, height/2, 10, height * 1.5, 'static');
  //rwall = new Sprite(width - 5, height/2, 10, height * 1.5, 'static');
  ceiling = new Sprite(width/2, 5, width * 1.5, 10, 'static');
  c = color("green");
  floor.color = c;
  //lwall.color = c;
  //rwall.color = c;
  ceiling.color = c;
}

function floorColorChange(color){
  c = (color)
  floor.color = c;
  //lwall.color = c;
  //rwall.color = c;
  ceiling.color = c;
}

//funciton to create sprites
function spriteCreate(){
  c = color(0, 0, 0, 0);
  goombud = new Sprite(width/2 - 100, 750, 60, 'dynamic');
  goombud.color = c;
  physicsball = new Sprite(width/2, 750, 80, 'dynamic');
  physicsball.color = c;
  c = color(0, 255, 0, 100);
  punchhitboxL = new Sprite(physicsball.x - 60, physicsball.y - 25, 60, 'none');
  punchhitboxL.color = c;
  punchhitboxR = new Sprite(physicsball.x + 60, physicsball.y - 25, 60, 'none');
  punchhitboxR.color = c;
  nSwipeL = new Sprite(physicsball.x - 50, physicsball.y - 10, 75, 'none');
  nSwipeL.color = c;
  nSwipeR = new Sprite(physicsball.x + 50, physicsball.y - 10, 75, 'none');
  nSwipeR.color = c;
  nKickL = new Sprite(physicsball.x - 70, physicsball.y + 45, 75, 'none');
  nKickL.color = c;
  nKickR = new Sprite(physicsball.x + 70, physicsball.y + 45, 75, 'none');
  nKickR.color = c;
  nHurtBox = new Sprite(physicsball.x, physicsball.y, 40, 90, 'none');
  c = color(255, 0, 0, 100);
  nHurtBox.color = c;
}

//function that makes all sprites invisible
function spriteInvisible(){
  goombud.visible = false;
  physicsball.visible = false;
  nHurtBox.visible = false;
  punchhitboxL.visible = false;
  punchhitboxR.visible = false;
  nSwipeL.visible = false;
  nSwipeR.visible = false;
  nKickL.visible = false;
  nKickR.visible = false;
  floor.visible = false;
  ceiling.visible = false;
}

//function that makes certain sprites visible
function spriteVisible(){
  floor.visible = true;
  ceiling.visible = true;
}

//fuction to keep sprites overlapped
function spritePostion(){
  push();
  translate(goombud.x, goombud.y);
  rotate(goombud.rotation);
  image(goombudI, 0, 0, 60, 60);
  pop();
  if(goombud.x > width + 50) goombud.x = -50;
  if(goombud.x <  -50) goombud.x = width + 50;
  if(physicsball.x > width + 50) physicsball.x = -50;
  if(physicsball.x <  -50) physicsball.x = width + 50;
  nHurtBox.x = physicsball.x;
  nHurtBox.y = physicsball.y;
  punchhitboxL.x = physicsball.x - 60;
  punchhitboxL.y = physicsball.y - 25;
  punchhitboxR.x = physicsball.x + 60;
  punchhitboxR.y = physicsball.y - 25;
  nSwipeL.x = physicsball.x - 50;
  nSwipeL.y = physicsball.y - 10;
  nSwipeR.x = physicsball.x + 50;
  nSwipeR.y = physicsball.y - 10;
  nKickL.x = physicsball.x - 70;
  nKickL.y = physicsball.y + 45;
  nKickR.x = physicsball.x + 70;
  nKickR.y = physicsball.y + 45;
}

//function that moves the sprites back to default position
function spriteMove(){
  physicsball.x = width/2;
  physicsball.y = 749;
  goombud.x = 150;
  goombud.y = 775;
  goombud.vel.x = 0;
  goombud.vel.y = 0;
  goombud.speed = 0;
}

//function for damage
function damageCalc(){
  //punching
  if(isPunching == true && nPDir == false && nPV > 2) {
    if(dist(punchhitboxL.x, punchhitboxL.y, goombud.x, goombud.y) < ((goombud.d/2) + (punchhitboxL.d/2)) && gCooldown == false){
      goombud.vel.x = (-6 + (-1 * (goombuddamage * 0.1))) * waterSpeed;
      goombud.vel.y = (-9 + (-1.5 * (goombuddamage * 0.1))) * waterSpeed;
      goombuddamage += 7.5;
      gCooldown = true;
    }

  }
  else if(isPunching == true && nPDir == true && nPV > 2) {
    if(dist(punchhitboxR.x, punchhitboxR.y, goombud.x, goombud.y) < ((goombud.d/2) + (punchhitboxR.d/2)) && gCooldown == false) {
      goombud.vel.x = (6 + (1 * (goombuddamage * 0.1))) * waterSpeed;
      goombud.vel.y = (-9 + (-1.5 * (goombuddamage * 0.1))) * waterSpeed;
      goombuddamage += 7.5;
      gCooldown = true;
    }
  }
  if(isSwiping == true && nPDir == false && nSV > 1) {
    if(dist(nSwipeL.x, nSwipeL.y, goombud.x, goombud.y) < ((goombud.d/2) + (nSwipeL.d/2)) && gCooldown == false){
      goombud.vel.x = (-10 + (-1.5 * (goombuddamage * 0.1))) * waterSpeed;
      goombud.vel.y = (-3 + (-0.5 * (goombuddamage * 0.1))) * waterSpeed;
      goombuddamage += 10;
      gCooldown = true;
    }

  }
  else if(isSwiping == true && nPDir == true && nSV > 1) {
    if(dist(nSwipeR.x, nSwipeR.y, goombud.x, goombud.y) < ((goombud.d/2) + (nSwipeR.d/2)) && gCooldown == false) {
      goombud.vel.x = (10 + (1.5 * (goombuddamage * 0.1))) * waterSpeed;
      goombud.vel.y = (-3 + (-0.5 * (goombuddamage * 0.1))) * waterSpeed;
      goombuddamage += 10;
      gCooldown = true;
    }
  }
  if(isKicking == true && nPDir == false && nKV > 2) {
    if(dist(nKickL.x, nKickL.y, goombud.x, goombud.y) < ((goombud.d/2) + (nKickL.d/2)) && gCooldown == false){
      goombud.vel.x = (-7.5 + (-1.25 * (goombuddamage * 0.1))) * waterSpeed;
      goombud.vel.y = (2.5 + (-0.5 * (goombuddamage * 0.1))) * waterSpeed;
      goombuddamage += 15;
      gCooldown = true;
    }

  }
  else if(isKicking == true && nPDir == true && nKV > 2) {
    if(dist(nKickR.x, nKickR.y, goombud.x, goombud.y) < ((goombud.d/2) + (nKickR.d/2)) && gCooldown == false) {
      goombud.vel.x = (7.5 + (1.25 * (goombuddamage * 0.1))) * waterSpeed;
      goombud.vel.y = (-2.5 + (-0.5 * (goombuddamage * 0.1))) * waterSpeed;
      goombuddamage += 15;
      gCooldown = true;
    }
  }

  if(gCooldown == true){
    gCT++
    if(gCT > 0.5 * 60){
      gCooldown = false;
      gCT = 0;
    }
  }
}

//function that makes buttons
function buttonCreate(bSV, bT, bTS, bTY, bX, bY, bW, bH, bC, bC2) {
  bState[bSV] = false;
  fill(bC);
  if(mouseX > (bX - (bW/2)) && mouseX < (bX + (bW/2)) && mouseY > (bY - (bH/2)) && mouseY < (bY + (bH/2))){
    fill(bC2);
    bState[bSV] = true;
  }
  rect(bX, bY, bW, bH, 20);
  fill(255);
  textSize(bTS);
  text(bT, bX, bY + bTY);
}

function music(){
  //if(!songs[bV].isPlaying() && bV == 9) songs[wBV].play();
  //print(bV);
  if(!songs[bV].isPlaying()) songs[bV].play();
}


//class for creating snow
class SnowFunction{
  constructor(){
    this.pos = createVector(random(0, width), random(0, -height));
  }
  
  display = function() {
    noStroke();
    fill("#fffafa ");
    ellipse(this.pos.x, this.pos.y, random(5, 10), random(5, 10));   
  }
  move = function() {
    this.speed = random(0.1, 1);
    this.gravity = 1.05;
    this.pos.x = this.pos.x - (this.speed*this.gravity) / 0.5;
    this.pos.y = this.pos.y + (this.speed*this.gravity) / 0.25;  
    
    if (this.pos.y > height) {
      this.pos.y = random(0, -height);
      this.gravity = 0;
    }
    if (this.pos.x < 0) {
      this.pos.x = random(0, width) + width/2;
      this.gravity = 0;
    }
  }
}

//class for creating volcano fire
class FireParticles{
  constructor(){
    this.pos = createVector(random(0, width), height);
    this.opacity = 100
    this.vel = createVector(random(-1, 1), random(-2, -1))
    this.shrink = 10;
  }
  display(){
    noStroke();
    fill(random(200,230), random(50, 150), 10, this.opacity);
    ellipse(this.pos.x, this.pos.y, this.shrink);
  }
  update(){
    this.opacity += -0.2;
    this.pos.add(this.vel);
    this.shrink += random(0, 0);
  }
}

class Bubble{
  constructor(){
    this.pos = createVector(random(0, width), random(0, height));
    this.vel = createVector(0, random(-0.75, -0.25));
    this.size = random(20, 60);
  }
  display(){
    noStroke();
    fill(255, 255, 255, 50);
    ellipse(this.pos.x, this.pos.y, this.size);
    fill(255, 255, 255, 180);
    ellipse(this.pos.x + (this.size * 0.2), this.pos.y - (this.size * 0.2), this.size * 0.2);
  }
  update(){
    this.pos.add(this.vel);
    if(this.pos.y < -50) this.pos.y = width + 50;
  }
}

class rainDropfunction{
  constructor(){
    this.pos = createVector(random(0, width), random(0, -height));
  }
  
  display = function() {
    noStroke();
    fill("#C4D3DF");
    push();
    translate(this.pos.x, this.pos.y);
    rotate(45);
    ellipse(0, 0, random(5, 7), random(10, 11));   
    pop();
  }
  move = function() {
    this.speed = random(5, 10);
    this.gravity = 1.05;
    this.pos.x = this.pos.x - (this.speed*this.gravity);
    this.pos.y = this.pos.y + (this.speed*this.gravity);  
    
    if (this.pos.y > height) {
      this.pos.y = random(0, -height);
      this.gravity = 0;
    }
    if (this.pos.x < 0) {
      this.pos.x = random(0, width) + width/2;
      this.gravity = 0;
    }
  }
}

function cloud(cloudX, cloudY, cloudMultiplier){
  noStroke();
  ellipse(cloudX, cloudY, cloudsize[0] * cloudMultiplier, cloudsize[3] * cloudMultiplier);
  ellipse(cloudX-(70  * cloudMultiplier) , cloudY+(70 * cloudMultiplier), cloudsize[1] * cloudMultiplier, cloudsize[4] * cloudMultiplier);
  ellipse(cloudX+(70 * cloudMultiplier), cloudY+(50 * cloudMultiplier), cloudsize[2] * cloudMultiplier, cloudsize[5] * cloudMultiplier);
}



