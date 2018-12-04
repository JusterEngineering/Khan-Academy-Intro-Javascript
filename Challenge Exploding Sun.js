noStroke();
// the beautiful blue sky
background(82, 222, 240);

// the starting size for the sun
var sunSize = 30; 

draw = function() {
    //The Sun 
    fill(247, 255, 0);
    ellipse(200, 298, sunSize, sunSize);
    
    //The Land 
    fill(156, 156, 156);
    rect(0,300,400, 100);
    
    sunSize = sunSize + 1;
};
