let fall = [];
var fallt = 0;
var fallv = 0;

function preload(){
  for(let i = 0; i < 8; i++) fall[i] = loadImage("assets/fall (" + (i+1) +").gif");
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("white");
  fallt++
  if(fallt > 0.1*60){
    fallv++;
    if(fallv > 7) fallv = 0;
    fallt = 0;
  }
  image(fall[fallv], width/2, height/2, 50, 50);
}
