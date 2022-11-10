const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const storageEll = [];
  const list = document.querySelector(`ul#ingredients`);
  
  ingredients.forEach((ingredient) => {
const itemEL = document.createElement("li");
  itemEL.classList.add("item");
  itemEL.textContent = ingredient;
  storageEll.push(itemEL);
  })
  list.append(...storageEll);
