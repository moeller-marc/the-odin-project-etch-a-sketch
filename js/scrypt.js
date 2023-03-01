const mainDiv = document.querySelector("#mainDiv");

for (let num = 0; num < 256; num++) {
  const element = (256)[num];
  const div = document.createElement("div");
  div.classList.add("subDivs");
  mainDiv.appendChild(div);
}
