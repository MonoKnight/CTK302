let state = 0;
let timer = 0;
let x = 0;
let v = 0;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
}

function draw() {
  //stoplight
  background(100);
  fill("yellow");
  rect(width/2, height/2, 200, 600);
  fill("gray");
  ellipse(width/2, height/2-170, 150, 150);
  ellipse(width/2, height/2, 150, 150);
  ellipse(width/2, height/2+170, 150, 150);
  
  switch (state) {

    case 0: //green
      fill("green");
      ellipse(width/2, height/2+170, 150, 150);
      v = 10;
      break;

    case 1: //yellow
      fill("yellow");
      ellipse(width/2, height/2, 150, 150);
      v = 5;
      break;

    case 2://red
      fill("red");
      ellipse(width/2, height/2-170, 150, 150);
      v = 5;
      if (x >= width/2 && x <= width/2+v) v = 0;
      break;
  }
  
  //timer
  timer++
  if(timer > 3*60){
    state ++;
    if (state > 2) state = 0;
    timer = 0;
  }

  //car
  fill("blue");
  rect(x, height-50, 100, 50);
  x = x + v;
  if (x > width) x = -100;
  
}
