let numberOfTouches;
let numberOfTouches2;
let i1, i2, i3, i4;

function setup() {
  createCanvas(400, 400);
  i1 = loadImage("assets/HumanConnection.jpg");
  i2 = loadImage("assets/Meditation.jpg");
  i3 = loadImage("assets/RedAlarm.jpg");
  i4 = loadImage("assets/waterfall.jpg");
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  numberOfTouches2 = touches.length;
  if(numberOfTouches > 3) numberOfTouches = 3;
  textSize(12);
  text(numberOfTouches2 + ' touches', 5, 10);
  
  switch(numberOfTouches) {
    case 0: 
      fill("cyan");
      text("Peace and Tranquility", 5, 22) ; 
      image(i4, 0, 50, 200, 200);
      break ;
      
    case 1: 
      fill("purple")
      textSize(13);
      text("Meditation", 5, 30) ; 
      image(i2, 0, 50, 300, 200);
      break ;
      
    case 2:
      fill("pink");
      textSize(15);
      text("Human Connection", 5, 40) ; 
      image(i1, 0, 50, 300, 300);
      break ;
      
    case 3:
      fill("red")
      textSize(20);
      text("There are now too many touches.\nplease minimize the amount.", 5, 50) ; 
      image(i3, 0, 100, 300, 300);
      break ;
    
      
  }
  
}