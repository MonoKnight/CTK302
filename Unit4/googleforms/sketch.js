var bubbles = [];
let url = "";
let bg = [];
let i;
let i2;
let timer;
let istate = 0;
let f;
let m;

function preload() {
  m = loadSound("athletic.mp3");
}
function setup() {
  let key = "12ESnumrST_oipoVZf99B0GyArXKtYTn1XBSTOnqseSc"; // this is KEY of the URL from the sheet

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  for(let i = 0; i < 3; i++) bg[i] = random(0, 255);
  i = loadImage("GoombudRight.png");
  i2 = loadImage("GoombudLeft.png");
  imageMode(CENTER);
  timer = 0;
  f = loadFont("mario.ttf");
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["What is your favorite music genre?"],
        data[i]["What is your LEAST favorite genre?"],
        data[i]["How many hours do you listen to music a week?"],
        data[i]["What volume do you listen to music at?"])); // THESE NEED TO MATCH SPREADSHEET
    
    
  }
}

function draw() {
  for(let i = 0; i < 3; i++) bg[i] += random(-1, 1);
  background(bg[0], bg[1], bg[2]);
  bgi();
  if(!m.isPlaying()) m.play();
  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].update();
  }
}

// my Bubble class
class Bubble {
  constructor(fav, least, time, volume) {
    // only the order of these parameters matters!
    this.fav = fav;
    this.least = least;
    this.time = time;
    this.volume = volume;
    this.pos = createVector(random(50, width-50), random(50, height - 50));
    this.vel = createVector(random(-2, 2), random(-2, 2));
  }

  display() {
    if(this.vel.x > 0) image(i2, this.pos.x, this.pos.y, 120, 120);
    if(this.vel.x <= 0) image(i, this.pos.x, this.pos.y, 120, 120);
    stroke("black");
    strokeWeight(1);
    textFont(f);
    fill("white");
    text(
      this.fav + "\n" + this.least + "\n" + this.time + "\n" + this.volume,
      this.pos.x,
      this.pos.y - 10
    );  
  }
  
  update(){
    this.pos.add(this.vel)
    if(this.pos.x > width + 50) this.pos.x = -50;
    if(this.pos.x < -50) this.pos.x = width + 50;
    if(this.pos.y > height + 50) this.pos.y = -50;
    if(this.pos.y < -50) this.pos.y = height + 50;
  }
}

function bgi(){
  timer++;
  if(timer > 0.5 * 60) {
    istate++;
    if(istate >= 2) istate = 0;
    timer = 0;
  } 
  push();
  tint(255, 50);
  if(istate == 0)image(i, width/2, height/2, width + 100, height + 100);
  else if(istate == 1) image(i2, width/2, height/2, width + 100, height + 100);
  pop();
}