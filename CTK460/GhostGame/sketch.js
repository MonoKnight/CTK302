//IRL Game Items
let items = [
  ["G1I1", "G1I2", "G1I3", "G1I4"],
  ["G2I1", "G2I2", "G2I3"],
  ["G3I1", "G3I2", "G3I3", "G3I4", "G3I5"],
  ["G4I1", "G4I2", "G4I3", "G4I4", "G4I5", "G4I6"],
];
let itemsCheck = [
  [false, false, false, false],
  [false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false, false],
];
let itemsLocation = [
  [[275, 475], [450, 650], [625, 825], [975, 475]],
  [[275, 650], [450, 825], [800, 475]],
  [[275, 825], [625, 475], [800, 650], [975, 650], [1150, 475]],
  [[450, 475], [625, 650], [800, 825], [975, 825], [1150, 650], [1150, 825]],
];
let groupHintArray = ["Outdoorsy", "Liquidy", "Film Related", "Antique"];

let itemHintArray = [
  ["Hint 1", "Hint 2", "Hint 3", "Hint 4"],
  ["Hint 5", "Hint 6", "Hint 7"],
  ["Hint 8", "Hint 9", "Hint 10", "Hint 11", "Hint 12"],
  ["Hint 13", "Hint 14", "Hint 15", "Hint 16", "Hint 17", "Hint 18"],
];
let passwordArray = [
  [[4, 1, 9, 9], [2, 3, 1, 8], [4, 2, 9, 2], [4, 4, 0, 8]],
  [[7, 6, 6, 7], [9, 3, 1, 8], [9, 3, 9, 4]],
  [[1, 0, 1, 5], [3, 1, 7, 0], [2, 0, 9, 9], [2, 1, 4, 4], [2, 5, 8, 1]],
  [[8, 7, 3, 3], [5, 2, 6, 8], [8, 9, 3, 2], [4, 9, 0, 9], [8, 2, 2, 2], [4, 1, 1, 0]],
];
let randomCheck1 = [
  [false, false, false, false],
  [false, false],
  [false, false, false, false, false],
  [false, false, false, false, false, false]
];
let randomCheck2 = [
  [false, false, false, false],
  [false, false],
  [false, false, false, false, false],
  [false, false, false, false, false, false]
];
let batteryPasswordArray = [[1, 4, 5, 2], [9, 9, 9, 3], [6, 3, 8, 2], [6, 9, 7, 3], [2, 3, 9, 8]];
let batteryCheckArray = [false, false, false, false, false];
let minigameArray = ["Spacebar"];
//Assets
let [images, fonts] = [[], []];
//loading gif Variables
let [load, loadV, loadVT] = [[], 0, 0];
//switch State Variables
let [gameState, inGameState, whatGroupState, minigameState] = [0, 0, [], 0];
//timer Variables
let [loadAnimTimer, hintTimer, ghostCooldownTimer, ghostMin, ghostSec] = [0, 0, 0, 0, 0];
//game logic Variables
let [randomItem, itemBool, itemCheckBool, randomLocation1, randomLocation2, randomCord1, randomCord2, randBool1, randBool2, randCheckBool1, randCheckBool2, playerCount] = [[], false, false, [], [], [], [], false, false, false, false, false];
//Keypad Variables
let [keypadEntry] = [[-1, -1, -1, -1]];
let [move] = [0]
//battery Variables
let [batTimer, batVar, batMap, batMaxTime, batCheck, batNumb, batFoundTimer, batFoundBool, batOrWrong, batCount] = [0, 0, 0, 0, false, 0, 0, false, false, 0];
//Points Variables
let [pointTotal, currentGhostTimer, ghostTimerVariable, currentGhostPoints, ghostTimeMedium, ghostTimeMax, ghostMultiplier] = [0, 0, 0, 0, 0, 0, 0];
//UI Variables
let [popupToggle] = [0];
//Button Variables
let bState = [false];
//Minigame Variables
let [miniCooldown, miniVariable, miniProcChance, miniProcTimer,enableMinigames, minigameActive, spacebarCounter] = [0, 0, 0, 0, false, false, 0];
//random Variable
let [ghostX, ghostY, ghostToggle, ghostSinV, ghostRotate] = [0, 0, true, 0, 0];

