let f1, f2;

function setup() {
  createCanvas(500, 500);

  f1 = loadFont("assets/Mario-Kart-DS.ttf");
  f2 = loadFont("assets/upheavtt.ttf");
  textAlign(CENTER);
}

function draw() {
  background("black");
  fill("white");
  textFont(f1, 48);
  text("hello world!", width/2, 100);
  textFont(f2, 48);
  text("This is line 2!", width/2, 200);
}
