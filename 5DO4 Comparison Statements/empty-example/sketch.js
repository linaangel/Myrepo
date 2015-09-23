var happy;
happy = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw(){
      background(255);

      //face
      fill(255,255,0);
   	stroke(0,0,0);
   	strokeWeight(4);
   	ellipse(mouseX, mouseY, 350, 350);

   	//left eye
      fill(0,0,0)
   	ellipse(mouseX-70, mouseY-40, 40, 40);

   	//right eye
      fill(0,0,0)
   	ellipse(mouseX+70, mouseY-40, 40, 40);

      if (happy == 0) {
      //serious mouse
      fill(0,0,0);
      line(mouseX+60, mouseY+50, mouseX-60, mouseY+50);
   }
      else if(happy == 1){
      //happy
      arc(mouseX-5, mouseY+10, 120, 150, QUARTER_PI, PI- QUARTER_PI, OPEN);
      //arc(mouseX-5, mouseY+50, 100, 60, 0, PI-QUARTER_PI, CHORD);
   }

      else {
      //sad
      fill(0,0,0);
      arc(mouseX-5, mouseY+50, 120, 50, PI, 0, CHORD);
   }
}

function keyPressed (){
   if (key == 'H'){
      happy = 1;
   }
   else if (key == 'S'){
      happy = 0;
   }
   else {
      happy = 3;
   }
}