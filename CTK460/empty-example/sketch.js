var locationData;
function preload(){
    locationData =  getCurrentPosition();
}

function setup() {
  createCanvas(500, 500);
  intervalCurrentPosition(positionPing, 1000);
}

function draw() {
  
}

function positionPing(position){
  print("lat: " + position.latitude);
  print("long: " + position.longitude);
}


