const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const allBoxes = document.getElementById('boxes');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = input.valueAsNumber;
  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert('Enter a number between 1 and 100.');
    return;
  }
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = '30px';
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  allBoxes.append(...boxes);
}
function destroyBoxes() {
  allBoxes.innerHTML = '';
}
