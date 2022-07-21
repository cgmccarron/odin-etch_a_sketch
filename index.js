let sketchBoard = document.getElementById("board");
let inputNum = document.getElementById("inputNum");
let colorVar = "black";
let inputColor = document.getElementById("inputColor");
const rainbowButton = document.getElementById("rainbow");
const greyscaleButton = document.getElementById("greyscale");
let rainbow = false;
let greyscale = false;

const setRainbowBrush = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + randomColor;
};

inputColor.addEventListener("input", (e) => {
  colorVar = e.target.value;
  rainbow = false;
  greyscale = false;
  rainbowButton.style.backgroundColor = "white";
  greyscaleButton.style.backgroundColor = "white";
});

function RGBToHex(rgb) {
  let sep = rgb.indexOf(",") > -1 ? "," : " ";
  rgb = rgb.substr(4).split(")")[0].split(sep);

  let r = (+rgb[0]).toString(16),
    g = (+rgb[1]).toString(16),
    b = (+rgb[2]).toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;
  b = (+rgb[2]).toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;
  return "#" + r + g + b;
}

function adjust(RGBToHex, rgb, amount) {
  let color = RGBToHex(rgb);
  return (
    "#" +
    color
      .replace(/^#/, "")
      .replace(/../g, (color) =>
        (
          "0" +
          Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)
        ).substr(-2)
      )
  );
}

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.value) {
      case "erase":
        updateDivNum();
        break;
      case "rainbow":
        rainbow = !rainbow;
        if (rainbow) {
          rainbowButton.style.backgroundColor = "pink";
          greyscale = false;
          greyscaleButton.style.background = "white";
        } else if (!rainbow) {
          rainbowButton.style.backgroundColor = "white";
        }
        break;
      case "greyscale":
        greyscale = !greyscale;
        if (greyscale) {
          greyscaleButton.style.background = "slategrey";
          rainbow = false;
          rainbowButton.style.backgroundColor = "white";
        } else if (!greyscale) {
          greyscaleButton.style.background = "white";
        }
        break;
    }
  });
});

updateDivNum();

inputNum.addEventListener("change", updateDivNum);

function updateDivNum() {
  divNum = inputNum.value;
  for (i = 0; i < divNum ** 2; i++) {
    let newDiv = document.createElement("div");
    newDiv.id = "boardPixel";
    newDiv.value = 0;
    sketchBoard.append(newDiv);
  }
  divNum = parseInt(divNum);
  var root = document.querySelector(":root");
  root.style.setProperty("--divNum", divNum);
  let pixels = document.querySelectorAll("[id='boardPixel']");
  pixels.forEach((item) => {
    item.style.backgroundColor = "rgb(255, 255, 255)";
  });
  pixels.forEach((item) => {
    item.addEventListener("mouseover", () => {
      if (rainbow === false && greyscale === false) {
        item.style.backgroundColor = colorVar;
      } else if (rainbow === true && greyscale === false) {
        item.style.backgroundColor = setRainbowBrush();
      } else if (greyscale === true && rainbow === false) {
        item.value = item.value++;
        item.style.backgroundColor = adjust(
          RGBToHex,
          item.style.backgroundColor,
          -15
        );
      }
    });
  });
}
