let click = 0;
var x = 0;
var weapon;

function setup() {
  createCanvas(1000, 800);
  ellipseMode(CENTER);
  rectMode(CENTER);
  noStroke();
}

function mouseClicked() {
  background(100);
  fill(0);
  weapon = int(random(1, 4));
  
  if (click == 2){
    click = 0;
  }
  else {
    click = click + 1;
  }
}

function draw (){
  noStroke();
  if (click == 0){
    x+= 0.02;
    background("#010e1c");
    fill("#888a8c");
    circle(150, 175, 250);
    stroke(0);
    strokeWeight(3);
    fill("#030817");
    rect(500, 650, 1000, 300);
    fill("#1E140A");
    quad(350, 500, 650, 500, 900, 800, 100, 800);
    fill("#1D1D1D");
    stroke("#121212");
    strokeWeight(5);
    rect(500, 370, 800, 300);
    rect(150, 340, 200, 400);
    rect(850, 340, 200, 400);
    triangle(500, 50, 650, 220, 350, 220);
    fill("#160E06");
    rect(500, 382, 275, 275);
    noStroke();
    stroke("#24403f")
    strokeWeight(10);
    fill("#3e7280");
    push();
    translate(365, 300)
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    translate(635, 300);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    translate(425, 625);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    translate(575, 625);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    stroke("#368BC1");
    strokeWeight(15);
    fill("#52b4f2");
    rect(500, 425, 225, 375);
    rect(500, 200, 125, 125);
    rect(525, 180, 20, 3);
    rect(475, 180, 20, 3);
    rect(500, 220, 15, 1);
    stroke("#333232");
    strokeWeight(5);
    fill("#4d4d4d");
    rect(500, 375, 100, 80);
    triangle(548, 417, 452, 417, 500, 465);
    triangle(545, 333, 455, 333, 500, 315)
    pop();
    push();
    translate(320, 320);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    translate(680, 320);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    translate(290, 360);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    translate(710, 360);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    translate(280, 400);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    translate(720, 400);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    translate(410, 680);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    translate(590, 680);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    stroke("#368BC1");
    strokeWeight(25);
    fill("#52b4f2");
    rect(620, 750, 100, 75);
    rect(380, 750, 100, 75);
    pop();
    push();
    stroke("#001442");
    strokeWeight(25);
    fill("#2225a1");
    rect(750, 450, 150, 150);
    rect(250, 450, 150, 150);
    pop();
    push();
    noStroke();
    fill("#010d1a");
    translate(750, 450);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    noStroke();
    fill("#010d1a");
    translate(250, 450);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    fill(255);
    stroke(0);
    strokeWeight(2);
    rect(790, 85, 400, 150);
    noStroke();
    fill(0);
    textSize(25);
    text("This is the elemental golem, Dogi.\nThey are the guardian of Castle \nEternia. At night, they lay calm in\nan icy, defensive state.", 600, 45);
  }
  else if (click == 1){
    x+= 0.06;
    background("#FC8F8F");
    fill("#d6a40d");
    circle(850, 175, 350);
    stroke(0);
    strokeWeight(3);
    fill("#360101");
    rect(500, 650, 1000, 300);
    fill("#462A0D");
    quad(350, 500, 650, 500, 900, 800, 100, 800);
    fill("#1D1D1D");
    stroke("#121212");
    strokeWeight(5);
    rect(500, 370, 800, 300);
    rect(150, 340, 200, 400);
    rect(850, 340, 200, 400);
    triangle(500, 50, 650, 220, 350, 220);
    fill("#1E140A");
    rect(500, 382, 275, 275);
    noStroke();
    stroke("#591917")
    strokeWeight(10);
    fill("#801714");
    push();
    translate(450, 275)
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    translate(550, 275);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    translate(465, 625);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    translate(535, 625);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    stroke("#852814");
    strokeWeight(15);
    fill("#ff342e");
    rect(500, 405, 80, 420);
    rect(500, 120, 125, 125);
    rect(525, 100, 3, 20);
    rect(475, 100, 3, 20);
    rect(500, 140, 15, 1);
    quad(455, 80, 485, 90, 485, 95, 455, 85);
    quad(545, 80, 515, 90, 515, 95, 545, 85);
    stroke("#333232");
    strokeWeight(5);
    fill("#4d4d4d");
    rect(500, 325, 18, 115);
    rect(500, 400, 10, 50);
    triangle(510, 265, 490, 265, 500, 225);
    triangle(525, 380, 475, 380, 500, 395);
    circle(500, 425, 20);
    pop();
    push();
    translate(415, 320);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    translate(585, 320);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    translate(370, 350);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    translate(630, 350);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    translate(320, 375);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    translate(680, 375);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    translate(270, 380);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    translate(730, 380);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    translate(445, 680);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    translate(555, 680);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    stroke("#852814");
    strokeWeight(15);
    fill("#ff342e");
    rect(560, 750, 65, 100);
    rect(440, 750, 65, 100);
    pop();
    push();
    if(weapon == 1){
      stroke(0);
      strokeWeight(3);
      fill("#1D110E");
      rect(775, 390, 30, 150);
      rect(225, 390, 30, 150);
      circle(225, 475, 55);
      circle(775, 475, 55);
      rect(225, 320, 120, 20);
      rect(775, 320, 120, 20);
      stroke("#690000");
      strokeWeight(10);
      fill("#a32424");
      rect(225, 200, 40, 220);
      rect(775, 200, 40, 220);
      triangle(207, 80, 243, 80, 225, 30);
      triangle(793, 80, 757, 80, 775, 30);
      stroke("#852814");
      strokeWeight(15);
      fill("#ff342e");
      rect(225, 390, 50, 80);
      rect(775, 390, 50, 80);
      pop();
      push();
    }
    else if(weapon == 2){
      stroke(0);
      strokeWeight(3);
      fill("#525252");
      rect(775, 390, 15, 550);
      rect(225, 390, 15, 550);
      triangle(200, 160, 250, 160, 225, 190);
      triangle(800, 160, 750, 160, 775, 190);
      stroke("#690000");
      strokeWeight(10);
      fill("#a32424");
      triangle(210, 160, 240, 160, 225, 60);
      triangle(790, 160, 760, 160, 775, 60);
      stroke("#852814");
      strokeWeight(15);
      fill("#ff342e");
      rect(225, 390, 50, 80);
      rect(775, 390, 50, 80);
      pop();
      push();
    }
    else if(weapon == 3){
      stroke(0);
      strokeWeight(3);
      fill("#301507");
      rect(775, 380, 30, 250);
      rect(225, 380, 30, 250);
      stroke("#690000");
      strokeWeight(10);
      fill("#a32424");
      rect(225, 260, 50, 40);
      rect(775, 260, 50, 40);
      quad(100, 230, 200, 240, 200, 280, 100, 320);
      quad(900, 230, 800, 240, 800, 280, 900, 320);
      stroke("#852814");
      strokeWeight(15);
      fill("#ff342e");
      rect(225, 390, 50, 80);
      rect(775, 390, 50, 80);
      pop();
      push();
    }
    fill(255);
    stroke(0);
    strokeWeight(2);
    rect(210, 85, 400, 150);
    noStroke();
    fill(0);
    textSize(25);
    text("However, during the day they are\nmuch more aggresive. They are\nengulfed in fire and have their\nweapon drawn, ready to attack.", 20, 45);
  }
  else if(click == 2) {
    x+= 0.04;
    background("#1B0A27");
    fill("#d6a40d");
    circle(500, 100, 350);
    fill("#000000");
    circle(500, 100, 340);
    stroke(0);
    strokeWeight(3);
    fill("#0F0614");
    rect(500, 650, 1000, 300);
    fill("#0D0804");
    quad(350, 500, 650, 500, 900, 800, 100, 800);
    fill("#0D0D0D");
    stroke("#090909");
    strokeWeight(5);
    rect(500, 370, 800, 300);
    rect(150, 340, 200, 400);
    rect(850, 340, 200, 400);
    triangle(500, 50, 650, 220, 350, 220);
    fill("#0D0904");
    rect(500, 382, 275, 275);
    noStroke();
    stroke("#330C4F");
    strokeWeight(10);
    fill("#3B1055");
    push();
    translate(385, 300)
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    translate(410, 680);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    translate(600, 275);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    translate(425, 625);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    translate(575, 625);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    translate(590, 680);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    stroke("#530A86");
    strokeWeight(15);
    fill("#673AB7");
    rect(500, 425, 175, 430);
    rect(500, 150, 125, 125);
    rect(525, 130, 3, 20);
    rect(475, 130, 20, 3);
    rect(500, 170, 15, 1);
    quad(545, 110, 515, 120, 515, 125, 545, 115);
    stroke("#333232");
    strokeWeight(5);
    fill("#4d4d4d");
    rect(500, 375, 100, 80);
    triangle(548, 417, 452, 417, 500, 465);
    triangle(545, 333, 455, 333, 500, 315)
    rect(500, 375, 18, 115);
    rect(500, 450, 10, 50);
    triangle(510, 315, 490, 315, 500, 275);
    triangle(525, 430, 475, 430, 500, 445);
    circle(500, 475, 20);
    pop();
    push();
    translate(340, 320);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    translate(290, 360);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    translate(280, 400);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    translate(635, 320);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    translate(680, 350);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    translate(730, 375);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    translate(780, 380);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    stroke("#530A86");
    strokeWeight(15);
    fill("#673AB7");
    rect(600, 750, 100, 100);
    rect(400, 750, 100, 100);
    pop();
    push();
    stroke("#190235");
    strokeWeight(25);
    fill("#380660");
    rect(250, 450, 150, 150);
    pop();
    push();
    noStroke();
    fill("#010d1a");
    translate(250, 450);
    rotate(x);
	rect(0, 0, 100, 25);
    rect(0, 0, 25, 100);
    pop();
    push();
    stroke(0);
    strokeWeight(3);
    fill("#1D110E");
    rect(775, 390, 30, 150);
    circle(775, 475, 55);
    rect(775, 320, 120, 20);
    stroke("#190235");
    strokeWeight(10);
    fill("#380660");
    rect(775, 200, 40, 220);
    triangle(793, 80, 757, 80, 775, 30);
    stroke("#530A86");
    strokeWeight(15);
    fill("#673AB7");
    rect(775, 390, 50, 80);
    pop();
    push();
    fill(255);
    stroke(0);
    strokeWeight(2);
    rect(210, 85, 400, 150);
    noStroke();
    fill(0);
    textSize(25);
    text("As well, very rarely, an eclipse will\nhappen which will cause both\nhalves to fuse and turn into a\ngolem of both defense and offense. ", 20, 45);
  }
}