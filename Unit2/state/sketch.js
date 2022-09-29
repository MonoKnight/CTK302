let state = 0;
let k = 0;
let cube = 0;
let x = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  textAlign(CENTER);
}

function draw() {
  background(220);

  switch (state) {
    case 0:
      background("gray");
      for (let j = 0; j < width; j += 25) {
        for (let i = 0; i < width; i += 35) {
          fill("red");
          circle(j + 25, i + 15, 50);
          fill("orange");
          circle(j + 25, i + 20, 50);
          fill("yellow");
          circle(j + 25, i + 25, 50);
          fill("green");
          circle(j + 25, i + 30, 50);
          fill("blue");
          circle(j + 25, i + 35, 50);
          fill("indigo");
          circle(j + 25, i + 40, 50);
          fill("violet");
          circle(j + 25, i + 45, 50);
        }
      }
      break;

    case 1:
      background("green");
      for (let j = 0; j < width; j += 25) {
        for (let i = 0; i < width; i += 25) {
          push();
          noStroke();
          fill(i, j, k);
          rect(i, j, 25, 25);
          fill(j, k, i);
          quad(i + 12.5, j, i + 25, j + 12.5, i + 12.5, j + 25, i, j + 12.5);
          pop();
        }
      }
      break;

    case 2:
      background("purple");
      for (let j = 0; j < width; j += 25) {
        for (let i = 0; i < width; i += 25) {
          push();
          fill("blue");
          rect(i, j, i / 20, j / 20);
          pop();
        }
      }
      break;

    case 3:
      background("black");
      for (let j = 0; j < width; j += 25) {
        for (let i = 0; i < width; i += 25) {
          push();
          fill("#C4D3DF");
          circle(i + random(-25, 25), j + (random(-25,25)) , random(1,10));
          pop();
        }
      }
      break;

    case 4:
      for (let j = 0; j < width; j += 50) {
        for (let i = 0; i < width; i += 10) {
          fill("black");
          circle(i, j, 20);
        }
      }
      break;
  }
}

function mouseReleased() {
  state++;
  if (state > 4) {
    state = 0;
  }
  
  k = random(0,255);
}
