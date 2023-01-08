function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeButton = document.querySelector("button.change-color");
const body = document.body;
const colorValue = document.querySelector("span.color");

const changeColor = () => { 
  body.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = getRandomHexColor();
}

changeButton.addEventListener("click", changeColor)

