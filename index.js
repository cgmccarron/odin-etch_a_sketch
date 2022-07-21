let sketchBoard = document.getElementById("board");
let input = document.getElementById("input");
input.addEventListener("change", updateDivNum);
function updateDivNum(e) {
  console.log("updaing");
  divNum = e.target.value;
  for (i = 0; i < divNum ** 2 - 1; i++) {
    let newDiv = document.createElement("div");
    newDiv.id = "boardPixel";
    sketchBoard.append(newDiv);
  }
  divNum = parseInt(divNum);
  var root = document.querySelector(":root");
  root.style.setProperty("--divNum", divNum);
}
