let flames = [];
let i;

function setup() {
  createCanvas(500, 500);
  i = loadImage("assets/whatever.jpg");
}

function draw() {
  image(i, 0, 0, width, height);
  
  push();
  rectMode(CENTER);
  fill(40, 25, 2);
  translate(width/2, 400);
  rotate(0.25);
  rect(0, 0, 135, 20);
  rotate(2.75);
  rect(0, 0, 135, 20);
  pop();

  for(let i = 0; i < 3; i ++) {
    flames.push(new Flame());
  }
  flames.forEach(function (Flame){
    Flame.display();
    Flame.update();

    if(flames.opacity < 0) flames.splice(i, 1);
  });
}

class Flame{
  constructor(){
    this.pos = createVector(random(((width/2) - 25), ((width/2) + 25)), 400);
    this.opacity = 255
    this.vel = createVector(random(-1, 1), random(-4, -2))
    this.shrink = 15;
  }
  display(){
    noStroke();
    fill(random(200,230), random(50, 150), 10, this.opacity);
    ellipse(this.pos.x, this.pos.y, this.shrink);
  }
    update(){
    this.opacity += -4;
    this.pos.add(this.vel);
    this.shrink += random(-0.5, 0.3);
  }
}