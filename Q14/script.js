// Correct JavaScript code
const para = document.querySelector('#message'); // Correct id
const textButton = document.getElementById('textButton'); // Correct method

textButton.addEventListener('click', () => { // Correct event listener
  para.textContent = 'New Message'; // Correct property
});

const box = document.getElementById('box');
const colorButton = document.getElementById('colorButton');

colorButton.addEventListener('click', () => {
  box.style.backgroundColor = 'blue'; // Correct style property
});
