var Xcoord = [];
var Ycoord = [];

function setup() {
  createCanvas(windowWidth, windowHeight); 

for (var i = 0; i < 800; i++) {
   Xcoord.push(random(width));
   Ycoord.push(random(height)); 
 }
}

function draw() {
  background(0);
  
  for (var j = 0; j < Xcoord.length; j++) {
          stroke(255, 255, 153);
          ellipse(Xcoord[j], Ycoord[j]++, 5, 5);

  if (Ycoord[j] > windowHeight) {
   Ycoord[j] = 0;
  }
    }
  }