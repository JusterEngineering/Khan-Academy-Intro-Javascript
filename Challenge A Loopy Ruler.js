fill(17, 0, 255);

// a handy dandy ruler across the top
var x = 0;
var y = 0; 
while(x < 351){ 
    text(x,x, 10);
    x = x+=50; 
}
while(y<351){ 
    text(y, 0, y); 
    y = y+=50; 
} 