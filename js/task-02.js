const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

  const list = document.querySelector(`ul#ingredients`)

for (const foodType of ingredients) {
    const item = document.createElement(`li`);
    item.textContent = foodType
    item.classList.add(`item`)
      list.append(item)
}
