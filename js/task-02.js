

const ingredientsList = document.getElementById("ingredients");
const fragment = document.createDocumentFragment();
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
ingredients.forEach(ingredient => {
  const li = document.createElement("li");
 li.classList.add("item");
  li.textContent = ingredient;
  fragment.appendChild(li);
});

ingredientsList.appendChild(fragment);



