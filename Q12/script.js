// Selecting the <ul> and the button
const ul = document.querySelector("#itemList");
const button = document.querySelector("#addBtn");

button.addEventListener("click", () => {
  // Creating a new <li> element
  const newLi = document.createElement("li");
  newLi.textContent = "New Item";

  // Finding the sequence number (length after adding)
  const sequenceNumber = ul.children.length + 1;

  // Applying styles based on odd/even sequence
  if (sequenceNumber % 2 === 1) {
    newLi.style.fontWeight = "bold";
    newLi.style.color = "blue";
  } else {
    newLi.style.fontStyle = "italic";
    newLi.style.color = "red";
  }

  // Appending the new <li> to the <ul>
  ul.appendChild(newLi);
});
