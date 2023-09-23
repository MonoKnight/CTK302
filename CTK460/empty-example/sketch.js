let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];


function setup() {
  createCanvas(500, 500);

}

function draw() {
  background("red");
  if (areEqual(arr1, arr2)) {
    background("blue");
  }
}


