function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
	var faceX= mouseX;
	var faceY= mouseY;
	var eye1X= mouseX-20;
	var eye1Y= mouseY-10;
	var eye2X= mouseX+20;
	var eye2Y= mouseY-10;
	var smileX= mouseX;
	var smileY=mouseY;
	ellipse(faceX,faceY,100,100);
	ellipse(eye1X,eye1Y,20,20);
	ellipse(eye2X,eye2Y,20,20);
	arc(smileX,smileY,40,40,QUARTER_PI,HALF_PI+QUARTER_PI);
}
