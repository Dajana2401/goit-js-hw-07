const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList=document.getElementById("ingredients");
ingredients.forEach(ingredient=>{
const ingList=document.createElement("li");
const ingName=ingList.textContent=ingredient;
console.log(ingName);
ingList.classList.add('item');
ingredientsList.append(ingList);
console.log(ingList);
});
