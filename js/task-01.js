const allCategories = document.getElementById("categories");
const items = allCategories.querySelectorAll(".item");
const totalItems = items.length;
console.log(`Number of categories: ${totalItems}`) 
items.forEach(item => {
    const categoryName = item.querySelector("h2").textContent;
    const elementsLength = item.querySelectorAll("ul li").length;
    console.log(`Category: ${categoryName}`) 
    console.log(`Elements: ${elementsLength}`) 
 })
