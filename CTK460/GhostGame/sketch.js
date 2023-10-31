//IRL Game Items
let items = [
  ["Laptop", "Smartphone", "Calculator"], 
  ["Laptop Charger", "Portable Battery Charger", "Portable Speaker"],
  ["Notebook", "Pen", "Pencil"], 
  ["Highlighter", "Sticky Notes", "Textbooks"], 
  ["Planner", "Index Cards", "Wallet"], 
  ["ID", "Keys", "Sunglasses"], 
  ["Reading Glasses", "Hairbrush", "Pocket Mirror"], 
  ["Water Bottle", "Table Clock", "Hand Sanitizer"], 
  ["Face Mask", "Tissues", "Chapstick"],
  ["Hand Lotion", "Deodorant", "First Aid Kit"], 
  ["Backpack", "Shopping Bag", "Snack"], 
  ["Umbrella", "Gum", "Smartphone Charger"], 
];
let itemsCheck = [
  [false, false, false],
  [false, false, false],
  [false, false, false],
  [false, false, false],
  [false, false, false],
  [false, false, false],
  [false, false, false],
  [false, false, false],
  [false, false, false],
  [false, false, false],
  [false, false, false],
  [false, false, false],
];
let itemRoomNumber = [
 [0, 1, 2],
 [3, 0, 1],
 [2, 3, 0],
 [1, 2, 3],
 [0, 1, 2],
 [3, 0, 1],
 [2, 3, 0],
 [1, 2, 3],
 [0, 1, 2],
 [3, 0, 1],
 [2, 3, 0],
 [1, 2, 3],
];

let whatFloor = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
 ];

let itemsLocation = [
  [[275, 475], [450, 650], [625, 825]],
  [[275, 650], [450, 825], [800, 475]],
  [[275, 825], [625, 475], [800, 650]],
  [[450, 475], [625, 650], [800, 825]],
  [[275, 475], [450, 650], [625, 825]],
  [[275, 650], [450, 825], [800, 475]],
  [[275, 825], [625, 475], [800, 650]],
  [[450, 475], [625, 650], [800, 825]],
  [[275, 475], [450, 650], [625, 825]],
  [[275, 650], [450, 825], [800, 475]],
  [[275, 825], [625, 475], [800, 650]],
  [[450, 475], [625, 650], [800, 825]],
];
let itemHintArray1 = [
  ["Laptop", "Smartphone", "Calculator"], 
  ["Laptop Charger", "Portable Battery Charger", "Portable Speaker"],
  ["Notebook", "Pen", "Pencil"], 
  ["Highlighter", "Sticky Notes", "Textbooks"], 
  ["Planner", "Index Cards", "Wallet"], 
  ["ID", "Keys", "Sunglasses"], 
  ["Reading Glasses", "Hairbrush", "Pocket Mirror"], 
  ["Water Bottle", "Table Clock", "Hand Sanitizer"], 
  ["Face Mask", "Tissues", "Chapstick"],
  ["Hand Lotion", "Deodorant", "First Aid Kit"], 
  ["Backpack", "Shopping Bag", "Snack"], 
  ["Umbrella", "Gum", "Smartphone Charger"], 
];

let itemHintArray2 = [
  ["Laptop", "Smartphone", "Calculator"], 
  ["Laptop Charger", "Portable Battery Charger", "Portable Speaker"],
  ["Notebook", "Pen", "Pencil"], 
  ["Highlighter", "Sticky Notes", "Textbooks"], 
  ["Planner", "Index Cards", "Wallet"], 
  ["ID", "Keys", "Sunglasses"], 
  ["Reading Glasses", "Hairbrush", "Pocket Mirror"], 
  ["Water Bottle", "Table Clock", "Hand Sanitizer"], 
  ["Face Mask", "Tissues", "Chapstick"],
  ["Hand Lotion", "Deodorant", "First Aid Kit"], 
  ["Backpack", "Shopping Bag", "Snack"], 
  ["Umbrella", "Gum", "Smartphone Charger"], 
];

