//var fence;
var state = 0;
var locationData;
var num;
var distance;
var places = [];
var reggieImg;
var cookImg;
var bridgeImg;
var susImg;
var unionImg;
var williamsImg;
var p4paImg;
var cvaImg;
var mccormickImg;
var fellImg;
var degarmoImg;
var edwardsImg;
var schroederImg;
var felmleyImg;
var moultonImg;
var hoveyImg;
var ugImg;
var ssbImg;
var hancockImg;
var turnerImg;
let s1;
let s2;
let s3;
let s4;
let s5;
let s6;
let s7;
let s8;
let s9;
let s10;
let s11;
let s12;
let s13;
let s14;
let s15;
let s16;
let s17;
let s18;
let s19;
let s20;
let s21;

function preload() {
  locationData = getCurrentPosition();
  s1 = loadSound("Cherry.mp3");
  s2 = loadSound("assets/JulianHall.m4a");
  s3 = loadSound("assets/RoseHouse.m4a");
  s4 = loadSound("assets/CookHall.m4a");
  s5 = loadSound("assets/CenterForVisualArts.m4a");
  s6 = loadSound("assets/CenterForPerformingArts.m4a");
  s7 = loadSound("assets/McCormick.m4a");
  s8 = loadSound("assets/Shroeder.m4a");
  s9 = loadSound("assets/Felmley.m4a");
  s10 = loadSound("assets/Edwards.m4a");
  s11 = loadSound("assets/Fell.m4a");
  s12 = loadSound("assets/Bridge.m4a");
  s13 = loadSound("assets/OldUnion.m4a");
  s14 = loadSound("assets/William.m4a");
  s15 = loadSound("assets/Degarmo.m4a");
  s16 = loadSound("assets/Hovey.m4a");
  s17 = loadSound("assets/Galleries.m4a");
  s18 = loadSound("assets/Moulton.m4a");
  s19 = loadSound("assets/SSB.m4a");
  s20 = loadSound("assets/Hancock.m4a");
  s21 = loadSound("assets/Turner.m4a");

  // TURN "reggie.jpeg into "reggieImg = [];" to create an array of different images
  //reggieImg = loadImage('assets/reggie1.jpg'); //these will change to images of pics in front of the buildings for welcome week
  //reggieImg[2] = loadImage('assets/reggie2.jpg');
}

function setup() {
  // fence = new geoFenceCircle(40.506229, -88.990537, 0.02); //sets geofence location to cva room 17
  createCanvas(displayWidth, displayHeight);
  num = 0;

  reggieImg = loadImage("reggie.jpeg");
  cookImg = loadImage("assets/Cook.jpg");
  bridgeImg = loadImage("assets/bridge.jpg");
  susImg = loadImage("assets/amogus.jpg");
  unionImg = loadImage("assets/union.jpg");
  williamsImg = loadImage("assets/williams.jpg");
  p4paImg = loadImage("assets/p4pa.jpg");
  cvaImg = loadImage("assets/cva.jpg");
  mccormickImg = loadImage("assets/mccormick.jpg");
  fellImg = loadImage("assets/fell.jpg");
  degarmoImg = loadImage("assets/degarmo.jpg");
  edwardsImg = loadImage("assets/Edwards.png");
  schroederImg = loadImage("assets/schroeder.jpg");
  felmleyImg = loadImage("assets/felmley.jpg");
  moultonImg = loadImage("assets/Moulton.jpg");
  hoveyImg = loadImage("assets/hovey.jpg");
  ugImg = loadImage("assets/ug.jpg");
  ssbImg = loadImage("assets/ssb.jpg");
  hancockImg = loadImage("assets/hancock.jpg");
  turnerImg = loadImage("assets/turner.jpg");

   places.push(new Place(40.507, -88.990, "SUCCESSSSS!!!!!!", .02, susImg, s3)); // new Place object, for CVA room 17
  places.push(new Place(40.47862, -88.9682, "Rose's House", 0.06, bridgeImg, s5));
    places.push(new Place(40.50984400, -88.98906030, "JH 64", .02, susImg, s2)); // new Place object, for JH 64
    places.push(new Place(40.510824736433904, -88.99134151266699, "ISU College Bridge", .06, bridgeImg, s12)); // new Place object, for ISU bridge over College Ave

    places.push(new Place(40.50863221414712, -88.99077591254148, "Old Union", .06, unionImg, s13)); // new Place object, for ISU bridge over College Ave
    places.push(new Place(40.50840289459472, -88.9909118880512, "Williams Hall", .06, williamsImg, s14)); // new Place object, for ISU bridge over College Ave
    places.push(new Place(40.50844449497366, -88.9911676488728, "Cent 4 Perf Arts", .06, p4paImg, s6)); // new Place object, for ISU bridge over College Ave
    places.push(new Place(40.50750741811689, -88.99029850463533, "CVA Circle", .06, cvaImg, s5)); // new Place object, for ISU bridge over College Ave
    places.push(new Place(40.5079598008354, -88.99148671475066, "McCormick Hall", .02, mccormickImg, s7)); // new Place object, for ISU bridge over College Ave
    places.push(new Place(40.50864821960959, -88.99120123764614, "Fell Hall", .02, fellImg, s11)); // new Place object, for ISU bridge over College Ave
    places.push(new Place(40.50896516728555, -88.99212919431163, "DeGarmo Hall Solar", .02, degarmoImg, s15)); // new Place object, for ISU bridge over College Ave
    places.push(new Place(40.50917235949953, -88.99177097641105, "Cook Hall", .02, cookImg, s4)); // new Place object, for ISU bridge over College Ave
    places.push(new Place(40.50947612369081, -88.99174125561485, "Edwards Hall", .02, edwardsImg, s10)); // new Place object, for ISU bridge over College Ave
    places.push(new Place(40.50980921328644, -88.99149564020013, "Schroeder Hall", .02, schroederImg, s8)); // new Place object, for ISU bridge over College Ave
    places.push(new Place(40.51014656358694, -88.9912748009074, "Felmley Hall", .02, felmleyImg, s9)); // new Place object, for ISU bridge over College Ave
    places.push(new Place(40.50942119788225, -88.99076697407767, "Moulton Hall", .02, moultonImg, s18)); // new Place object, for ISU bridge over College Ave
    places.push(new Place(40.50930542714758, -88.99068753755874, "Hovey Hall", .02, hoveyImg, s16)); // new Place object, for ISU bridge over College Ave
    places.push(new Place(40.508730456808415, -88.98572041960726, "University Galleries", .02, ugImg, s17)); // new Place object, for ISU bridge over College Ave
    places.push(new Place(40.511676506705506, -88.9938474159579, "Student Services Building", .02, ssbImg, s19)); // new Place object, for ISU bridge over College Ave
    places.push(new Place(40.512969573012896, -88.99488587696477, "Hancock Stadium", .02, hancockImg, s20)); // new Place object, for ISU bridge over College Ave
    places.push(new Place(40.509699669963155, -88.99664232253424, "Turner Hall", .02, turnerImg, s21)); // new Place object, for ISU bridge over College Ave
}

