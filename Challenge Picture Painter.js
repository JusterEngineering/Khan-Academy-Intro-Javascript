var paintBrush = {
    x: 100,
    y: 100,
    img: getImage("avatars/leaf-yellow")
};

var paintCanvas = function() {
    imageMode(CENTER);
    image(paintBrush.img, paintBrush.x, paintBrush.y);
};

mouseMoved = function(){
    paintBrush.x=mouseX;
    paintBrush.y=mouseY;
    paintCanvas();
};
