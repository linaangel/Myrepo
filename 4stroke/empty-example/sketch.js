

function setup() {
  // uncomment this line to make the canvas the full size of the window
   	createCanvas(windowWidth, windowHeight);

}

function draw() {
  	// draw stuff here
  	stroke(127,0,0);
  	fill(255,0,0);

  	line(0,0, 500, 500);

  	//notice the alpha channel as the fourth parameter
  	fill(0,255,0,150);
  	stroke(127,0,255);
  	quad(10, 10, 100, 50, 110, 200, 15, 240);

  	noFill();
  	ellipse(50, 50, 10, 10);

  	stroke(0,0,0);
  	fill(127,127,0);
  	rect(300, 300, 50, 60);

  	noStroke();
  	fill(0,255,255);
  	triangle(5, 300, 20, 250, 60, 310);
}