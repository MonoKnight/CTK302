let state = 0;

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  textAlign(CENTER);
}

function draw() {
  switch(state) {
    case 0:
      background("green");
      text("Why are T-Rex's unable to clap their hands?", width/2, height/2);
      break;
    case 1:
      background("gray");
      text("Because they are extinct.", width/2, height/2);
      break;
  }
}

function mouseReleased(){
  state++;
  if(state > 1) state = 0;  
}