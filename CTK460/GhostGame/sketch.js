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
  [false, false, false, false, false, false]
];
let itemsLocation = [
  [[275, 475], [450, 650], [625, 825], [975, 475]],
  [[275, 650], [450, 825], [800, 475]],
  [[275, 825], [625, 475], [800, 650], [975, 650], [1150, 475]],
  [[450, 475], [625, 650], [800, 825], [975, 825], [1150, 650], [1150, 825]]
];
let groupHintArray = ["Musical", "Mechanical", "Electrical", "Wet"];
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
  [[8, 7, 3, 3], [5, 2, 6, 8], [8, 9, 3, 2], [4, 9, 0, 9], [8, 2, 2, 2], [4, 1, 1, 0]]
]
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
let batteryCheckArray = [false, false, false, false, false]
//images
let [images] = [[]];
//loading gif Variables
let [load, loadV, loadVT] = [[], 0, 0];
//switch State Variables
let [gameState, inGameState, whatGroupState] = [0, 0, []];
//timer Variables
let [loadAnimTimer, hintTimer, ghostCooldownTimer] = [0, 0, 0];
//game logic Variables
let [randomItem, itemBool, itemCheckBool, randomLocation1, randomLocation2, randomCord1, randomCord2, randBool1, randBool2, randCheckBool1, randCheckBool2] = [[], false, false, [], [], [], [], false, false, false, false];
//Keypad Variables
let [keypadEntry] = [[-1, -1, -1, -1]];
let [move] = [0]
//battery Variables
let [batTimer, batVar, batMap, batMaxTime, batCheck, batNumb, batFoundTimer, batFoundBool, batOrWrong] = [0, 0, 0, 0, false, 0, 0, false, false];

let bState = [false];

function preload() {
  images[0] = loadImage("Assets/Images/Exclamation-Mark.png");
  for(let i = 0; i < 29; i++) load[i] = loadImage("Assets/Gifs/Loading/Loading (" + (i+1) + ").gif");
}

function setup() {
  createCanvas(2000, 1000);
  angleMode(DEGREES);
  rectMode(CENTER);
  textAlign(CENTER);
  imageMode(CENTER);
  batTimer = 300
  batMaxTime = 300
}

function draw() {
  switch(gameState) {
    //main menu
    case 0:
      mainMenu();
      break;
    //in game
    case 1:
      background("blue");
      gameMenu();
      break;
  }
}

function mouseReleased() {
  if((bState[0] == true) && gameState == 0) gameState = 1;
  if((bState[1] == true))randBool1 = false, randBool2 = false, randCheckBool1 = false, randCheckBool2 = false, ghostMove(), move++;
  if((bState[10] == true && batFoundBool == false)) enterNumbers(1);
  if((bState[11] == true && batFoundBool == false)) enterNumbers(2);
  if((bState[12] == true && batFoundBool == false)) enterNumbers(3);
  if((bState[13] == true && batFoundBool == false)) enterNumbers(4);
  if((bState[14] == true && batFoundBool == false)) enterNumbers(5);
  if((bState[15] == true && batFoundBool == false)) enterNumbers(6);
  if((bState[16] == true && batFoundBool == false)) enterNumbers(7);
  if((bState[17] == true && batFoundBool == false)) enterNumbers(8);
  if((bState[18] == true && batFoundBool == false)) enterNumbers(9);
  if((bState[19] == true && batFoundBool == false)) deleteNumbers(-1);
  if((bState[20] == true && batFoundBool == false)) enterNumbers(0);
  if((bState[21] == true) && keypadEntry[3] >= 0 && batFoundBool == false) checkNumbers();
}
//itemBool = false, itemCheckBool = false

//Main Menu Function
function mainMenu(){
  background("white");
  textSize(30)
  strokeWeight(2);
  stroke("black");
  text("Ghost Game Demo", width/2, 200);
  buttonCreate(0, "Begin", width/2, height/2, 200, 100, "#325ea8", "#4832a8");
}

