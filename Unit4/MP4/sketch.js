let floor, c, ball, box, square;
//neco sprites
let nHurtBox, physicsball;
//goombud sprites;
let goombud;
//neco neutral/walk/run
let [nDir, nWTimer, nWV, nWalk, nWalkL, nNTimer, nNV, nNeutralR, nNeutralL, nRT, nRV, nRunR, nRunL, nVar] = [true, 0, 0, [], [], 0, 0, [], [], 0, 0, [], [], 0];
//neco jump
let [nIsJumping, nIsGrounded, nDoubleJump, nJTimer, nJV, nJumpR, nJumpL, jTimer] = [false, true, true, 0, 0, [], [], 0];
//neco attack
let [isPunching, nPDir, nPV, nPTimer, nPunchL, nPunchR, ePV, ePTimer, explosion] = [false, false, 0, 0, [], [], 0, 0, []];

let i;

function preload(){
  for(let i = 0; i < 8; i++) nWalk[i] = loadImage("Assets/NecoArc/Walk/walkR/walk (" + (i+1) +").gif");
  for(let i = 0; i < 8; i++) nWalkL[i] = loadImage("Assets/NecoArc/Walk/walkL/walkL (" + (i+1) +").gif");
  for(let i = 0; i < 5; i++) nNeutralR[i] = loadImage("Assets/NecoArc/Neutral/NeutralR (" + (i+1) +").gif");
  for(let i = 0; i < 5; i++) nNeutralL[i] = loadImage("Assets/NecoArc/Neutral/NeutralL (" + (i+1) +").gif");
  for(let i =0; i < 8; i++) nJumpR[i] = loadImage("Assets/NecoArc/Jump/JumpRight/nJumpR (" + (i+1) +").gif");
  for(let i =0; i < 8; i++) nJumpL[i] = loadImage("Assets/NecoArc/Jump/JumpLeft/nJumpL (" + (i+1) +").gif");
  for(let i = 0; i < 3; i++) nRunR[i] = loadImage("Assets/NecoArc/Run/RunRight/RunR (" + (i+1) +").gif");
  for(let i = 0; i < 3; i++) nRunL[i] = loadImage("Assets/NecoArc/Run/RunLeft/RunLeft (" + (i+1) +").gif");
  for(let i = 0; i < 7; i++) nPunchR[i] = loadImage("Assets/NecoArc/Attacks/Punch/PunchR (" + (i+1) +").gif");
  for(let i = 0; i < 7; i++) nPunchL[i] = loadImage("Assets/NecoArc/Attacks/Punch/NecoPunchLeft (" + (i+1) +").gif");
  for(let i = 0; i < 17; i++) explosion[i] = loadImage("Assets/Explosion/DExplosion (" + (i+1) +").gif");
  i = loadImage("Assets/GoombudRight.png");
}

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);
  angleMode(DEGREES);
  world.gravity.y = 30;
  physicsball = new Sprite(width/2, 30, 80, 'dynamic');
  nHurtBox = new Sprite(physicsball.x, physicsball.y, 40, 90, 'none');
  goombud = new Sprite(width/2 - 100, 30, 60, 'dynamic');
  c = color(0, 0, 0, 0);
  physicsball.color = c;
  goombud.color = c;
  c = color(255, 0, 0, 100);
  nHurtBox.color = c;
  physicsball.visible = true;
  floorcreate();

  //square = new Sprite(300, 30, 40, 40, 'kinetic');

}

function draw() {
  background("white");
  playermove();
  push();
  translate(goombud.x, goombud.y);
  rotate(goombud.rotation);
  image(i, 0, 0, 60, 60);
  pop();
  if(goombud.x > width + 50) goombud.x = -50;
  if(goombud.x <  -50) goombud.x = width + 50;
  if(physicsball.x > width + 50) physicsball.x = -50;
  if(physicsball.x <  -50) physicsball.x = width + 50;
  nHurtBox.x = physicsball.x;
  nHurtBox.y = physicsball.y;
  //rect(ball.x, ball.y, 50, 50);

  if(kb.pressing('f')) goombud.rotation += -1;
  
  //if(keyIsDown(RIGHT_ARROW)) floor.rotation += 1;

  //floor.rotation += 1;
}

