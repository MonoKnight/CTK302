let state = 0;
let timer = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  switch (state) {
    case 0:
      timer++;
      background("gray");
      text("in state 0", 100, 100);
      if (timer > 10 * 60) {
        state++;
        timer = 0;
      }
      break;

    case 1:
      timer++;
      background("green");
       text("in state 1", 100, 100);
      if (timer > 5 * 60) {
        state++;
        timer = 0;
      }
      break;
      
    case 2:
      timer++;
      background("blue");
      text("in state 2", 100, 100);
      if (timer > 15 * 60) {
        state = 0;
        timer = 0;
      }
      break;
  }
}

function mouseReleased() {
  state++;
  if (state > 4) {
    state = 0;
  }
}