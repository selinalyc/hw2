function setup() { 
  createCanvas(400, 400);
} 
var x = 100;
var y = 100;
var direction=3;

function draw() { 

  background(220);
	ellipse(x,y,20,20); 
	x=x+direction;
if(x>390||x<10){
		direction*=-1;
    //what is * for?
    //why it is -1 instead of 1?
	}	
	
}
function mousePressed() {
	
x = mouseX;
	y = mouseY;
}	