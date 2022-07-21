let sketchBoard = document.getElementById("board");
let input = document.getElementById("input");
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (e) => (colorVar = e.target.value));
});

let colorVar = "black";

updateDivNum();

input.addEventListener("change", updateDivNum);

function updateDivNum() {
  console.log("updaing");
  divNum = input.value;
  for (i = 0; i < divNum ** 2; i++) {
    let newDiv = document.createElement("div");
    newDiv.id = "boardPixel";
    sketchBoard.append(newDiv);
  }
  divNum = parseInt(divNum);
  var root = document.querySelector(":root");
  root.style.setProperty("--divNum", divNum);
  let pixels = document.querySelectorAll("[id='boardPixel']");
  pixels.forEach((item) => {
    item.style.backgroundColor = "white";
  });
  pixels.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = colorVar;
    });
  });
}
