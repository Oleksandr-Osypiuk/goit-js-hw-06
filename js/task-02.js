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
  elLi.insertAdjacentHTML("beforeend", item);
  elLi.classList += "item";
  console.log(elLi)
}
