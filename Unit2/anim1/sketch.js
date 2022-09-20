let x = 0;
let y = 100;
let updown = true;
let f1;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/Mario-Kart-DS.ttf")
}

function draw() {
  background(100);
  textSize(128);
  textFont(f1, 50);
  text("UNIT 2 RULES!", x, y);
  x = x + 5;
  
  //if (y == 400) { 
  //  updown = false;
  //} else if (y == 100) {
  //  updown = true;
  //}

  //if( updown == true){
  //  y = y + 5;
  //} else if(updown == false){
  //  y = y - 5;
  //}
  

  if (x > width) {
    x = -400;
  }


}
