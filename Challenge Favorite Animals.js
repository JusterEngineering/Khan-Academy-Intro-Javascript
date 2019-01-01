var animals =["1.Penguin" , "2.Octupus", "3.Dog", "4.Whale Shark", "5.Clownfish"]; 

var number = 0; 

while(number<animals.length) { 
    textSize(30);
    fill(255, 0, 0);
    text(animals[number], 30, 100+number*40);
    number++; 
} 

fill(255, 0, 0);
textSize(50);
text("My Top"  + animals.length + "favorite animals!", 23, 53); 