let itemHintArray3 = [
  ["Laptop", "Smartphone", "Calculator"], 
  ["Laptop Charger", "Portable Battery Charger", "Portable Speaker"],
  ["Notebook", "Pen", "Pencil"], 
  ["Highlighter", "Sticky Notes", "Textbooks"], 
  ["Planner", "Index Cards", "Wallet"], 
  ["ID", "Keys", "Sunglasses"], 
  ["Reading Glasses", "Hairbrush", "Pocket Mirror"], 
  ["Water Bottle", "Table Clock", "Hand Sanitizer"], 
  ["Face Mask", "Tissues", "Chapstick"],
  ["Hand Lotion", "Deodorant", "First Aid Kit"], 
  ["Backpack", "Shopping Bag", "Snack"], 
  ["Umbrella", "Gum", "Smartphone Charger"], 
];

let passwordArray = [
  [[3, 5, 2, 8], [4, 1, 3, 8], [8, 4, 4, 9]],
  [[6, 8, 4, 0], [9, 4, 3, 9], [3, 7, 8, 7]],
  [[9, 4, 3, 0], [8, 7, 4, 9], [8, 4, 2, 9]],
  [[8, 7, 3, 0], [9, 4, 3, 1], [4, 5, 3, 2]],
  [[7, 5, 2, 3], [7, 8, 2, 2], [6, 2, 1, 9]],
  [[3, 1, 3, 6], [2, 1, 4, 7], [8, 7, 1, 8]],
  [[5, 6, 2, 7], [6, 3, 2, 6], [6, 5, 2, 5]],
  [[4, 2, 2, 4], [7, 4, 2, 0], [4, 8, 4, 2]],
  [[4, 2, 4, 0], [7, 5, 4, 1], [8, 5, 4, 3]],
  [[9, 5, 2, 9], [7, 5, 2, 3], [4, 1, 3, 5]],
  [[4, 5, 2, 1], [2, 3, 3, 3], [4, 2, 1, 7]],
  [[4, 8, 4, 6], [4, 2, 4, 8], [4, 8, 4, 8]],
];
let randomCheck1 = [
  [false, false, false],
  [false, false, false],
  [false, false, false],
  [false, false, false],
  [false, false, false],
  [false, false, false],
  [false, false, false],
  [false, false, false],
  [false, false, false],
  [false, false, false],
  [false, false, false],
  [false, false, false],
];
let randomCheck2 = [
  [false, false, false],
  [false, false, false],
  [false, false, false],
  [false, false, false],
  [false, false, false],
  [false, false, false],
  [false, false, false],
  [false, false, false],
  [false, false, false],
  [false, false, false],
  [false, false, false],
  [false, false, false],
];
let batteryPasswordArray = [[1, 0, 0, 4], [0, 4, 2, 4], [3, 8, 5, 1], [0, 2, 5, 4], [2, 5, 3, 0], [1, 9, 0, 9], [1, 2, 1, 0], [4, 2, 8, 9], [9, 1, 4, 7], [3, 8, 6, 1]];
let batteryCheckArray = [false, false, false, false, false];
let minigameArray = ["Spacebar", "Frequency", "Radar", "Ghost"];
//Assets
let [images, fonts, mapImages, mainMenuAsset, inGameAsset, basementImages, groundImages, endImages] = [[], [], [], [], [], [], [], []];
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
//Frequency Minigame Variables
let [strum, offset, offsetvar, setStrum, setStrumBool] = [12, 0, 5, 15, false];
let whatSetStrum = [10, 12, 14, 16, 18, 20, 22, 24, 26, 28];
//Radar Minigame Variables 
let [dots, newLine, dotsCollected, dotsMax, speed, direction, linex] = [[], [], 0, 5, 5, 0, 1];
//random Variable
let [ghostX, ghostY, ghostToggle, ghostSinV, ghostRotate] = [0, 0, true, 0, 0];

