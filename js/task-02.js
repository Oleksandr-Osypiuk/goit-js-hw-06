const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsId = document.getElementById("ingredients");
for (let item of ingredients) {
  let elLi = document.createElement("li");
  ingredientsId.append(elLi);
  elLi.textContent = item;
  console.log(elLi)
}
