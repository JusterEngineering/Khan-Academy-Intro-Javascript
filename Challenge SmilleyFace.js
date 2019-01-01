var SmileyFace = function(centerX, centerY){ 
    this.centerX = centerX; 
    this.centerY = centerY; 
};

SmileyFace.prototype.draw = function() {
     fill(255, 234, 0);
     ellipse(this.centerX, this.centerY, 150, 150); 
     fill(0, 0, 0);
     ellipse(this.centerX-30, this.centerY-30, 20 , 20); 
     ellipse(this.centerX+30, this.centerY-30, 29, 0);
     noFill();
     strokeWeight(3); 
     arc(this.centerX, this.centerY+10, 64, 40, 0, 180);
};

SmileyFace.prototype.speak = function(words){
    text(words, this.centerX+78, this.centerY+-49); 
}; 

var face = new SmileyFace(200,300);
face.draw(); 
face.speak("Salut"); 

var smiley3 = new SmileyFace(97,132); 
smiley3.draw(); 
smiley3.speak("Sup"); 