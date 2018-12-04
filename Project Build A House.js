background(219, 255, 255); //Background 
//Variables 
    var houseX = 75;
    var houseWidth = 250;
    var windowWidth = houseWidth / 4;
    var houseHeight = 210;
    var windowHeight = houseHeight / 4;
    var houseY = 150;


//Bricks 
        var bricks = function () {
        for (var j = -1; j < 13; j+=1) {
            for (var i = 0; i < 10; i++) {
                stroke(255);
                fill(138, 33, 33);
                rect(houseX + i * 26, houseY + j * 17, 25, 15);
}       
}
};
//Windows 
        var windows = function() {
        stroke(255, 255, 255);
        strokeWeight(3);
        fill(50, 186, 179);
        for (var i = 75 + windowWidth / 4; i < 247; i+=windowWidth * 2.5) {
            rect(i, 150 + windowWidth / 4, 62.5, windowHeight);
}
        for (var i = 0; i < 2; i++) { 
            rect((0.75 * windowWidth + houseX) + i * (2.5 * windowWidth), 153 + windowWidth /         4, windowWidth / 2, 46.5);
}
        
        rect(houseX + 2.75 * windowWidth - 31.5, 150 + windowWidth / 4, windowWidth / 2,             windowHeight);
        rect(houseX + 2.75 * windowWidth - 31.25, 153 + windowWidth / 4, windowWidth / 2,            windowHeight - 6);
};

//The Looks 

    bricks();
    windows();

//Door 
fill(0, 102, 255);
rect(181, 268, 55, 100);
fill(0, 0, 0);
noStroke(); 
ellipse(224, 324, 11, 11);
//Grass 
fill(16, 56, 24);
rect(-10, 368, 408, 52);
//Sun
fill(255, 221, 0);
ellipse(392, 20, 100, 100); 
//Roof
stroke(0, 0, 0);
fill(0, 0, 0);
rect(63, 93, 280, 54);
fill(255, 255, 255);
noStroke();
fill(77, 42, 42);
rect(72, 48, 33, 61);
//Bush 
fill(22, 89, 25);
ellipse(27, 355, 50 ,50);
ellipse(56, 351, 41 ,50);
ellipse(386, 355, 50 ,50);
ellipse(405, 351, 48 ,50);