let sketchBoard = document.getElementById("board");
let inputNum = document.getElementById("inputNum");
let colorVar = "black";
let inputColor = document.getElementById("inputColor");

inputColor.addEventListener("input", (e) => {
  colorVar = e.target.value;
});

function buttonController(value) {
  switch (value) {
    case "erase":
      updateDivNum;
      break;
    case "rainbow":
      colorVar = "pink";
      break;
  }
}

updateDivNum();

inputNum.addEventListener("change", updateDivNum);

function updateDivNum() {
  console.log("updaing");
  divNum = inputNum.value;
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
