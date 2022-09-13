let song;

function preload() {
    song = loadSound("assets/MoonRiver.mp3");
}

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  song.play();
}

function draw() {
  background("black");
  fill("white");
  text("This a remix of the song Moon River from the game Bayonetta 2. I really like the game and this is one of the best songs from the game.", 100, 100, 400, 400);
}

function mouseReleased() {
  if (song.isPlaying()) {
     song.pause();
  }
  else {
     song.play();
  }
}

function touchStarted() {
  getAudioContext().resume();
}
