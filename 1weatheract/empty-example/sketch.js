var canvas;
var ballSize;
var ballColor;
var nameField;
var app_canvas_div;

function setup() {
  canvas = createCanvas(500, 500); 
  ballColor = document.getElementById('colorSelector');
  ballSize = document.getElementById('ballSlider');
  nameField = document.getElementById('nameField');
//  app_canvas_div = select('#app_canvas');
//  canvas.parent('app_canvas');
//  canvas.resizeCanvas(app_canvas_div.width, app_canvas_div.height);
  background(0);
}


var Drop = function(x, y) {
  this.x = x;
  this.y = y;
  this.width = 5;
  this.height = 15;
}

Drop.prototype.show = function() {
    fill(135, 206, 250);
    rect(this.x, this.y, this.width, this.height);
}

Drop.prototype.fall = function(){
    this.y = this.y + 10;
}

var drops = [];

function draw() {
  background(0);
  fill(255);
  text(nameField.value, 20, 20);
  fill(ballColor.value);
  ellipse(width/2, height/2, ballSize.value, ballSize.value);

  background(0);

  for (var i = 0; i < drops.length; i++) {
     drops[i].show();
     drops[i].fall();
  }
  drops.push( new Drop(random(0,windowWidth), 0) );
}