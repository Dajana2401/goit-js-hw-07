const catById = document.querySelector('#categories');
const menuItemsByCatName=document.querySelectorAll('.item');
console.log("Number of categories: " + menuItemsByCatName.length);
menuItemsByCatName.forEach(category=>{
    const menuByClassName=category.querySelector("h2").textContent;
    const menuByItemNum = category.querySelectorAll('ul > li');
    console.log("Category: "+ menuByClassName);
    console.log("Elements: "+menuByItemNum.length);
});