function preload() {
  images[0] = loadImage("Assets/Images/Exclamation-Mark.png");
  images[1] = loadImage("Assets/Images/spookyghost.avif");
  for(let i = 0; i < 29; i++) load[i] = loadImage("Assets/Gifs/Loading/Loading (" + (i+1) + ").gif");
  fonts[0] = loadFont("Assets/Fonts/Top Show.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  textAlign(CENTER);
  imageMode(CENTER);
  batTimer = 600;
  batMaxTime = 600;
  ghostTimeMedium = 30;
  ghostTimeMax = 60;
  ghostX = width/4;
  ghostY = height/2;
  miniCooldown = 10;
  miniProcChance = 20;
  miniProcTimer = 20;
  textFont(fonts[0]);
}

function draw() {
  switch(gameState) {
    //main menu
    case 0:
      mainMenu();
      break;
    //in game
    case 1:
      gameMenu();
      break;
  }
}

function mouseReleased() {
  if((bState[-1] == true) && gameState == 0) gameState = 1, playerCount = false;
  if((bState[0] == true) && gameState == 0) gameState = 1, playerCount = true;
  if((bState[1] == true)) ghostMove(), bState[1] = false;
  if((bState[2] == true)){
    if (batCount > 0){
      batCount --;
      batTimer += 120;
      if(batTimer > batMaxTime) batTimer = batMaxTime; 
    }
  }
  if((bState[3] == true)) gameEnd(), bState[3] = false;
  if((bState[4] == true)) resetGame(), bState[4] = false;
  if((bState[6] == true)) minigameState = 1, bState[6] = false;
  for(let i = 10; i < 20; i++) if((bState[i] == true && batFoundBool == false)) enterNumbers(i - 10);
  if((bState[20] == true) && batFoundBool == false) deleteNumbers(-1);
  if((bState[21] == true) && keypadEntry[3] >= 0 && batFoundBool == false) checkNumbers();
}

function keyPressed(){
  switch(minigameState){
    case 0:
      for (let i = 0; i < 10; i++){
        if (keyCode == (i + 48)){
          enterNumbers(i);
        }
      }
      if (keyCode == BACKSPACE) deleteNumbers(-1);
      if (keyCode == ENTER) checkNumbers();
      break;
    case 1:
      if(keyCode == 32){
        spacebarCounter++;
        if(spacebarCounter >= 10){
          spacebarCounter = 0;
          minigameState = 0;
        }
      }
      break;
  }
}

//Main Menu Function
function mainMenu(){
  background("white");
  textSize(30)
  strokeWeight(2);
  ghostAnim();
  stroke("black");
  text("Ghost Game Demo", width/2, 200);
  buttonCreate(-1, "2 Players", width/2 - 300, height/2, 200, 100, "#325ea8", "#4832a8");
  buttonCreate(0, "3+ Players", width/2 + 300, height/2, 200, 100, "#325ea8", "#4832a8");
}

//In Game Function
function gameMenu(){
  switch (inGameState) {
    //Finding Ghost Animation
    case 0:
      ghostCooldownTimer = 0;
      popupToggle = 0;
      background("blue");
      loadAnimTimer++
      if(loadAnimTimer <= 1*60){
        text("Search for Ghost", width/2, 200);
        loadVT++;
        if(loadVT > 0.02 * 60){
          loadV++;
          if(loadV >= load.length) loadV = 0;
          loadVT = 0;
        }
        image(load[loadV], width/2, height/2);
      }
      else if (loadAnimTimer > 1*60 && loadAnimTimer <= 2*60) {
        text("Ghost Found!", width/2, 200);
        image(images[0], width/2, height/2);
      }
      else (inGameState = 1);
      break;
    //Main Game
    case 1:
      background("blue");
      //Selects a random item and checks if its been selected before
      if(itemBool == false){
        while(itemCheckBool == false){
          randomItem[0] = int(random(0, (items.length)));
          itemBool = true;
          randomItem[1] = int(random(0, (items[randomItem[0]].length)));
          if(itemsCheck[randomItem[0]][randomItem[1]] == false){
            itemsCheck[randomItem[0]][randomItem[1]] = true;
            itemCheckBool = true;
          }
        }
        whatGroupState = randomItem;
      } 
      for(let j = 0; j < 6; j++){
        for(let i = 0; i< 3; i++){
          fill("white");
          square((175 * (1 + j) + 100), (175 * (1 + i) + 300), 150)
        }
      }
      if(randBool1 == false){
        randomCheck1[whatGroupState[0]][whatGroupState[1]] = true;
        while(randCheckBool1 == false){
          randomLocation1[0] = int(random(0, (items.length)));
          randomLocation1[1] = int(random(0, (items[randomLocation1[0]].length)));
          randomCord1[0] = itemsLocation[randomLocation1[0]][randomLocation1[1]][0];
          randomCord1[1] = itemsLocation[randomLocation1[0]][randomLocation1[1]][1];
          randBool1 = true;
          if(randomCheck1[randomLocation1[0]][randomLocation1[1]] == false){
            randCheckBool1 = true;
          }
        }
      }
      if(playerCount == true){
        if(randBool2 == false){
          randomCheck2[randomLocation1[0]][randomLocation1[1]] = true;
          randomCheck2[whatGroupState[0]][whatGroupState[1]] = true;
          while(randCheckBool2 == false){
            randomLocation2[0] = int(random(0, (items.length)));
            randomLocation2[1] = int(random(0, (items[randomLocation2[0]].length)));
            randomCord2[0] = itemsLocation[randomLocation2[0]][randomLocation2[1]][0];
            randomCord2[1] = itemsLocation[randomLocation2[0]][randomLocation2[1]][1];
            randBool2 = true;
            if(randomCheck2[randomLocation2[0]][randomLocation2[1]] == false){
              randCheckBool2 = true;
            }
          }
        }
      }
      fill("red");
      square(itemsLocation[whatGroupState[0]][whatGroupState[1]][0], itemsLocation[whatGroupState[0]][whatGroupState[1]][1], 150);
      fill("Blue");
      square(randomCord1[0], randomCord1[1], 150);
      fill("green");
      if(playerCount == true) square(randomCord2[0], randomCord2[1], 150);
      keypad();
      battery();
      PointCalculation();
      DebugMode();
      minigames();
      if(batTimer <= 0) gameEnd();
      break;
    //Ghost Found Loading Screen
    case 2:
      if(frameCount % 60 == 0) ghostCooldownTimer++;
      if(ghostCooldownTimer > 1) inGameState = 0;
      break;
    //Game Over
    case 3:
      background("blue");
      break;
  }
  IGUI();
}

//On Screen UI
function IGUI(){
  switch(inGameState){
    case 0:
      break;
    case 1:
      fill("white");
      text(batCount + "/5 Batteries Held", 1250, 200);
      text("Ghosts Found: " + move, 200, 100);
      text("Total Points: " + pointTotal, 200, 200);
      text("The Ghost is in Something " + groupHintArray[whatGroupState[0]], 750, 100);
      if(frameCount % 60 == 0) hintTimer++;
      if(hintTimer > 5) fill("white"), text(itemHintArray[whatGroupState[0]][whatGroupState[1]], 750, 200);
      ghostMin = Math.floor(currentGhostTimer / 60);
      ghostSec = currentGhostTimer - (ghostMin * 60);
      text("Time: " + nf(ghostMin, 2, 0) + ":" + nf(ghostSec, 2, 0), 200, 350);

      switch(minigameState){
        case 1:
          fill(0, 0, 0, 70);
          rect(width/2, height/2, width, height);
          fill("gray");
          rect(width/2, height/2, 1300, 400);
          fill(255, 255, 255);
          textSize(60);
          text("DATA CORRUPTED SPAM SPACE BAR", width/2, height/2 - 100);
          text(spacebarCounter + "/ 10", width/2, height / 2 + 100);
          textSize(30);
          break;
      }
      break;
    case 2:
      if(popupToggle < 70){
        popupToggle += 10;
        fill(0, 0, 0, popupToggle);
        rect(width/2, height/2, width, height);
      }
      fill("gray");
      rect(width/2, height/2, 500, 200);
      fill(255, 255, 255);
      textSize(60);
      text("GHOST FOUND", width/2, height/2);
      textSize(30);
      break;
    case 3:
      fill("white");
      text("GAME OVER", width/2, 250);
      text("You Found " + move + " Ghosts!", width/2, height/2);
      text("Total Points: " + pointTotal, width/2, height/2 + 100);
      buttonCreate(4, "Reset Game", width/2, height/2 + 300, 200, 100, "#325ea8", "#4832a8");
      break;
  }
}

//resets variables when ghost moves
function ghostMove(){
  move++;
  for(let j = 0; j < randomCheck1.length; j++){
    for(let i = 0; i < randomCheck1[j].length; i++)
    randomCheck1[j][i] = false;
  }
  for(let j = 0; j < randomCheck2.length; j++){
    for(let i = 0; i < randomCheck2[j].length; i++)
    randomCheck2[j][i] = false;
  }
  if(itemsCheck.flat().every(x => x === true) == true){
    for(let j = 0; j < itemsCheck.length; j++){
      for(let i = 0; i < itemsCheck[j].length; i++)
      itemsCheck[j][i] = false;
    }
    print("hi");
  }
  itemBool = false;
  itemCheckBool = false;
  randBool1 = false;
  randBool2 = false;
  randCheckBool1 = false;
  randCheckBool2 = false
  hintTimer = 0;
  inGameState = 2;
  loadAnimTimer = 0;
  loadVT = 0;
  miniVariable = 0;
  miniProcChance = 20;
  AddPoints();
}

function gameEnd(){
  if(ghostMultiplier > 1) pointTotal = pointTotal * (1 + (0.5 * (ghostMultiplier - 1)));
  inGameState = 3;
}

function resetGame(){
  for(let j = 0; j < randomCheck1.length; j++){
    for(let i = 0; i < randomCheck1[j].length; i++)
    randomCheck1[j][i] = false;
  }
  for(let j = 0; j < randomCheck2.length; j++){
    for(let i = 0; i < randomCheck2[j].length; i++)
    randomCheck2[j][i] = false;
  }
  for(let j = 0; j < itemsCheck.length; j++){
    for(let i = 0; i < itemsCheck[j].length; i++)
    itemsCheck[j][i] = false;
  }
  move = 0;
  itemBool = false;
  itemCheckBool = false;
  randBool1 = false;
  randBool2 = false;
  randCheckBool1 = false;
  randCheckBool2 = false
  hintTimer = 0;
  loadAnimTimer = 0;
  loadVT = 0;
  pointTotal = 0;
  batTimer = 600;
  inGameState = 0;
  gameState = 0;
  ghostMultiplier = 0;
  batCount = 0;
  miniVariable = 0;
  miniProcChance = 20;
  for(let i = 0; i < batteryCheckArray.length; i++){
    batteryCheckArray[i] = false;
  }
}

//Creates Keypad
function keypad(){
  fill("#212224");
  rect(1650, (550 + 700 - 100)/2, 500, 775, 20);
  fill("#3e4045");
  rect(1650, (550 + 700 - 100)/2, 475, 725, 20);
  fill("#74876b");
  rect(1650, 275, 375, 100, 20);
  buttonCreate(10, "0", 1650, 850, 100, 100, "#636363", "#4D5053");
  buttonCreate(11, "1", 1500, 400, 100, 100, "#636363", "#4D5053");
  buttonCreate(12, "2", 1650, 400, 100, 100, "#636363", "#4D5053");
  buttonCreate(13, "3", 1800, 400, 100, 100, "#636363", "#4D5053");
  buttonCreate(14, "4", 1500, 550, 100, 100, "#636363", "#4D5053");
  buttonCreate(15, "5", 1650, 550, 100, 100, "#636363", "#4D5053");
  buttonCreate(16, "6", 1800, 550, 100, 100, "#636363", "#4D5053");
  buttonCreate(17, "7", 1500, 700, 100, 100, "#636363", "#4D5053");
  buttonCreate(18, "8", 1650, 700, 100, 100, "#636363", "#4D5053");
  buttonCreate(19, "9", 1800, 700, 100, 100, "#636363", "#4D5053");
  buttonCreate(20, "Back", 1500, 850, 100, 100, "#636363", "#4D5053");
  buttonCreate(21, "#", 1800, 850, 100, 100, "#636363", "#4D5053");
  textSize(40);
  if(keypadEntry[0] >= 0) text(keypadEntry[0], 1530, 285);
  if(keypadEntry[1] >= 0) text(keypadEntry[1], 1610, 285);
  if(keypadEntry[2] >= 0) text(keypadEntry[2], 1690, 285);
  if(keypadEntry[3] >= 0) text(keypadEntry[3], 1770, 285);
  textSize(30);
}

//Adds Numbers
function enterNumbers(numb){
  if(keypadEntry[0] < 0) keypadEntry[0] = numb;
  else if(keypadEntry[1] < 0) keypadEntry[1] = numb;
  else if(keypadEntry[2] < 0) keypadEntry[2] = numb;
  else if(keypadEntry[3] < 0) keypadEntry[3] = numb;
}

//Removes Numbers
function deleteNumbers(numb){
  if(keypadEntry[3] >= 0) keypadEntry[3] = numb;
  else if(keypadEntry[2] >= 0) keypadEntry[2] = numb;
  else if(keypadEntry[1] >= 0) keypadEntry[1] = numb;
  else if(keypadEntry[0] >= 0) keypadEntry[0] = numb;
}

//Checks password
function checkNumbers(){
  for(let i = 0; i < 5; i++){
    if(keypadEntry[0] == batteryPasswordArray[i][0] && keypadEntry[1] == batteryPasswordArray[i][1] && keypadEntry[2] == batteryPasswordArray[i][2] && keypadEntry[3] == batteryPasswordArray[i][3] && batteryCheckArray[i] == false){
      batCount += 1;
      //batTimer += 120;
      //if(batTimer > batMaxTime) batTimer = batMaxTime;
      batteryCheckArray[i] = true;
      batNumb++;
      batCheck = true;
      pointTotal = pointTotal + 500;
    }
    else if(keypadEntry[0] == batteryPasswordArray[i][0] && keypadEntry[1] == batteryPasswordArray[i][1] && keypadEntry[2] == batteryPasswordArray[i][2] && keypadEntry[3] == batteryPasswordArray[i][3] && batteryCheckArray[i] == true){
      batFoundBool = true;
      batCheck = true;
      batOrWrong = false;
    }
  }
  if(batCheck == false){
    if(keypadEntry[0] == passwordArray[whatGroupState[0]][whatGroupState[1]][0] && keypadEntry[1] == passwordArray[whatGroupState[0]][whatGroupState[1]][1] && keypadEntry[2] == passwordArray[whatGroupState[0]][whatGroupState[1]][2] && keypadEntry[3] == passwordArray[whatGroupState[0]][whatGroupState[1]][3]){
      fill("White");
      ghostMove();
    }
    else{
      batTimer -= 30;
      batFoundBool = true;
      batOrWrong = true;
    }
  }
  batCheck = false;
  for(let i = 0; i < 4; i++) {
    keypadEntry[i] = -1;
  }
}

//Creates and Manages OnScreen Battery
function battery(){
  rect(1650, 100, 460, 110);
  if(frameCount % 60 == 0 && batTimer >= 0) batTimer += -1;
  batMap = map(batTimer, 0, batMaxTime, 0, 450);
  rectMode(CORNER);
  fill("green");
  rect(1425, 50, batMap, 100);
  rectMode(CENTER);
  if (batFoundBool == true){
    fill("red");
    if(batOrWrong == false) text("Battery Already Found!", 1650, 300);
    else if(batOrWrong == true) text("Ghost not Found!", 1650, 300);
    if(frameCount % 60 == 0 && batFoundTimer < 2) batFoundTimer++;
    if(batFoundTimer >= 2) batFoundBool = false, batFoundTimer = 0;
  }
  buttonCreate(2, "Use Battery", 1250, 100, 225, 75, "#9e9e9e", "#636363");
}

//Calculates points earned from current Ghost
function PointCalculation(){
  if(frameCount % 60 == 0) currentGhostTimer++;
  if(currentGhostTimer < ghostTimeMedium) currentGhostPoints = 1000, fill("green");
  else if(currentGhostTimer >= ghostTimeMedium && currentGhostTimer< ghostTimeMax) {
    currentGhostPoints = (1000 - map(currentGhostTimer, ghostTimeMedium, ghostTimeMax, 0, 900));
    fill("yellow");
  }
  else if(currentGhostTimer >= ghostTimeMax) currentGhostPoints = 100, fill("red");
}

//Function to add Points when Ghost Moves
function AddPoints(){
  pointTotal = pointTotal + currentGhostPoints;
  ghostMultiplier++;
  currentGhostPoints = 1000;
  currentGhostTimer = 0;
}


//Adds Elements Helpful for Testing
function DebugMode(){
  buttonCreate(1, "Move", 750, 300, 150, 100, "#325ea8", "#4832a8");
  buttonCreate(3, "End", 1000, 300, 150, 100, "#325ea8", "#4832a8");
  buttonCreate(6, "Space", 500, 300, 150, 100, "#325ea8", "#4832a8");
  fill("white");
  text("Password: " + passwordArray[whatGroupState[0]][whatGroupState[1]], 200, 250);
  text(currentGhostPoints, 200, 300);
  //text((1 + (0.5 * (ghostMultiplier - 1))) +"x Multiplier", 200, 150);
  text(miniVariable, 200, 150);
  text(miniProcChance, 300, 150);
  //text(batTimer, 200, 400);
}

//Function to Create Buttons
function buttonCreate(bSV, bT, bX, bY, bW, bH, bC, bC2) {
  bState[bSV] = false;
  fill("#212224");
  rect(bX, bY, bW + 10, bH + 10, 20);
  fill(bC);
  if(mouseX > (bX - (bW/2)) && mouseX < (bX + (bW/2)) && mouseY > (bY - (bH/2)) && mouseY < (bY + (bH/2)) && minigameState == 0){
    fill(bC2);
    bState[bSV] = true;
  }
  rect(bX, bY, bW, bH, 20);
  fill(255);
  textSize(40);
  text(bT, bX, bY + 10);
  textSize(30);
}

function ghostAnim(){
  ghostSinV += 5;
  ghostY = map(sin(ghostSinV), -1, 1, height * 3 / 8, height * 5 / 8);
  if(ghostX >= width/4) ghostX = map(-cos(ghostSinV), -1, 1, width/4 - 0.01, width * 3 / 8);
  else if(ghostX < width/4) ghostX = map(cos(ghostSinV), -1, 1, width/8, width/4 + 0.01);
  ghostRotate = map(ghostX, width/8, width*3/8, -15, 15);
  push();
  translate(ghostX, ghostY);
  rotate(ghostRotate);
  image(images[1], 0, 0, 200, 200);
  pop();
}

function minigames(){
  switch(minigameState) {
    case 0:
      if(frameCount % 60 == 0) miniVariable++;
      if(miniVariable >= miniCooldown) {
        if(miniProcChance > int(random(0, 100))) minigameState = (int(random(0, minigameArray.length) + 1)), miniVariable = 0, miniProcChance = 20;
        else miniVariable = miniVariable - miniProcTimer, miniProcChance+=10;
      }
      break;
    case 1:
      break;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
