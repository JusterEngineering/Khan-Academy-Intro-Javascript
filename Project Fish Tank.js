//Justyn Deenoo
//Project Fish Tank 
//Date: October 15 2018
background(89, 216, 255); // Background Colour 


var drawFish = function(centerX, centerY){ //Making the variable so it can draw the fish


var bodyLength = 130; //Lenght of fish 
var bodyHeight = 74; // Height of fish 
var bodyColor = color(255, 0, 0); // body colour

noStroke(); //No stroke 
fill(bodyColor); //So all the fish are the same colour 
//Body of the Fish 
ellipse(centerX, centerY, bodyLength, bodyHeight);
//Tail 
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2; // Changes the width of the tails     


triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
//Eyes 
fill(33, 33, 33);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};         


//The fishes
drawFish(169,150);
drawFish(2232,50);
drawFish(299,36);
drawFish(45,350);