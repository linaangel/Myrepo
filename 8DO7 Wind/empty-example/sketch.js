var Drop = function(x, y) {
  this.x = x;
  this.y = y;
  this.width = 5;
  this.height = 15;
}

Drop.prototype.show = function() {
    fill(random(255), random(255), random(250));
    rect(this.x, this.y, this.width, this.height);
}

Drop.prototype.fall = function(){
    this.y = this.y + 10;
}

var drops = [];

function setup() {
  createCanvas(windowWidth, windowHeight); 
}

function draw() {

  background(0);

  for (var i = 0; i < drops.length; i++) {
     drops[i].show();
     drops[i].fall();
  }
  drops.push( new Drop(mouseX, 0) );
}