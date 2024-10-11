function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("input");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

let sizes = 30;

create.addEventListener("click", createMarkup);
destroy.addEventListener("click", () => {
  input.value = "";
  clear();
});

function createMarkup() {
  if (input.value < 1 || input.value > 100) {
    console.log("wrong value!");
    return;
  }
  createBoxes(input.value);
}
function clear() {
  boxes.innerHTML = "";
  sizes = 30;
}
function createBoxes(amount) {
  clear();

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${sizes}px`;
    box.style.height = `${sizes}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
    sizes += 10;
  }
  boxes.appendChild(fragment);
}
