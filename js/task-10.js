function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsContainer = document.querySelector('#controls');
const input = controlsContainer.querySelector('input');
const createBtn = controlsContainer.querySelector("[data-create]");
const destroyBtn = controlsContainer.querySelector("[data-destroy]");
const boxContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  const amount = +input.value;
  boxContainer.innerHTML = createBoxes(amount);
});

function createBoxes(amount, boxSize = 30) {
  if (amount === 0) {
    return '';
  }
  const color = getRandomHexColor();
  const box = `<div style='width: ${boxSize}px; height: ${boxSize}px; background-color: ${color}; margin: 5px;'></div>`;
  return box + createBoxes(amount - 1, boxSize + 10);
   
}


destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxContainer.innerHTML = '';
}


