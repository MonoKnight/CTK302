let i1, i2, i3, i4, i5, f1, f2, s = [];
let state = 0;
let peak, trough, speed, offsetVar, strum, offset;
let cloudX, cloudY, cloudMultiplier, cloudsize = [], cloudtranslate = [];
let cord = [0, 1, 2, 3], timer, ST;
let raindrop = [];
var mic, vol;
let boatx = -400;
let flames = [];
let SX = [], SY = [], SO = [], opacity, SV;
function setup() {
  createCanvas(1000, 1000);
  strum = 1;
  offset = 1;
  timer = 0;
  ST = 0;
  cloudX = 0; 
  cloudY = 0; 
  cloudMultiplier = 1;
  for (let i = 0; i < 6; i++) {
    cloudtranslate[i] = random(-400, 1100);
  }
  for (let i = 0; i < 3; i++ ) {
    cloudsize[i + 3] = random(100, 150);
    cloudsize[i] = random(200, 250);
  }
  raindrop = Array.from({ length: 200 }, () => new rainDropfunction());
  vol = 0;
  for(let i = 0; i < 100; i++) {
    SX[i] = random(0, width);
    SY[i] = random(200, 1000)
    SO[i] = random(0, 100);
    SV = 0;
  }
  i1 = loadImage("assets/boat.png");
  i2 = loadImage("assets/palmtree.png");
  i3 = loadImage("assets/treasurechest.png");
  i4 = loadImage("assets/hat.png");
  i5 = loadImage("assets/grave.png");
  f1 = loadFont("assets/Pirate.ttf");
  f2 = loadFont("assets/KidsBook.ttf");
  s[0] = loadSound("assets/Thunder1.mp3");
  s[1] = loadSound("assets/Thunder1.mp3");
  s[2] = loadSound("assets/Thunder1.mp3");
  imageMode(CENTER);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  switch(state){
    case 0://picture book intro
      textAlign(CENTER);
      background("#8c6334");
      stroke("black");
      strokeWeight(10);
      fill("white");
      textFont(f1, 100);
      text("The Legend of the\nNew World Pirates", width/2, 200);
      image(i1, width/2, 650, 1000, 600); 
      push();
      fill("#00C6F7");
      noStroke();
      beginShape();
      vertex(0, height);
      for(var x = 0; x < width; x++){
        var y = map(sin(x * 0.02), -strum, strum, 800, 850);
        vertex(x, y);
      }
      vertex(width, height);
      endShape();
      pop();
      break;
    case 1://calm ocean
      background("#B2FFFE");
      //background wave settings
      fill("#00C6F7");
      wave(0, 700, 800, -0.01);
      //cloud settings
      push();
      for (let i = 0; i < 6; i++) {
        cloudtranslate[i] += -2;
        if (cloudtranslate[i] < -600) cloudtranslate[i] = 1200;
      }
      fill("white");
      cloud(cloudX + cloudtranslate[0], cloudY + 500, cloudMultiplier * 1.25);
      cloud(cloudX + cloudtranslate[1], cloudY + 350, cloudMultiplier * 0.75);
      cloud(cloudX + cloudtranslate[2], cloudY + 250, cloudMultiplier);
      cloud(cloudX + cloudtranslate[3], cloudY + 450, cloudMultiplier * 1.25);
      cloud(cloudX + cloudtranslate[4], cloudY + 200, cloudMultiplier * 0.75);
      cloud(cloudX + cloudtranslate[5], cloudY + 400, cloudMultiplier);
      pop();
      //boat settings
      push();
      translate(width / 2, 725);
      translate(p5.Vector.fromAngle(millis() / 750, 40));
      image(i1, 0, 0, 600, 400); 
      pop();
      //foreground waves
      fill("#02b4e0");
      wave(7, 775, 900, 0.023);
      fill("#0095ba");
      wave(11, 875, 950, -0.039);
      //banner at top
      booksetting();
      text("Throughout all of the seven seas, no name is more infamous than that of the New World Pirates. No one before them had dared set sail into the unknown, but this group of trailblazers held no fear for what lay ahead!", 40, 50, width-60, 200);
      break;
    case 2: //rough storms
      //background settings
      background("#10141c");
      //lightning settings
      timer++;
      if(timer > random(3, 5) * 60){
        lightning();
        ST++
        if(ST > 4){
          s[int(random(0, 3))].play();
          ST = 0;
        }
        timer = 0;
      }
      //background wave settings
      fill("#141b38");
      wave(0, 600, 700, 0.16);
      //boat settings 
      push();
      translate(width / 2, 650);
      translate(p5.Vector.fromAngle(millis() / 300, 60));
      image(i1, 0, 0, 600, 400); 
      pop();
      //middle wave settings
      fill("#070E2C");
      wave(8, 650, 800, -0.23);
      //rain settings
      raindrop.forEach(function (rainDropfunction){
        rainDropfunction.display();
        rainDropfunction.move();
      });
      //foreground wave settings
      fill("#070009");
      wave(13, 750, 900, 0.3);
      //cloud settings
      push();
      for (let i = 0; i < 6; i++) {
        cloudtranslate[i] += -4;
        if (cloudtranslate[i] < -1200) cloudtranslate[i] = 1200;
      }
      fill("#494e57");
      cloud(cloudX + 150 + cloudtranslate[0], cloudY + 100, cloudMultiplier * 1.75);
      cloud(cloudX + 300 + cloudtranslate[1], cloudY + 100, cloudMultiplier * 1.5);
      cloud(cloudX + 450 + cloudtranslate[2], cloudY + 100, cloudMultiplier * 1.75);
      cloud(cloudX + 600 + cloudtranslate[3], cloudY + 100, cloudMultiplier * 1.5);
      cloud(cloudX + 750 + cloudtranslate[4], cloudY + 100, cloudMultiplier * 1.75);
      cloud(cloudX + 900 + cloudtranslate[5], cloudY + 100, cloudMultiplier * 1.5);
      pop();
      //banner at top
      booksetting();
      text("Even through the worst of it all, they didn't flinch. They perservered through the roughest waves, the hardest rain, the loudest thunder, and the darkies skies. Nothing could stop this unyielding crew!", 40, 50, width-60, 200);
      break;

    case 3: //land ho
      background("#B2FFFE");
      vol = mic.getLevel();
      //background wave settings
      fill("#00C6F7");
      wave(0, 725, 775, -0.01);
      //cloud settings
      push();
      for (let i = 0; i < 6; i++) {
        cloudtranslate[i] += -0.5;
        if (cloudtranslate[i] < -200) cloudtranslate[i] = 1200;
      }
      fill("white");
      cloud(cloudX + 100 + cloudtranslate[0], cloudY + 500, cloudMultiplier * 0.5);
      cloud(cloudX + 250 + cloudtranslate[1], cloudY + 350, cloudMultiplier * 0.75);
      cloud(cloudX + 400 + cloudtranslate[2], cloudY + 250, cloudMultiplier * 0.4);
      cloud(cloudX + 550 + cloudtranslate[3], cloudY + 450, cloudMultiplier * 0.6);
      cloud(cloudX + 700 + cloudtranslate[4], cloudY + 200, cloudMultiplier * 0.7);
      cloud(cloudX + 850 + cloudtranslate[5], cloudY + 400, cloudMultiplier * 0.5);
      pop();
      //island settings
      fill("#FFE29C");
      image(i2, 800, 600, 500, 400); 
      ellipse(width, height, 1300, 600);
      image(i3, 700, 750, 200, 150); 
      //foreground waves
      fill("#02b4e0");
      wave(7, 800, 850, 0.016);
      fill("#0095ba");
      wave(11, 900, 950, -0.024);
      //banner at top
      booksetting();
      text("But why risk it all? For some, it was a desire to explore the world. For others, it was the riches and treasures they found. It was sometimes even so simple as the joy of yelling \"LAND HO!\"", 40, 50, width-60, 200);
      fill("red");
      text("Yell Now!", 700, 150);
      if(vol > 0.15) state++;
      break;
    case 4://island 2
      background("#B2FFFE");
      //background wave settings
      fill("#00C6F7");
      wave(0, 725, 775, -0.01);
      //cloud settings
      push();
      for (let i = 0; i < 6; i++) {
        cloudtranslate[i] += -0.5;
        if (cloudtranslate[i] < -200) cloudtranslate[i] = 1200;
      }
      fill("white");
      cloud(cloudX + 100 + cloudtranslate[0], cloudY + 500, cloudMultiplier * 0.5);
      cloud(cloudX + 250 + cloudtranslate[1], cloudY + 350, cloudMultiplier * 0.75);
      cloud(cloudX + 400 + cloudtranslate[2], cloudY + 250, cloudMultiplier * 0.4);
      cloud(cloudX + 550 + cloudtranslate[3], cloudY + 450, cloudMultiplier * 0.6);
      cloud(cloudX + 700 + cloudtranslate[4], cloudY + 200, cloudMultiplier * 0.7);
      cloud(cloudX + 850 + cloudtranslate[5], cloudY + 400, cloudMultiplier * 0.5);
      pop();
      //island settings
      fill("#FFE29C");
      image(i2, 800, 600, 500, 400); 
      ellipse(width, height, 1300, 600);
      image(i3, 700, 750, 200, 150); 
      //boat settings
      boatx += 2;
      let angle = boatx * 0.025;
      let ymovement = map(sin(angle), -1, 1, 650, 700);
      if(boatx <= width/2 - 150)image(i1, boatx, ymovement, 600, 400); 
      else if(boatx >= width/2 - 150)image(i1, width/2 - 150, ymovement, 600, 400); 
      //foreground waves
      fill("#02b4e0");
      wave(7, 800, 850, 0.016);
      fill("#0095ba");
      wave(11, 900, 950, -0.024);
      //banner at top
      booksetting();
      text("But why risk it all? For some, it was a desire to explore the world. For others, it was the riches and treasures they found. It was sometimes even so simple as the joy of yelling \"LAND HO!\"", 40, 50, width-60, 200);
      break;
    case 5://fire
      SV += 0.1;
      background("#0d0d0d");
      //star settings
      for(let i = 0; i < 100; i++) {
        noStroke();
        opacity = map(sin(SV + SO[i]), -1, 1, 0, 255);
        fill(253, 255, 125, opacity);
        ellipse(SX[i], SY[i], 2 );
      }
      //island settings
      fill("#1a160e");
      noStroke();
      //image(i5, width/2, 650, 100, 125);
      ellipse(width/2, height, 1300, 600);
      push();
      rectMode(CENTER);
      fill(40, 25, 2);
      translate(width/2, 740);
      rotate(0.25);
      rect(0, 0, 135, 20);
      rotate(2.75);
      rect(0, 0, 135, 20);
      pop();
      //foreground wave settings
      fill("#141b38");
      wave(0, 775, 850, 0.03);
      fill("#070E2C");
      wave(8, 800, 875, -0.037);
      fill("#070009");
      wave(13, 850, 900, 0.05);
      //fire settings 
      for(let i = 0; i < 3; i ++) {
        flames.push(new Flame());
      }
      flames.forEach(function (Flame){
        Flame.display();
        Flame.update();
      });
      //banner at top
      booksetting();
      text("But most often, people join because they have lost everything. When no one else will, the crew will accept them. It doesn't matter who you are or what you've done, everyone is welcome abord the New World Pirates.", 40, 50, width-60, 200);
      break;
    case 6://end of picture book
      textAlign(CENTER);
      background("#8c6334");
      stroke("black");
      strokeWeight(10);
      fill("white");
      textFont(f1, 200);
      text("The\nEnd", width/2, 200);
      push();
      translate(width/2, 700);
      rotate(0.25);
      image(i4, 0, 0, 800, 600); 
      pop();
      break;
  }

  //Screen Outline
  stroke("#614423");
  noFill();
  strokeWeight(50);
  rect(0, 0, width, height);
}

