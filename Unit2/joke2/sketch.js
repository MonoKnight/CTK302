let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  textAlign(CENTER);
}

function draw() {
  switch(state) {
    case 0:
      background("blue");
      text("What is red and extremely bad for your teeth?", width/2, height/2);
      break;
    case 1:
      background("red");
      text("A Brick", width/2, height/2);
      break;
  }
  timer++;
  if(timer > 4 * 60){
    timer = 0;
    state++;
    if(state>1)state = 0;
  }


}