function preload() {
  images[0] = loadImage("Assets/Images/Exclamation-Mark.png");
  images[1] = loadImage("Assets/Images/spookyghost.png");
  images[2] = loadImage("Assets/Images/LogoTransparent.png");
  images[3] = loadImage("Assets/Images/MMBackground.jpg");
  images[4] = loadImage("Assets/Images/Minigame_Frame_Empty.png");
  images[5] = loadImage("Assets/Images/ButtonNoHover.png");
  images[6] = loadImage("Assets/Images/ButtonHover.png");
  images[7] = loadImage("Assets/Images/Background2.jpg");
  mainMenuAsset[0] = loadImage("Assets/Images/MainMenu/MMBackground.jpg");
  mainMenuAsset[1] = loadImage("Assets/Images/MainMenu/Black.png");
  mainMenuAsset[2] = loadImage("Assets/Images/MainMenu/Yellow.png");
  mainMenuAsset[3] = loadImage("Assets/Images/MainMenu/2P.png");
  mainMenuAsset[4] = loadImage("Assets/Images/MainMenu/3P.png");
  mainMenuAsset[5] = loadImage("Assets/Images/MainMenu/Subtitle.png");
  mainMenuAsset[6] = loadImage("Assets/Images/MainMenu/Line.png");
  inGameAsset[0] = loadImage("Assets/Images/InGameMenu/Background.png");
  inGameAsset[1] = loadImage("Assets/Images/InGameMenu/Battery.png");
  inGameAsset[2] = loadImage("Assets/Images/InGameMenu/GhostIcon.png");
  inGameAsset[3] = loadImage("Assets/Images/InGameMenu/Frame.png");
  inGameAsset[4] = loadImage("Assets/Images/InGameMenu/Corner1.png");
  inGameAsset[5] = loadImage("Assets/Images/InGameMenu/Corner2.png");
  inGameAsset[6] = loadImage("Assets/Images/InGameMenu/Basement.png");
  inGameAsset[7] = loadImage("Assets/Images/InGameMenu/First_Floor.png");
  inGameAsset[8] = loadImage("Assets/Images/InGameMenu/Hint1.png");
  inGameAsset[9] = loadImage("Assets/Images/InGameMenu/Hint2.png");
  inGameAsset[10] = loadImage("Assets/Images/InGameMenu/Input.png");
  inGameAsset[11] = loadImage("Assets/Images/InGameMenu/Logo.png");
  inGameAsset[12] = loadImage("Assets/Images/InGameMenu/DarkenedBattery.png");
  endImages[0] = loadImage("Assets/Images/GameOver/PlayAgain.png");

  for(let i = 0; i < 29; i++) load[i] = loadImage("Assets/Gifs/Loading/Loading (" + (i+1) + ").gif");
  //for(let i = 0; i < 12; i++) mapImages[i] = loadImage("Assets/Images/Map/test" + (i+1) + ".png");
  for(let i = 0; i < 4; i++) basementImages[i] = loadImage("Assets/Images/Basement/Basement" + (i+1) + ".png");
  for(let i = 0; i < 4; i++) groundImages[i] = loadImage("Assets/Images/GroundFloor/First_Floor" + (i+1) + ".png");
  fonts[0] = loadFont("Assets/Fonts/Cambria.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  textAlign(CENTER);
  imageMode(CENTER);
  batTimer = 300;
  batMaxTime = 300;
  ghostTimeMedium = 60;
  ghostTimeMax = 180;
  ghostX = width/4;
  ghostY = height/2;
  miniCooldown = 10;
  miniProcChance = 20;
  miniProcTimer = 20;
  textFont(fonts[0]);
  newLine.push(new Line());
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
  if((bState[-1] == true) && gameState == 0) gameState = 1, playerCount = false, inGameState = 1;
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
  if((bState[6] == true)){
    minigameState = 4;
    bState[6] = false;
    for(let i = 0; i < dotsMax; i++) dots.push(new Dots());
  } 
  for(let i = 10; i < 20; i++) if((bState[i] == true && batFoundBool == false)) enterNumbers(i - 10);
  if((bState[20] == true) && batFoundBool == false) deleteNumbers(-1);
  if((bState[21] == true) && keypadEntry[3] >= 0 && batFoundBool == false) checkNumbers();
  if(gameState == 1 && minigameState == 4) if(collidePointCircle(mouseX, mouseY, ghostX, ghostY, 200) == true) minigameState = 0;
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
        if(spacebarCounter >= 15){
          spacebarCounter = 0;
          minigameState = 0;
        }
      }
      break;
    case 2:
      if (keyCode == UP_ARROW && strum > 10) strum += -2;
      if (keyCode == DOWN_ARROW && strum < 26) strum += 2;
      break;
    case 3:
      if(keyCode == 32){
        for(let i = 0; i < dots.length; i++) {
           if(collideLineCircle(newLine[0].x2, newLine[0].y2, width/2, height/2, dots[i].x, dots[i].y, 45) == true){
             dots.splice(i, 1);
             dotsCollected++;
             if(dotsCollected == dotsMax) {
              minigameState = 0;
              dotsCollected = 0;
            }
          }      
        }
      }
      break;
  }
}

