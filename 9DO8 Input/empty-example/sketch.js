var canvas;
var bg_color;
var appinput = 0;

var Drop = function(x, y) {
  this.x = x;
  this.y = y;
  this.width = 5;
  this.height = 15;
}

Drop.prototype.show = function() {
    fill(255);
    rect(this.x, this.y, this.width, this.height);
}

Drop.prototype.fall = function(){
    this.y = this.y + 10;
}

var drops = [];

function setup() {
	canvas = createCanvas(500, 600); 
	bg_color = document.getElementById('middle_panel');
	appinput = document.getElementById('appinput');
	canvas.parent('middle_panel');
	background(0);
}

function draw() {
	background(0);

if (appinput.value == 1) {	
	background(0, 0, 255);
	fill(0);
	textSize(32);
	text("Rainy", 20, 50);
	
	for (var i = 0; i < drops.length; i++) {
     drops[i].show();
     drops[i].fall();
  	}
  	drops.push( new Drop(random(0,width), 0) );
}

else if (appinput.value == 2) {	
	background(255, 69, 0);
	textSize(32);
	text("Sunny", 20, 50);
	fill(255, 215, 0)
	ellipse(width/2, height/2, 350, 350);
	}
}