/*jshint esversion: 6*/
let painter = (function() {
  let pixelPainter = document.querySelector("#pixelPainter");
  let cellList = document.getElementsByClassName("cells");
  let elementCols = document.getElementsByClassName("cols");
  let elementCanvas = document.getElementById("canvas");
  let storedColor = "#fff";
  let dragging = null;

//getting rid of magic strings
const CLICK = "click";
const DIV = "div";
const BUTTON = "button";
const MOUSEDOWN = "mousedown";
const MOUSEOVER = "mouseover";
const MOUSEUP = "mouseup";

let header = document.createElement("h1");
header.innerHTML = "Pixel Painter";
pixelPainter.appendChild(header);
document.body.appendChild(pixelPainter);

let innerContainer = document.createElement(DIV);
innerContainer.id = "innerContainer";
pixelPainter.appendChild(innerContainer);

let swatch = document.createElement(DIV);
swatch.id = "swatch";
innerContainer.appendChild(swatch);

let canvas = document.createElement(DIV);
canvas.id = "canvas";
innerContainer.appendChild(canvas);

function toolsDiv() {
  let tools = document.createElement(DIV);
  tools.id = "tools";
  swatch.appendChild(tools);
}

function currentColorDiv() {
  let showCurrentColor = document.createElement(DIV);
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
  let grid = document.createElement(DIV);
  grid.className = "grid";
  for(let i = 0; i < numCols; i++){
    let cols = document.createElement(DIV);
    grid.appendChild(cols);
    cols.className = "cols";
    cols.id = i;
    for(let j = 0; j < numCells; j++){
      let cells = document.createElement(DIV);
      cells.className = "cells";
      cells.id = (100 * i) + j;
      cells.addEventListener(CLICK, coloring);
      cells.addEventListener(MOUSEDOWN, mouseDown);
      cells.addEventListener(MOUSEOVER, mouseOver);
      cells.addEventListener(MOUSEUP, mouseUp);
      cols.appendChild(cells);
    }
  }
  canvas.appendChild(grid);
}

function generateColorGrid (numColorCols, numColorCells){
  let colorGrid = document.createElement(DIV);
  colorGrid.className = "colorGrid";
  for(let i = 0; i < numColorCols; i++){
    let colorCols = document.createElement(DIV);
    colorGrid.appendChild(colorCols);
    colorCols.className = "colorCols";
    for(let j = 0; j < numColorCells; j++){
      let colorCells = document.createElement(DIV);
      colorCells.className = "colorCells";
      colorCells.id = j;
      colorCells.setAttribute("style", "background-color:" + colors[i]);
      colorCols.appendChild(colorCells);
      colorCells.addEventListener(CLICK, storeColor);
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
  let eButton = document.createElement(BUTTON);
  eButton.className = BUTTON;
  tools.appendChild(eButton);
  eButton.innerHTML = "Eraser";
  eButton.addEventListener(CLICK, erase);
}

function clear(event) {
  for(let i = 0; i < cellList.length; i++ ) {
    cellList[i].style.backgroundColor = "#FFF";
 }
}

function clearButton() {
  let cButton = document.createElement(BUTTON);
  cButton.className = BUTTON;
  tools.appendChild(cButton);
  cButton.innerHTML = "Clear";
  cButton.addEventListener(CLICK, clear);
}

function toggleGrid() {
  let toggleHideButton = document.createElement(BUTTON);
  toggleHideButton.className = BUTTON;
  toggleHideButton.id = "toggleHideButton";
  tools.appendChild(toggleHideButton);
  toggleHideButton.innerHTML = "Hide Grid";
  toggleHideButton.addEventListener(CLICK, toggleHide);
}

function toggleHide() {
  if(toggleHideButton.innerHTML === "Hide Grid") {
  for(let i = 0; i < elementCols.length; i++) {
    elementCols[i].style.border = "none";
  }
  for (let j = 0; j < cellList.length; j++) {
    cellList[j].style.border = "none";
  }
    toggleHideButton.innerHTML = "Show Grid";
} else if(toggleHideButton.innerHTML === "Show Grid") {
    for(let i = 0; i < elementCols.length; i++) {
    elementCols[i].style.borderRight = "1px solid #bfbfbf";
  }
  for (let j = 0; j < cellList.length; j++) {
    cellList[j].style.borderBottom = "1px solid #bfbfbf";
  }
  toggleHideButton.innerHTML = "Hide Grid";
}
}

fontLoader();
generateColorGrid(15,1);
toolsDiv();
clearButton();
currentColorDiv();
eraseButton();
toggleGrid();
generateGrid(150,150);

return {
  currentColorDiv : currentColorDiv,
  toolsDiv : toolsDiv,
  fontLoader : fontLoader,
  generateGrid : generateGrid,
  generateColorGrid : generateColorGrid,
  eraseButton : eraseButton,
  clearButton : clearButton,
  toggleGrid : toggleGrid
};

})();