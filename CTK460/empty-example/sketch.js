var offset = 0;
var strum = 0.5;
var offsetvar = 0.1;
var setStrum = 0.5;

function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  
  background(220);
  text(offsetvar, 50, 50);
  text(strum, 100, 50);
  stroke("green");
  noFill();
  beginShape();
  for(var x = 100; x < width - 100; x++){
    //var angle = map(x, 0, width, 0, TWO_PI);
    var angle = offset + x * 0.01;
    // map x between 0 and width to 0 and Two Pi
    var y = map(sin(angle), -strum, strum, 150, 250);
    vertex(x, y);
  }
  endShape();
  stroke("black");
  beginShape();
  for(var x = 100; x < width - 100; x++){
    //var angle = map(x, 0, width, 0, TWO_PI);
    var angle = offset  + x * 0.01;
    // map x between 0 and width to 0 and Two Pi
    var y = map(sin(angle), -setStrum, setStrum, 150, 250);
    vertex(x, y);
  }
  endShape();
  offset += offsetvar;
}


function keyReleased() {
  if (keyCode === UP_ARROW) strum += -0.1;
   else if (keyCode === DOWN_ARROW) strum += 0.1;
}
