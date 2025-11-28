// Selecting elements
const colorInput = document.querySelector("#colorInput");
const textInput = document.querySelector("#textInput");
const bgBtn = document.querySelector("#bgBtn");
const textBtn = document.querySelector("#textBtn");
const myDiv = document.querySelector("#myDiv");

// Handling background change
bgBtn.addEventListener("click", () => {
  const color = colorInput.value.trim();

  // Temporary test to check if color is valid
  myDiv.style.backgroundColor = color;

  // If browser didn't accept the color, reset and alert
  if (myDiv.style.backgroundColor === "") {
    alert("Invalid color name!");
  }
});

// Handling text update
textBtn.addEventListener("click", () => {
  const newText = textInput.value.trim();

  if (newText === "") {
    alert("Please enter some text!");
  } else {
    myDiv.textContent = newText;
  }
});
