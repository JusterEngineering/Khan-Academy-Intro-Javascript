//Justyn Deenoo
//Project Shooting Star
// Date: October 1 2018
var StarX; //Variable for StarX
var StarX = 1; //Variable for StarX
var StarY; //Variable for StarY
var StarY = 1; //Variable for StarY

draw = function() {
    
    background(29, 40, 115);
    fill(255, 238, 0);
    ellipse(StarY, StarX, 15, 7); //
    ellipse(StarX, StarY, 15, 7);
    
    StarY = StarY + 2; //Motion of star 
    StarX = StarX + 2.45; //Motion of star
    
    fill(234, 245, 84); //Color Moon 
    ellipse(365, 33, 50, 50); //Moon 
    fill(12, 74, 232); //Color Of World
    stroke(59, 59, 59); //Stroke Colour Of World 
    ellipse(127, 412, 200, 200); // Shape Of World

};

