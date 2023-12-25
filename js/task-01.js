const categoriesList = document.querySelectorAll('#categories .item');
const categoriesCount = categoriesList.length;
console.log("Number of categories:", categoriesCount);

categoriesList.forEach((category) => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryEl = category.querySelectorAll('ul li');
    const elementsCount = categoryEl.length;
    console.log('Category:', categoryName);
    console.log('Elements:', elementsCount);
    
});