//In Game Function
function gameMenu(){
  switch (inGameState) {
    //Finding Ghost Animation
    case 0:
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
      //print(randomItem);
      buttonCreate(1, "Move Ghost", 750, 300, 300, 100, "#325ea8", "#4832a8");
      for(let j = 0; j < 6; j++){
        for(let i = 0; i< 3; i++){
          fill("white");
          square((175 * (1 + j) + 100), (175 * (1 + i) + 300), 150)
        }
      }
      //print(whatGroupState);
      text("The Ghost is in Something " + groupHintArray[whatGroupState[0]], 750, 100);
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
      fill("red");
      square(itemsLocation[whatGroupState[0]][whatGroupState[1]][0], itemsLocation[whatGroupState[0]][whatGroupState[1]][1], 150);
      fill("Blue");
      square(randomCord1[0], randomCord1[1], 150);
      fill("green");
      square(randomCord2[0], randomCord2[1], 150);
      if(frameCount % 60 == 0) hintTimer++;
      if(hintTimer > 5) fill("white"), text(itemHintArray[whatGroupState[0]][whatGroupState[1]], 750, 200);

      keypad();
      //print(keypadEntry)
      fill("white");
      text("Ghosts Found: " + move, 200, 100);
      battery();
      if(batTimer <= 0) inGameState = 3;
      print(batTimer);
      break;
    //Ghost Found Loading Screen
    case 2:
      background("blue");
      fill("white");
      text("GHOST FOUND", width/2, height/2);
      if(frameCount % 60 == 0) ghostCooldownTimer++;
      if(ghostCooldownTimer > 3) inGameState = 0;
      break;
    //Game Over
    case 3:
      fill("white");
      text("GAME OVER", width/2, 250);
      text("You Found " + move + " Ghosts!", width/2, height/2);
      break;
  }
}

function ghostMove(){
  for(let j = 0; j < randomCheck1.length; j++){
    for(let i = 0; i < randomCheck1[j].length; i++)
    randomCheck1[j][i] = false;
  }
  for(let j = 0; j < randomCheck2.length; j++){
    for(let i = 0; i < randomCheck2[j].length; i++)
    randomCheck2[j][i] = false;
  }
  itemBool = false;
  itemCheckBool = false;
  hintTimer = 0;
  inGameState = 2;
  loadAnimTimer = 0;
  loadVT = 0;
}

//Function to Create Buttons
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

function keypad(){
  buttonCreate(10, "1", 1500, 400, 125, 125, "#9e9e9e", "#636363");
  buttonCreate(11, "2", 1650, 400, 125, 125, "#9e9e9e", "#636363");
  buttonCreate(12, "3", 1800, 400, 125, 125, "#9e9e9e", "#636363");
  buttonCreate(13, "4", 1500, 550, 125, 125, "#9e9e9e", "#636363");
  buttonCreate(14, "5", 1650, 550, 125, 125, "#9e9e9e", "#636363");
  buttonCreate(15, "6", 1800, 550, 125, 125, "#9e9e9e", "#636363");
  buttonCreate(16, "7", 1500, 700, 125, 125, "#9e9e9e", "#636363");
  buttonCreate(17, "8", 1650, 700, 125, 125, "#9e9e9e", "#636363");
  buttonCreate(18, "9", 1800, 700, 125, 125, "#9e9e9e", "#636363");
  buttonCreate(19, "Erase", 1500, 850, 125, 125, "#9e9e9e", "#636363");
  buttonCreate(20, "0", 1650, 850, 125, 125, "#9e9e9e", "#636363");
  buttonCreate(21, "Enter", 1800, 850, 125, 125, "#9e9e9e", "#636363");

  if(keypadEntry[0] >= 0) text(keypadEntry[0], 1575, 300);
  if(keypadEntry[1] >= 0) text(keypadEntry[1], 1625, 300);
  if(keypadEntry[2] >= 0) text(keypadEntry[2], 1675, 300);
  if(keypadEntry[3] >= 0) text(keypadEntry[3], 1725, 300);
}

function enterNumbers(numb){
  if(keypadEntry[0] < 0) keypadEntry[0] = numb;
  else if(keypadEntry[1] < 0) keypadEntry[1] = numb;
  else if(keypadEntry[2] < 0) keypadEntry[2] = numb;
  else if(keypadEntry[3] < 0) keypadEntry[3] = numb;
}

function deleteNumbers(numb){
  if(keypadEntry[3] >= 0) keypadEntry[3] = numb;
  else if(keypadEntry[2] >= 0) keypadEntry[2] = numb;
  else if(keypadEntry[1] >= 0) keypadEntry[1] = numb;
  else if(keypadEntry[0] >= 0) keypadEntry[0] = numb;
}

function checkNumbers(){
  for(let i = 0; i < 5; i++){
    if(keypadEntry[0] == batteryPasswordArray[i][0] && keypadEntry[1] == batteryPasswordArray[i][1] && keypadEntry[2] == batteryPasswordArray[i][2] && keypadEntry[3] == batteryPasswordArray[i][3] && batteryCheckArray[i] == false){
      batTimer += 120;
      if(batTimer > batMaxTime) batTimer = batMaxTime;
      batteryCheckArray[i] = true;
      batNumb++;
      batCheck = true;
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
      move++;
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

function battery(){
  fill("white");
  text(batNumb + " Batteries Found", 1650, 200);
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
}
