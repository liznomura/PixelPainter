/*jshint esversion: 6*/
let painter = (function() {
let pixelPainter = document.querySelector("#pixelPainter");
let cellList = document.getElementsByClassName("cells");
let storedColor = "#fff";
let dragging = null;

let header = document.createElement("h1");
header.innerHTML = "Pixel Painter";
pixelPainter.appendChild(header);
document.body.appendChild(pixelPainter);

let innerContainer = document.createElement("div");
innerContainer.id = "innerContainer";
pixelPainter.appendChild(innerContainer);

let swatch = document.createElement("div");
swatch.id = "swatch";
innerContainer.appendChild(swatch);

let canvas = document.createElement("div");
canvas.id = "canvas";
innerContainer.appendChild(canvas);

function toolsDiv() {
  let tools = document.createElement("div");
  tools.id = "tools";
  swatch.appendChild(tools);
}

function currentColorDiv() {
let showCurrentColor = document.createElement("div");
showCurrentColor.id = "showCurrentColor";
tools.appendChild(showCurrentColor);
}

let colors = ["#000", "#fff", "#ff0000 ", "#ffb6c1 ", "#66cdaa ",
"#7f7fff ", "#ff6600 ", "#6600cc ", "#996633 ", "#00ffff ",
"#66ff66 ", "#ffeb99 ", "#ffdad9 ", "#0066ff ", "#808080 "];

let fontLoader = function() {
  let link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";

document.getElementsByTagName("head")[0].appendChild(link);

link.href = "https://fonts.googleapis.com/css?family=Baloo+Bhaina";
};

function generateGrid (numCols, numCells){
  let grid = document.createElement("div");
  grid.className = "grid";
  for(let i = 0; i < numCols; i++){
    let cols = document.createElement("div");
    grid.appendChild(cols);
    cols.className = "cols";
    for(let j = 0; j < numCells; j++){
      let cells = document.createElement("div");
      cells.className = "cells";
      cells.id = j;
      cells.addEventListener("click", coloring);
      cells.addEventListener("mousedown", mouseDown);
      cells.addEventListener("mouseover", mouseOver);
      cells.addEventListener("mouseup", mouseUp);
      cols.appendChild(cells);
    }
  }
  canvas.appendChild(grid);
}

function generateColorGrid (numColorCols, numColorCells){
  let colorGrid = document.createElement("div");
  colorGrid.className = "colorGrid";
  for(let i = 0; i < numColorCols; i++){
    let colorCols = document.createElement("div");
    colorGrid.appendChild(colorCols);
    colorCols.className = "colorCols";
    for(let j = 0; j < numColorCells; j++){
      let colorCells = document.createElement("div");
      colorCells.className = "colorCells";
      colorCells.id = j;
      colorCells.setAttribute("style", "background-color:" + colors[i]);
      colorCols.appendChild(colorCells);
      colorCells.addEventListener("click", storeColor);
    }
  }
  swatch.appendChild(colorGrid);
}

function mouseDown(event) {
  dragging = true;
  this.style.backgroundColor = storedColor;
}

function mouseUp(event) {
  dragging = false;
}

function mouseOver(event) {
  if (dragging === true) {
    this.style.backgroundColor = storedColor;
  } else {
    mouseUp();
  }
}

function storeColor(event) {
  storedColor = event.target.style.backgroundColor;
  showCurrentColor.style.backgroundColor = storedColor;
}

function coloring (event) {
  event.target.style.backgroundColor = storedColor;
}

function erase(event) {
  storedColor = "#FFF";
}

function eraseButton() {
  let eButton = document.createElement("button");
  eButton.className = "button";
  tools.appendChild(eButton);
  eButton.innerHTML = "Eraser";
  eButton.addEventListener("click", erase);
}

function clear(event) {
  for(let i = 0; i < cellList.length; i++ ) {
   cellList[i].style.backgroundColor = "#FFFFFF ";
 }
}

function clearButton() {
  let cButton = document.createElement("button");
  cButton.className = "button";
  tools.appendChild(cButton);
  cButton.innerHTML = "Clear";
  cButton.addEventListener("click", clear);
}

fontLoader();
generateColorGrid(15,1);
toolsDiv();
clearButton();
currentColorDiv();
eraseButton();
generateGrid(100,100);

return {
currentColorDiv : currentColorDiv,
toolsDiv : toolsDiv,
fontLoader : fontLoader,
generateGrid : generateGrid,
generateColorGrid : generateColorGrid,
eraseButton : eraseButton,
clearButton : clearButton
};

})();