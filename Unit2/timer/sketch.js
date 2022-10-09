let state = 0;
let timer = 0;
let i1, i2, i3;

function setup() {
  createCanvas(600, 600);
  i1 = loadImage("assets/Sky.jpg");
  i2 = loadImage("assets/Beef.jpg");
  i3 = loadImage("assets/Bunny.jpg");
  imageMode(CENTER);
  textAlign(CENTER);
}

function draw() {
  background(220);

  switch (state) {
    case 0:
      timer++;
      background("#97EBF4");
      push();
      fill("#D0E6F3");
      stroke("black");
      textSize(20);;
      text("This is a short story about how I enjoyed Parent's Weekend.\nI started the day with a walk around campus. I took a picture of the\nsky because I really liked the pattern the clouds made. It was very\nnice outside so I was able to enjoy my walk.", width/2, 50);
      image(i1, width/2, 350, 400, 400); 
      if (timer > 12 * 60) {
        state++;
        timer = 0;
      }
      break;

    case 1:
      timer++;
       background("#f0c0da");
       text("Later, I met up with my parents and we went shopping\nall around Bloomington. Later on, we all tried Korean BBQ\nfor the first time at a place called Harmony. It was incredible.", width/2, 50);
       image(i2, width/2, 350, 400, 400); 
      if (timer > 7 * 60) {
        state++;
        timer = 0;
      }
      break;
      
    case 2:
      timer++;
      background("#9e7c37");
      text("Sadly, I worked night shift that night, so I said goodbye early.\nMy shift itself was boring, but as I was walking home I was able to\nget very close to a bunny. It was a great end to my night.", width/2, 50);
      image(i3, width/2, 350, 400, 400); 
      if (timer > 10 * 60) {
        state = 0;
        timer = 0;
      }
      break;
  }
}