function draw() {
  // for (var i = 0, i < places.length, i++) {
  //   print(places[i].fence.insideFence);
  // }

  switch (state) {
    case 0:
      background(0);
      fill("white");
      text("please touch screen to continue", 10, 10, 400, 500);
      break;

    case 1:
      background(255);
      fill("brown");
      text("figuring out your position", 10, 10, 400, 500);
      intervalCurrentPosition(positionPing, 5000);
      state = 2;
      break;

    case 2:
      break;
  }
}

function positionPing(position) {
  textSize(24);
  num++;
  background(255);
  text("lat: " + position.latitude.toFixed(8), 10, 340);
  text("long: " + position.longitude.toFixed(8), 10, 390);
  text("number of updates: " + num, 10, 440);
  distance = calcGeoDistance(
    locationData.latitude,
    locationData.longitude,
    position.latitude,
    position.longitude,
    "mi"
  );

  foundAPlace = false;
  for (var i = 0; i < places.length; i++) {
    if (places[i].fence.insideFence === true) {
      places[i].display();
      foundAPlace = true;
      break; //should break out of the for loop?
    }
  }
  if (foundAPlace == false) {
    background("yellow");
    text("navigate to a place", 10, 10);
    turnOffSounds();
  }
}

function turnOffSounds() {
  s1.pause();
  s2.pause();
  s3.pause();
  s4.pause();
  s5.pause();
  s6.pause();
  s7.pause();
  s8.pause();
  s9.pause();
  s10.pause();
  s11.pause();
  s12.pause();
  s13.pause();
  s14.pause();
  s15.pause();
  s16.pause();
  s17.pause();
  s18.pause();
  s19.pause();
  s20.pause();
  s21.pause();

}

function Place(lat, long, desc, radius, reggieImg, sound) {
  this.lat = lat;
  this.long = long;
  this.fence = false;
  this.desc = desc;
  this.radius = radius;
  this.fence = new geoFenceCircle(this.lat, this.long, this.radius); //sets geofence location to coordinates
  this.s = sound;

  this.display = function () {
    image(reggieImg, 10, 10);
    textSize(20);
    text("You are at " + this.desc, 10, 240);
    if (!this.s.isPlaying()) {
      print("starting song");
      this.s.play();
    }
  };
}

function touchStarted() {
  getAudioContext().resume();
  if (state == 0) state = 1;
}