//function to create waves;
function wave(OffsetVar, peak, trough, speed) {
  noStroke();
  beginShape();
  vertex(0, height);
  for(var x = 0; x < width; x++){
    var angle = (offset + OffsetVar) * speed + x * 0.01;
    var y = map(sin(angle), -strum, strum, peak, trough);
    vertex(x, y);
  }
  vertex(width, height);
  endShape();
  offset += 0.2;
}

//function to create a cloud
function cloud(cloudX, cloudY, cloudMultiplier){
  noStroke();
  ellipse(cloudX, cloudY, cloudsize[0] * cloudMultiplier, cloudsize[3] * cloudMultiplier);
  ellipse(cloudX-(70  * cloudMultiplier) , cloudY+(70 * cloudMultiplier), cloudsize[1] * cloudMultiplier, cloudsize[4] * cloudMultiplier);
  ellipse(cloudX+(70 * cloudMultiplier), cloudY+(50 * cloudMultiplier), cloudsize[2] * cloudMultiplier, cloudsize[5] * cloudMultiplier);
}

//function for the outline settings
function booksetting(){
  fill("#F7E9CF");
  stroke("#614423");
  strokeWeight(25);
  rect(0, 0, width, 200);
  textAlign(LEFT);
  noStroke();
  fill("black");
  textFont(f2, 30);
}

