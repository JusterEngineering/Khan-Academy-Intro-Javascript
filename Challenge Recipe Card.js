var recipeTitle = "Bread";
var recipeServings = 2;
var recipeIngredients = ["Flour", "Water"];

fill(26, 26, 26);
textSize(20);
text(recipeTitle, 10 , 23);
text("Serves: " + recipeServings, 10, 55);
text("Ingredients: " + recipeIngredients, 10 , 85);

var recipeTitle = "Orange Juice";
var recipeServings = 2;
var recipeIngredients = ["Orange", "Sugar"];

var ThisRecipe = {
    title: "Orange Juice",
    servings: 2,
    ingredients: ["Oranges," , "Water and ", "Sugar" ] 
};

text(ThisRecipe.title, 10 , 123);
text("Serves:" +ThisRecipe.servings, 10,155);

text("Ingredients:" +ThisRecipe.ingredients[0]+ThisRecipe.ingredients[1]+ThisRecipe.ingredients[2],10,185); 