function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; 

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10; 
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor(); 
    box.style.margin = '5px'; 

    boxesContainer.appendChild(box); 
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; 
}

document.querySelector('[data-create]').addEventListener('click', () => {
  const input = document.querySelector('#controls input');
  const amount = parseInt(input.value, 10);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount); 
  }

  input.value = '';
});

document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);
