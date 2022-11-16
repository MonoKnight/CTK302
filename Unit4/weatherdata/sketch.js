let clock = [];
let compass = [];
let test = 0;
let test2 = 0;
let weather;
let weatherID = 0; // returned in the JSON weather element
let state = 0;
let x = 0;
let windspeed = 0;
let temp = 0;
let humidity = 0;
let desc = 0;
let dir = 0;
let cv = 0;
let dir2 = 0;
let i;
let f;

function preload() {
  for(i = 0; i < 64; i++) clock[i] = loadImage("assets/clock/frame_" + (i + 2) + "_delay-0.05s.png");
  for(i = 1; i < 28; i++) compass[i] = loadImage("assets/compass/compass (" + i + ").png");
  i = loadImage("assets/freeport.webp");
  f = loadFont("assets/Tfont2.ttf");
}

function setup() {
  createCanvas(500, 500);
  let myCityString ="https://api.openweathermap.org/data/2.5/weather?q=Freeport,IL,US&units=imperial&";

  let myIDString = "appid=5da1301d057afe672cfa31b5c40e68c9" ;

  let myTotalString = myCityString + myIDString;
  
  loadJSON(myTotalString, gotData); // that gotData function happens when JSON comes back.

  textFont(f);
  textSize(18);
}

function draw() {
  dir2 = dir - 5;
  if(dir2 < 0)dir2 = 355;
  cv = -int(map(dir2, 0, 360, -27, -1, true));

  image(i, 0, 0, width, height);

  switch (state) {
      
    case 0:
      if (weather) {
        state = 1;
      }
      break;

    case 1:
      stroke("white");
      strokeWeight(5);
      fill("black");
      text("What is the weather in " + weather.name + "?", 20, 40);
      text("temperature is " + temp + " degrees fahrenheit", 20, 80);
      text("humidity is " + humidity + "%", 20, 120);
      text("windspeed is " + windspeed, 20, 160);
      text("The wind direction is at " + dir + " degrees", 20, 200);
      

      // cloud
      //fill("white");
      //noStroke();
      //ellipse(x, 300, 200, 100);

      // move the cloud's x position
      //x = x + windspeed / 3;
      //if (x > width + (x/2)) x = 0 - (x/2);

      //images
      //image(clock[test], width/2, height/2 - 75);
      image(compass[cv], 0, 200);

      break;
  }
}

function gotData(data) {
  weather = data;
  print(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temp = weather.main.temp;
  humidity = weather.main.humidity;
  dir = weather.wind.deg;
}
