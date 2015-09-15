

function setup() {
  // uncomment this line to make the canvas the full size of the window
   	createCanvas(windowWidth, windowHeight);

}

function draw() {
  	// draw stuff here
  	line(0,0, 500, 500);
  	fill(0,255,0);
  	quad(10, 10, 100, 50, 110, 200, 15, 240);
  	fill(255,69,0);
  	ellipse(50, 50, 10, 10);
  	fill(0,0,255);
  	rect(300, 300, 50, 60);
  	fill(255,0,0);
  	triangle(5, 300, 20, 250, 60, 310);
}