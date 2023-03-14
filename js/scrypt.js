const mainDiv = document.querySelector("#mainDiv");
const accessories = document.querySelector("#accessories");

function clearGrid() {
  mainDiv.innerHTML = "";
}

function drawGrid(x, y) {
  for (let num = 0; num < y; num++) {
    for (let xnum = 0; xnum < x; xnum++) {
      const div = document.createElement("div");
      div.classList.add("subDivs");
      div.style.flex = `0 0 ${100 / x}%`;
      div.style.backgroundColor = "white";

      mainDiv.appendChild(div);

      div.addEventListener("mouseenter", () => {
        console.log("Mouse entered subDiv", num);
        div.style.backgroundColor = "#000080";
      });
    }
  }
}
const sizeButton = document.createElement("BUTTON");
sizeButton.textContent = "new grid";
sizeButton.style.fontSize = "32px";
accessories.appendChild(sizeButton);

sizeButton.addEventListener("click", () => {
  clearGrid();
  let xValue = prompt("x: ", "16");
  let yValue = prompt("y: ", "16");
  if (xValue <= 100 && yValue <= 100) {
  } else {
    xValue = 16;
    yValue = 16;
    alert("no value bigger than 100");
  }
  drawGrid(xValue, yValue);
});

drawGrid(16, 16);
