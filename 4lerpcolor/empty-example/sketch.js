var startColor;
var endColor;
var bgColor;
var counter;

function setup() {
  // uncomment this line to make the canvas the full size of the window
  createCanvas(windowWidth, windowHeight);
	startColor = color(255,0,0);
	endColor = color(127,30,200);
	counter = 0;
	bgColor = lerpColor(startColor, endColor, counter);
}

function draw() {
  	// draw stuff here
  	background(bgColor);
  	counter = counter + .01;
	bgColor = lerpColor(startColor, endColor, counter);
  	

}