function setup() {
	createCanvas(640, 480);
  // uncomment this line to make the canvas the full size of the window
  // createCanvas(windowWidth, windowHeight);
}

function draw() {
	if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
}
    ellipse(mouseX, mouseY, 80, 80);
   // draw stuff here
  // ellipse(width/2, height/2, 50, 50);
}