let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  switch (state) {
    case 0:
      background("gray");
      text("in state 0", 100, 100);
      break;

    case 1:
      background("green");
      text("in state 1", 100, 100);
      for (let j = 0; j < width; j += 25) {
        for (let i = 0; i < width; i += 25) {
          rect(i, j, 20, 20);
        }
      }
      break;

    case 2:
      background("blue");
      text("in state 2", 100, 100);
      break;

    case 3:
      background("purple");
      text("in state 3", 100, 100);
      break;

    case 4:
      background("gold");
      text("in state 4", 100, 100);
      break;
  }
}

function mouseReleased() {
  state++;
  if (state > 4) {
    state = 0;
  }
}