function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
	background(255);
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
	
 if(mouseX>200){
	arc(smileX,smileY,40,40,QUARTER_PI,HALF_PI+QUARTER_PI);	
	}else{
	arc(smileX,smileY+40,40,40,PI+QUARTER_PI,PI+HALF_PI+QUARTER_PI);
	}
}