//Main Menu Function
function mainMenu(){
  //background
  image(mainMenuAsset[0], width/2, height/2, width, height);
  //logo
  image(images[2], width/2, 250, 750, 750);
  //teehee don't delete
  ghostAnim((width/4), ((width * 3) / 4), (width/2), ((height * 3) / 8), ((height * 5) / 8), 1000, 10);
  //buttons
  image(mainMenuAsset[1], width/2 - 200, height/2 + 250);
  image(mainMenuAsset[1], width/2 + 200, height/2 + 250);
  imageButtonCreate(-1, "", width/2 - 200, height/2 + 250, mainMenuAsset[1].width, mainMenuAsset[1].height, mainMenuAsset[1], mainMenuAsset[2]);
  imageButtonCreate(0, "", width/2 + 200, height/2 + 250, mainMenuAsset[1].width, mainMenuAsset[1].height, mainMenuAsset[1], mainMenuAsset[2]);
  image(mainMenuAsset[3], width/2 - 200, height/2 + 250, mainMenuAsset[3].width * 0.75, mainMenuAsset[3].height * 0.75);
  image(mainMenuAsset[4], width/2 + 200, height/2 + 250, mainMenuAsset[3].width * 0.75, mainMenuAsset[3].height * 0.75);
  //Subtitle
  image(mainMenuAsset[5], width/2, height/2 + 100, mainMenuAsset[5].width * 0.6, mainMenuAsset[5].height * 0.6);
  image(mainMenuAsset[6], width/2, height/2 + 130, mainMenuAsset[6].width * 0.6, mainMenuAsset[6].height * 0.6);
  image(mainMenuAsset[6], width/2, height/2 + 125, mainMenuAsset[6].width * 0.6, mainMenuAsset[6].height * 0.6);
  textSize(40);
  fill("#C5bba3");
  text("Choose the Number of Players to Start", width/2, height/2 + 350);
}

