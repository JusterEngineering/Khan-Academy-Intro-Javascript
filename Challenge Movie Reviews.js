var movies = [
    {
        title: "Puff the Magic Dragon",
        review: "Best movie ever!!"
    },
    {
        title: "The Matrix",
        review: "The real best movie ever" 
    },
    {
        title: "Mulan", 
        review: "Good Start"
    }
];

for(var i=0; i<movies.length; i++){
fill(84, 140, 209);
textAlign(CENTER, CENTER);                                                            
textSize(20);
text(movies[i].title, 200, i*50+10);
textSize(15);
text(movies[i].review, 200, i*50+50);
}