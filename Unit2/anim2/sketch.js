let x = 0; 

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  noStroke();
}
function draw() {
  background ("#ff9e1f");
  push();
  translate(x, 0);
  avatar();
  x += 5;
  if (x > width){
    x = -300;
  }
  pop();
}

function avatar() {
  fill("#BA9276");
    rect(205, 190, 150, 170);
    rect(120, 185, 30, 120);
    rect(280, 185, 30, 120);
    rect(300, 190, 30, 50);
    
    push()
    fill(230);
    translate(165,222);
    rotate(-15);
    ellipse(0, 0, 80, 50)
    pop()
    
    push()
    fill(230);
    translate(240,222);
    rotate(15);
    ellipse(0, 0, 80, 50)
    pop()
    
    
    // Eyes
    // Left Eye
    push()
    fill(0);
    translate(160,160);
    rotate(15);
    ellipse(0, 0, 55, 40)
    pop()
    
    push()
    fill("#593E36");
    translate(160,160);
    rotate(15);
    ellipse(0, 0, 40, 40)
    pop()

    push()
    fill(0);
    translate(160,160);
    rotate(15);
    ellipse(0, 0, 30, 30)
    pop()
    
    push()
    fill(255);
    translate(162,154);
    rotate(15);
    ellipse(0, 0, 10, 5)
    pop()
    
    // Right Eye
    push()
    fill(0);
    translate(245,160);
    rotate(345);
    ellipse(0, 0, 55, 40)
    pop()
    
    push()
    fill("#593E36");
    translate(245,160);
    rotate(345);
    ellipse(0, 0, 40, 40)
    pop()
    
    push()
    fill(0);
    translate(245,160);
    rotate(345);
    ellipse(0, 0, 30, 30)
    pop()
    
    push()
    fill(255);
    translate(245,154);
    rotate(345);
    ellipse(0, 0, 10, 5)
    pop()
    
    fill(255);
    triangle(182, 230, 200, 230, 193, 240);
    
    triangle(207, 230, 220, 230, 213, 240);
    
    fill(0);
    rect(203, 222, 5, 20);
    rect(203, 230, 30, 5);
    
    push()
    fill(0);
    translate(221,232);
    rotate(30);
    rect(0, 0, 10, 5);
    pop()
    
    push()
    fill(0);
    translate(185,232);
    rotate(330);
    rect(0, 0, 10, 5);
    pop()
    
    
    fill("#502114")
    triangle(175, 193, 234, 193, 203, 222);
    
    
    // Top Head
    fill("#00F100");
    rect(159, 80, 48, 30);
    rect(240, 85, 60, 30);
    rect(205, 102, 18, 15);
    
    fill("#00B300");
    rect(156, 102, 15, 15);
    rect(173, 87, 17, 15);
    rect(188, 100, 16, 38);
    rect(205, 82, 18, 26);
    rect(238, 102, 21, 15);
    
    fill("#0D720D");
    rect(142, 107, 15, 35);
    rect(156, 117, 15, 15);
    rect(128, 72, 15, 35);
    rect(158, 62, 50, 15);
    rect(172, 102, 18, 15);
    rect(189, 76, 15, 15);
    rect(195, 117, 35, 15);
    rect(220, 76, 15, 15);
    rect(205, 62, 15, 15);
    rect(269, 73, 15, 35);
    rect(250, 62, 50, 15);
    rect(220, 102, 15, 15);
    rect(245, 117, 35, 15);
    rect(255, 100, 15, 35);
    
    // Right Shoe
    fill("#00F100");
    rect(252, 262, 40, 70);
    
    fill("#00B200");
    rect(289, 248, 35, 40);
    rect(266, 274, 15, 15);
    
    fill(255);
    rect(240, 250, 15, 15);
    
    fill("#0D720D");
    rect(313, 241, 15, 26);
    rect(280, 221, 50, 15);
    rect(244, 235, 26, 16);
    rect(224, 262, 16, 40);
    
    // Left Shoe
    rect(113, 244, 17, 20);
    fill("#00F600");
    rect(126, 260, 15, 20);
    fill("#007300");
    rect(150, 275, 40, 15);
    fill("white");
    rect(112, 262, 15, 15);
    
    // Outline
    fill("black");
    rect(100, 190, 15, 50);
    rect(113, 145, 15, 40);
    rect(128, 115, 15, 20);
    rect(113, 225, 15, 20);
    rect(126, 244, 15, 20);
    rect(150, 261, 35, 15);
    rect(192, 275, 50, 15);
    rect(100, 262, 15, 15);   
    rect(119, 275, 25, 15);
    rect(160, 289, 60, 15);
    rect(245, 289, 60, 15);
    rect(290, 275, 36, 15);
    rect(313, 261, 15, 15);
    rect(313, 190, 15, 50);
    rect(298, 145, 15, 40);
    rect(283, 115, 15, 20);
    rect(269, 98, 15, 15);
}