//In Game Function
function gameMenu(){
  IGUI();
  switch (inGameState) {
    //Finding Ghost Animation
    case 0:
      fill("#e7e1da");
      textSize(70);
      ghostCooldownTimer = 0;
      popupToggle = 0;
      image(images[7], width/2, height/2 );
      loadAnimTimer++
      if(loadAnimTimer <= 1*60){
        text("Searching for Ghost", width/2, 200);
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
        print(whatGroupState);
      } 
      if(randBool1 == false){
        randomCheck1[whatGroupState[0]][whatGroupState[1]] = true;
        while(randCheckBool1 == false){
          randomLocation1[0] = int(random(0, (items.length)));
          randomLocation1[1] = int(random(0, (items[randomLocation1[0]].length)));
          randomCord1[0] = itemRoomNumber[randomLocation1[0]][randomLocation1[1]];
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
            randomCord2[0] = itemRoomNumber[randomLocation2[0]][randomLocation2[1]];
            randBool2 = true;
            if(randomCheck2[randomLocation2[0]][randomLocation2[1]] == false){
              randCheckBool2 = true;
            }
          }
        }
      }
      //Displays the Dots on the Map
      if(whatFloor[whatGroupState[0]][whatGroupState[1]] == 0) {
        image(basementImages[itemRoomNumber[whatGroupState[0]][whatGroupState[1]]], width/2 - 450, height/2 + 20, inGameAsset[6].width * 0.2, inGameAsset[6].height * 0.2);
      }
      else if(whatFloor[whatGroupState[0]][whatGroupState[1]] == 1) {
        image(groundImages[itemRoomNumber[whatGroupState[0]][whatGroupState[1]]], width/2 + 450, height/2 + 20, inGameAsset[6].width * 0.2, inGameAsset[6].height * 0.2);
      }
      if(whatFloor[randomLocation1[0]][randomLocation1[1]] == 0){
        image(basementImages[randomCord1[0]], width/2 - 450, height/2 + 20, inGameAsset[6].width * 0.2, inGameAsset[6].height * 0.2);
      }
      else if(whatFloor[randomLocation1[0]][randomLocation1[1]] == 1){
        image(groundImages[randomCord1[0]], width/2 + 450, height/2 + 20, inGameAsset[6].width * 0.2, inGameAsset[6].height * 0.2);
      }
      if(playerCount == true){
        if(whatFloor[randomLocation2[0]][randomLocation2[1]] == 0){
          image(basementImages[randomCord2[0]], width/2 - 450, height/2 + 20, inGameAsset[6].width * 0.2, inGameAsset[6].height * 0.2);
        }
        else if(whatFloor[randomLocation2[0]][randomLocation2[1]] == 1){
          image(groundImages[randomCord2[0]], width/2 + 450, height/2 + 20, inGameAsset[6].width * 0.2, inGameAsset[6].height * 0.2);
        }
      }
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
      break;
  }
}

