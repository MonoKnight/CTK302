let state = -1;
let s1, s2, s3;

function preload(){
  s1 = loadSound("assets/MoonRiver.mp3");
  s2 = loadSound("assets/Sunshine.mp3");
  s3 = loadSound("assets/Today.mp3");
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(100);
  
  switch (state) {
    case -1:
      text("Please click to start.", 100, 100);
      break;
      
    case 0:
      background("blue");
      text("Bayonetta 2 - Moon River Infinite Climax Mix", 100, 100);
      if(!s1.isPlaying()){
        s1.play();
      }
      break;

    case 1:
      background("#AFEDF8");
      text("Ys 8 - Sunshine Coastline", 100, 100);
      if(!s2.isPlaying()){
        s2.play();
      }
      break;

    case 2:
      background("yellow");
      text("Persona 4 Arena Ultimax - Today", 100, 100);
      if(!s3.isPlaying()){
        s3.play();
      }
      break;

  }
}

function mouseReleased() {
  s1.stop();
  s2.stop();
  s3.stop();
  state++;
  if (state > 2) state = 0;

}

function touchStarted() {
  getAudioContext().resume();
}