function lightning(){
  for(cord[3] = 200; cord[3] < height;){
    stroke(255, 255, random(0, 255));
    cord[0] = cord[2];
    cord[1] = cord[3];
    cord[2] = cord[0] + int(random(-20, 20));
    cord[3] = cord[1] + int(random(-10, 20));
    strokeWeight(random(5, 10));
    strokeJoin(MITER);
    line(cord[0], cord[1], cord[2], cord[3]);  
    
    
    if(cord[2] < 0 || cord[2] > width || cord[3] < 0 || cord[3] > height) {
      cord[2] = int(random(0, width));
      cord[3] = 200;
      stroke(255, 255, random(0, 255));
      background("#47587d");
    }
  }
}

class rainDropfunction{
  constructor(){
    this.pos = createVector(random(0, width), random(0, -height));
  }
  
  display = function() {
    noStroke();
    fill("#C4D3DF");
    ellipse(this.pos.x, this.pos.y, random(10, 20), random(3, 5));   
  }
  move = function() {
    this.speed = random(5, 10);
    this.gravity = 1.05;
    this.pos.x = this.pos.x - (this.speed*this.gravity)/0.25;
    this.pos.y = this.pos.y + (this.speed*this.gravity);  
    
    if (this.pos.y > height) {
      this.pos.y = random(0, -height);
      this.gravity = 0;
    }
    if (this.pos.x < 0) {
      this.pos.x = random(0, width) + width/2;
      this.gravity = 0;
    }
  }
}

class Flame{
  constructor(){
    this.pos = createVector(random(((width/2) - 25), ((width/2) + 25)), 740);
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

function mouseReleased() {
  if (state != 3){
    state++

    if (state > 6) {
      state = 0;
    }
    for (let i = 0; i < 3; i++ ) {
      cloudsize[i + 3] = random(100, 150);
      cloudsize[i] = random(200, 250);
    }
  }
  else if (state = 3){
    state +=2;
  }
}