//On Screen UI
function IGUI(){
  switch(inGameState){
    case 0:
      break;
    case 1:
      //Background
      image(inGameAsset[0], width/2, height/2, width, height);
      //Map
      push();
      tint(255, 75);
      image(inGameAsset[3], width/2, height/2, inGameAsset[3].width * 0.7, inGameAsset[3].height * 0.55);
      pop();
      image(inGameAsset[4], width/2 - (inGameAsset[3].width * 0.235), height/2 - (inGameAsset[3].height * 0.1), inGameAsset[4].width * 0.5, inGameAsset[4].height * 0.375);
      image(inGameAsset[5], width/2 + (inGameAsset[3].width * 0.235), height/2 + (inGameAsset[3].height * 0.1), inGameAsset[5].width * 0.5, inGameAsset[5].height * 0.375);
      image(inGameAsset[6], width/2 - 450, height/2 + 20, inGameAsset[6].width * 0.2, inGameAsset[6].height * 0.2);
      image(inGameAsset[7], width/2 + 450, height/2 + 20, inGameAsset[7].width * 0.2, inGameAsset[7].height * 0.2);
      fill("#e7e1da");
      text("Basement", width/2 - 750, height/2 - 175);
      text("Ground Floor", width/2 + 725, height/2 - 175);
      //Buttons on Bottom
      image(inGameAsset[8], width/2 - 675, height/2 + 325, inGameAsset[8].width * 0.5, inGameAsset[8].height * 0.7);
      image(inGameAsset[9], width/2, height/2 + 325, inGameAsset[8].width * 0.5, inGameAsset[8].height * 0.7);
      image(inGameAsset[9], width/2 + 675, height/2 + 325, inGameAsset[8].width * 0.5, inGameAsset[8].height * 0.7);
      image(inGameAsset[10], width/2, height/2 + 425, inGameAsset[8].width * 0.4, inGameAsset[8].height * 0.75);
      text(batCount + " Batteries Held", 1600, 200);
      text("Ghosts Found: " + move, 200, 100);
      //text("Total Points: " + pointTotal, 200, 200);
      //Displays Hints
      textSize(40);
      fill("#694f35");
      if(frameCount % 60 == 0) hintTimer++;
      if(whatGroupState[0] != undefined) text(itemHintArray1[whatGroupState[0]][whatGroupState[1]], width/2 - 675, height/2 + 335);
      if(hintTimer > 5) text(itemHintArray2[whatGroupState[0]][whatGroupState[1]], width/2, height/2 + 335);
      else text("Hint 2 Locked", width/2, height/2 + 335);
      if(hintTimer > 10) text(itemHintArray3[whatGroupState[0]][whatGroupState[1]], width/2 + 675, height/2 + 335);
      else text("Hint 3 Locked", width/2 + 675, height/2 + 335);
      ghostMin = Math.floor(currentGhostTimer / 60);
      ghostSec = currentGhostTimer - (ghostMin * 60);
      text("Time: " + nf(ghostMin, 2, 0) + ":" + nf(ghostSec, 2, 0), 200, 150);

      switch(minigameState){
        case 1: //battery Minigame
          fill(0, 0, 0, 70);
          rect(width/2, height/2, width, height);
          image(images[4], width/2, height/2);
          fill(255, 255, 255);
          textSize(60);
          text("DATA CORRUPTED SPAM SPACE BAR", width/2, height/2 - 100);
          text(spacebarCounter + "/ 15", width/2, height / 2 + 100);
          textSize(30);
          break;
        case 2: //Frequency Minigame
          push();
          fill(0, 0, 0, 70);
          rect(width/2, height/2, width, height);
          image(images[4], width/2, height/2);
          fill("black");
          rect(width/2, height/2, 600, 300);
          fill("#a1936d");
          textSize(50);
          text("EMF READER OUT OF SYNC \n REALIGN USING UP AND DOWN KEYS", width/2, height/2 - 250);
          textSize(30);
          strokeWeight(5);
          noFill();
          stroke("red");
          beginShape();
          for(var x = width/2 - 300; x < width/2 + 300; x++){
            //var angle = map(x, 0, width, 0, TWO_PI);
            var angle = offset  + x * 1;
            // map x between 0 and width to 0 and Two Pi
            var y = map(sin(angle), -setStrum/10, setStrum/10, height/2 - 150, height/2 + 150);
            vertex(x, y);
          }
          endShape();
          stroke("green");
          beginShape();
          for(var x = width/2 - 300; x < width/2 + 300; x++){
            //var angle = map(x, 0, width, 0, TWO_PI);
            var angle = offset + x * 1;
            // map x between 0 and width to 0 and Two Pi
            var y = map(sin(angle), -strum/10, strum/10, height/2 - 150, height/2 + 150);
            vertex(x, y);
          }
          endShape();
          stroke("#292622");
          rect(width/2, height/2, 600, 300);
          offset += offsetvar;
          stroke("black");
          pop();
          break;
        case 3: //Radar Minigame
          fill(0, 0, 0, 70);
          rect(width/2, height/2, width, height);
          image(images[4], width/2, height/2 - 75, images[4].width * 1.25, images[4].height * 1.25);
          fill("white");
          textSize(60);
          text("RADAR DISRUPTED", width/2, height/2 - 375);
          textSize(30);
          text("PRESS SPACE WHEN THE SENSOR LINE OVERLAPS THE RED ANOMALIES", width/2, height/2 - 300);
          radar();
          break;
        case 4:
          ghostAnim((width / 2) - 300, (width / 2) + 300, width / 2, (height / 2) - 150, (height / 2) + 150, 200, 255);
          push();
          stroke("black");
          strokeWeight(20);
          fill("red");
          textSize(100);
          text("CLICK THE GHOST NOW NOW NOW NOW NOW", width/2, 200);
          pop();
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
      //background
      image(images[7], width/2, height/2 );
      //logo
      image(images[2], width/2, 250, 500, 500);
      //game over message
      image(mainMenuAsset[6], width/2, height/2 + 105, mainMenuAsset[6].width * 0.6, mainMenuAsset[6].height * 0.6);
      image(mainMenuAsset[6], width/2, height/2 + 100, mainMenuAsset[6].width * 0.6, mainMenuAsset[6].height * 0.6);
      fill("#e7e1da");
      textSize(150);
      text("GAME OVER", width/2, height/2 + 60);
      //ghost count
      textSize(50);
      text("You Found " + move + " Ghosts!", width/2, height/2 + 200);
      //text("Total Points: " + pointTotal, width/2, height/2 + 100);
      //buttonCreate(4, "Reset Game", width/2, height/2 + 300, 200, 100, "#325ea8", "#4832a8");
      //play again button
      image(mainMenuAsset[1], width/2, height/2 + 300, mainMenuAsset[1].width * 1.25, mainMenuAsset[1].height * 1.25);
      imageButtonCreate(4, "", width/2, height/2 + 300, mainMenuAsset[1].width * 1.25, mainMenuAsset[1].height * 1.25, mainMenuAsset[1],
      mainMenuAsset[2]);
      image(endImages[0], width/2, height/2 + 300, endImages[0].width * 0.75, endImages[0].height * 0.75);
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
  batTimer = 300;
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
  /*
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
  */
  textSize(40);
  fill("#694f35");
  if(keypadEntry[0] >= 0) text(keypadEntry[0], width/2 - 120, height/2 + 435);
  else if(keypadEntry[0] < 0) text("__", width/2 - 120, height/2 + 435);
  if(keypadEntry[1] >= 0) text(keypadEntry[1], width/2 - 40, height/2 + 435);
  else if(keypadEntry[1] < 0) text("__", width/2 - 40, height/2 + 435);
  if(keypadEntry[2] >= 0) text(keypadEntry[2], width/2 + 40, height/2 + 435);
  else if(keypadEntry[2] < 0) text("__", width/2 + 40, height/2 + 435);
  if(keypadEntry[3] >= 0) text(keypadEntry[3], width/2 + 120, height/2 + 435);
  else if(keypadEntry[3] < 0) text("__", width/2 + 120, height/2 + 435);
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
  fill("gray");
  rect(1850, 100, 310, 60);
  if(frameCount % 60 == 0 && batTimer >= 0) batTimer += -1;
  batMap = map(batTimer, 0, batMaxTime, 0, 300);
  rectMode(CORNER);
  fill("green");
  rect(1700, 75, batMap, 50);
  rectMode(CENTER);
  if (batFoundBool == true){
    fill("red");
    if(batOrWrong == false) text("Battery Already Found!", 1650, 300);
    else if(batOrWrong == true) {
      fill("#AF9F81");
      rect(width/2, height/2, 500, 200);
      fill("#e7e1da");
      textSize(50);
      text("Ghost Not Found!", width/2, height/2 + 10)
    }
    if(frameCount % 60 == 0 && batFoundTimer < 2) batFoundTimer++;
    if(batFoundTimer >= 2) batFoundBool = false, batFoundTimer = 0;
  }
  //buttonCreate(2, "Use Battery", 1250, 100, 225, 75, "#9e9e9e", "#636363");
  imageButtonCreate(2, "", 1600, 100, 100, 100, inGameAsset[1], inGameAsset[12])
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
  buttonCreate(1, "Move", 500, 200, 150, 100, "#325ea8", "#4832a8");
  buttonCreate(3, "End", 700, 200, 150, 100, "#325ea8", "#4832a8");
  buttonCreate(6, "Space", 900, 200, 150, 100, "#325ea8", "#4832a8");
  fill("white");
  text("Password: " + passwordArray[whatGroupState[0]][whatGroupState[1]], 200, 250);
  text(currentGhostPoints, 200, 300);
  //text((1 + (0.5 * (ghostMultiplier - 1))) +"x Multiplier", 200, 150);
  //text(miniVariable, 200, 150);
  //text(miniProcChance, 300, 150);
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

function imageButtonCreate(bSV, bT, bX, bY, bW, bH, image1, image2) {
  bState[bSV] = false;
  if(mouseX > (bX - (bW/2)) && mouseX < (bX + (bW/2)) && mouseY > (bY - (bH/2)) && mouseY < (bY + (bH/2)) && minigameState == 0){
    image(image2, bX, bY, bW, bH);
    bState[bSV] = true;
  }
  else image(image1, bX, bY, bW, bH);
  fill(255);
  textSize(40);
  text(bT, bX, bY + 10);
  textSize(30);
}

function ghostAnim(ghostXMin, ghostXMax, ghostXMid, ghostYMin, ghostYMax, ghostSize, ghostTint){
  ghostSinV += 5;
  ghostY = map(sin(ghostSinV), -1, 1, ghostYMin, ghostYMax);
  if(ghostX >= ghostXMid) ghostX = map(-cos(ghostSinV), -1, 1, ghostXMid - 0.01, ghostXMax);
  else if(ghostX < ghostXMid) ghostX = map(cos(ghostSinV), -1, 1, ghostXMin, ghostXMid + 0.01);
  ghostRotate = map(ghostX, ghostXMin, ghostXMax, -15, 15);
  push();
  translate(ghostX, ghostY);
  rotate(ghostRotate);
  tint(255, ghostTint);
  image(images[1], 0, 0, ghostSize, ghostSize);
  pop();
  //circle(ghostX, ghostY, 200);
}

function minigames(){
  switch(minigameState) {
    case 0:
      if(frameCount % 60 == 0) miniVariable++;
      if(miniVariable >= miniCooldown) {
        if(miniProcChance > int(random(0, 100))){
          minigameState = (int(random(0, minigameArray.length) + 1));
          if(minigameState == 3) for(let i = 0; i < dotsMax; i++) dots.push(new Dots());
          miniVariable = 0;
          miniProcChance = 20;
        } 
        else miniVariable = miniVariable - miniProcTimer, miniProcChance+=10;
      }
      break;
    case 1:
      break;
    case 2:
      while(setStrumBool == false){
        setStrum = whatSetStrum[Math.floor(Math.random() * whatSetStrum.length)];
        if (setStrum != strum) setStrumBool = true;
      }
      if (strum == setStrum) setStrumBool = false, minigameState = 0;
      break;
    case 3:

      break;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function radar(){
  push();
  fill("black");
  circle(width/2, height/2, 500);
  // Green part
  stroke(49, 171, 0);
  strokeWeight(10); 
  
  // Green Lines
  line(width / 2, (height / 2) - 235, width / 2, (height / 2) + 235)
  line((width / 2) - 235, height / 2, (width / 2) + 235, height / 2)
  
  // Green circles
  strokeWeight(5)
  circle(width / 2, height / 2, 400);
  circle(width / 2, height / 2, 325);
  circle(width / 2, height / 2, 250);
  circle(width / 2, height / 2, 175);
  circle(width / 2, height / 2, 100);  
  //dots
  dots.forEach(function (Dots){
    Dots.display();
  });

  //rotating line
  checker();
  // Grey part
  noFill();
  stroke(64)
  strokeWeight(25);
  circle(width / 2, height / 2, 500)
  pop();
}

function checker(){
  push();
  stroke(49, 171, 0);
  strokeWeight(7);
  let angle = millis() / 20; 
  newLine[0].update(angle, 250);
  newLine[0].display();
  pop();
}

class Dots{
  constructor(){
    this.angle = random(0, 360);
    this.radius = random(50, 200); 
    this.x = width / 2 + cos(this.angle) * this.radius;
    this.y = height / 2 + sin(this.angle) * this.radius;

  }
  display(){
    push();
    noStroke();
    fill(255, 0, 0);
    ellipse(this.x, this.y, 45, 45);
    pop();
  }
}

class Line{
  constructor(){
    
  }
  
  display(){
    line(width / 2, height / 2, this.x2, this.y2);
  }
  
  update(angle, lineLength){
    this.x2 = width / 2 + cos(angle) * lineLength;
    this.y2 = height / 2 + sin(angle) * lineLength;
  }
}