function playermove(){
  //check is player is grounded
  if(physicsball.collides(floor)) nIsGrounded = true, nDoubleJump = true;
  //is jumping
  if(nIsJumping == true) {
    jTimer++ 
    if(jTimer > 0.5 * 60 && nIsGrounded == true) nIsJumping = false, jTimer = 0;
  }
  //jump
  if(kb.presses('up') && nIsGrounded == true)nIsJumping = true, nIsGrounded = false, physicsball.vel.y = -10;
  //double jump
  else if(kb.presses('up') && nDoubleJump == true) physicsball.vel.y = -10, nDoubleJump = false;
  //fast fall
  if(kb.presses('down') && nIsGrounded == false) physicsball.vel.y = 20;
  
  //checking what movement state the player is in
  if(kb.pressing('left') && nIsJumping == true && !kb.pressing('shift')) nVar = 5;
  else if(kb.pressing('right') && nIsJumping == true && !kb.pressing('shift')) nVar = 6;
  else if(kb.pressing('left') && nIsJumping == true && kb.pressing('shift')) nVar = 7;
  else if(kb.pressing('right') && nIsJumping == true && kb.pressing('shift')) nVar = 8;
  else if(kb.pressing('left') && !kb.pressing('shift')) nVar = 1;
  else if(kb.pressing('right') && !kb.pressing('shift')) nVar = 2;
  else if(kb.pressing('left') && kb.pressing('shift')) nVar = 3;
  else if(kb.pressing('right') && kb.pressing('shift')) nVar = 4;
  else if(nIsJumping == true) nVar = 9;
  else nVar = 0;

  if(isPunching == false && kb.pressing('left')) nPDir = false; 
  else if(isPunching == false && kb.pressing('right')) nPDir = true; 
  if(kb.pressing('p')) isPunching = true;
  if(isPunching == true) playerPunch();

  switch(nVar){
    case 0://Neutral
      physicsball.vel.x = 0;
      if(nIsJumping == false && isPunching == false) playerNeutral();
      break;
    case 1://Walk Left
      physicsball.vel.x = -5;
      nDir = false;
      if(nIsJumping == false && isPunching == false) playerWalk();
      break;
    case 2://Walk Right
      physicsball.vel.x = 5;
      nDir = true;
      if(nIsJumping == false && isPunching == false) playerWalk();
      break;
    case 3://Run Left
      physicsball.vel.x = -10;
      nDir = false;
      if(nIsJumping == false && isPunching == false) playerRun();
      break;
    case 4://Run Right
      physicsball.vel.x = 10;
      nDir = true;
      if(nIsJumping == false && isPunching == false) playerRun();
      break;
    case 5://Jump Left
      physicsball.vel.x = -5;
      nDir = false;
      playerJump();
      break;
    case 6://Jump Right
      physicsball.vel.x = 5;
      nDir = true;
      if(isPunching == false) playerJump();
      break;
    case 7://Run Jump Left
      physicsball.vel.x = -10;
      nDir = false;
      if(isPunching == false) playerJump();
      break;
    case 8://Run Jump Right
      physicsball.vel.x = 10;
      nDir = true;
      if(isPunching == false) playerJump();
      break;
    case 9://Jump Neutral
      physicsball.vel.x = 0;
      if(isPunching == false) playerJump();
      break;
  }

}

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

function playerJump(){
  nJTimer++ 
  if(nJTimer >= 0.1*60){
    nJV++;
    if(nJV > 7) nJV = 0;
    nJTimer = 0;
  }
  if (nDir == false) image(nJumpL[nJV], physicsball.x, physicsball.y - 5, 100, 100);
  else if (nDir == true) image(nJumpR[nJV], physicsball.x, physicsball.y - 5, 100, 100);
}

function playerPunch(){
  nPTimer++ 
  if(nPTimer >= 0.1*60){
    nPV++;
    nPTimer = 0;
  }
  if (nPDir == false) image(nPunchL[nPV], physicsball.x, physicsball.y - 5, 100, 100);
  else if (nPDir == true) image(nPunchR[nPV], physicsball.x, physicsball.y - 5, 100, 100);
  if(nPV > 2) punchExplosion();
  if(nPV >= 6) isPunching = false, nPV = 0, ePV = 0;
}

function punchExplosion(){
  ePTimer++
  if(ePTimer > 0.0175*60){
    ePV++
    ePTimer = 0;
  }
  
  if (nPDir == false) image(explosion[ePV], physicsball.x -60, physicsball.y - 25, 100, 100);
  else if (nPDir == true) image(explosion[ePV], physicsball.x + 60, physicsball.y - 25, 100, 100);
}

function floorcreate(){
  floor = new Sprite();
	floor.collider = 'static';
  c = color(0, 0, 255);
  floor.color = c;
	floor.y = 390;
	floor.w = width + 200;
	floor.h = 5;
  floor.rotation = 0;
}




