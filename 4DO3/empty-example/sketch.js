function setup() {
  createCanvas(windowWidth, windowHeight);
}

function smile(w,h) {
 	background(255,255,255);

 	fill(255,255,0,50);
   	stroke(0,0,0);
   	strokeWeight(4);
   	ellipse(mouseX, mouseY, 350, 350);

	fill(0,0,0);
 	arc(mouseX-5, mouseY+50, 100, 60, 0, PI+QUARTER_PI, OPEN);
}

function keyPressed() {
 	smile(5,50);
}

function draw(){
   	fill(255,255,0,50);
   	stroke(0,0,0);
   	strokeWeight(4);
   	ellipse(mouseX, mouseY, 350, 350);

   	fill(0,0,0)
   	ellipse(mouseX-70, mouseY-40, 40, 40);

   	fill(0,0,0)
   	ellipse(mouseX+70, mouseY-40, 40, 40);

	fill(0,0,0)
	line(mouseX+60, mouseY+50, mouseX-60, mouseY+50);
}

