function changeText(){
  document.getElementById("main-heading").textContent = "Welcome to the DOM World!";
}

function changeColor(){
  let para = document.getElementsByTagName("p");
  for (let i = 0; i < para.length; i++) {
    para[i].style.color = "blue";
  }
}

function changeBg(){
  document.querySelector(".container").style.backgroundColor = "yellow";
}
