const listOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${listOfCategories.length}`);
listOfCategories.forEach((element) => {
  const elementName = element.querySelector("h2").textContent;
  const elementNumber = element.querySelectorAll("li").length;
  console.log(`Category: ${elementName}`);
  console.log(`Elements: ${elementNumber}`);
});
