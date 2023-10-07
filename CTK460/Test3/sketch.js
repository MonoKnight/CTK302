let i1, i2;

function setup(){
  createCanvas(2000, 1000);
  i1 = loadImage("test.png");
  i2 = loadImage("test2.png");
  imageMode(CENTER);
}

function draw(){
  background("white");
  image(i1, width/2, height/2);
  image(i2, width/2, height/2);
}