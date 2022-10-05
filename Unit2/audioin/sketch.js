var mic;
var vol = 0;
var gif_loadImg, gif_createImg;

function setup() {
  createCanvas(400, 400);

  // code for initializing mic in
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
  //gif_createImg = createImg("assets/DancingSkeleton.gif");
}

function draw() {
  background("cyan");

  // get the sound input
  vol = mic.getLevel(); // returned level is between 0 and 1.

  // text on the screen for debugging
  fill("white");
  textSize((vol * 50) + 10);
  text("My volume is " + vol.toFixed(3), 10, 150);
  textSize(18);
  text("Click the screen first to give\npermission for mic input.", 10, 60);

  // this moves the box
  //  x = vol*200 ;
  fill("green");
  x = map(vol, 0, 1, 0, width);
  if(x > 75 && x < 150){
    fill("yellow");
    text("You are getting a bit loud.", 10, 350)
  }
  else if(x >= 200){
    fill("red");
    text("You are too loud, quiet down now!", 10, 350);
  }
  rect(x, 200, 50, 50);
  //gif_createImg.position(x, 200, 50, 50);
}

// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}