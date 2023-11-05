const categoriesEl = document.querySelector('#categories');
const titlesEl = document.querySelectorAll('#categories h2');
const itemsEl = document.querySelectorAll('.item ul');

console.log(`Number of categories: ${categoriesEl.children.length}`);

titlesEl.forEach((title, i) => {
  console.log(`Category: ${title.textContent}`);

  itemsEl.forEach((item, y) => {
    if (i === y) {
      console.log(`Elements: ${item.children.length}`);
    }
  });
});
