 	var x =-60;
  	var y =-60;
  	var r = 0;
  	var g = 0;
  	var b = 0;
	var speed = 1;

function setup() {
 createCanvas(600,600);
}

function draw() {
 	moveLine(5)
}

function moveLine (speed){
	background(255,69,0);
  	line (0,0,width,height);
  	fill(r,g,b);
  	ellipse(x, y, 120, 120);
  	x=x+speed;
	y=y+speed;

  	if (x>660){
  	x=-60;
  	y=-60;
  	r=random(255);
  	g=random(255);
  	b=random(255);
  }
}