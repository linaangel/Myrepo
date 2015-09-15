

function setup() {
  // uncomment this line to make the canvas the full size of the window
   	createCanvas(windowWidth, windowHeight);

}

function draw() {
  	// draw stuff here
  	line(0,0, 500, 500);
  	quad(10, 10, 100, 50, 110, 200, 15, 240);
  	ellipse(50, 50, 10, 10);
  	rect(300, 300, 50, 60);
  	triangle(5, 300, 20, 250, 60, 310);
}