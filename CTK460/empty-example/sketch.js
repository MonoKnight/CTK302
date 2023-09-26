let arr1 = [
  [true, true],
  [true, true],
];
let arr2 = [false, false, false, false];


function setup() {
  createCanvas(500, 500);

}

function draw() {
  background("blue");
  if(arr1.flat().every(x => x === true) == true) print("hi");
}


