/* jshint esversion: 6*/
let pixelPainter = document.querySelector("#pixelPainter");

let title = document.createElement("div");
title.id = "title";
let leftDiv = document.createElement("div");
leftDiv.id = "leftDiv";
let rightDiv = document.createElement("div");
rightDiv.id = "rightDiv";
pixelPainter.appendChild(title);
title.appendChild(leftDiv);
title.appendChild(rightDiv);

let colors = ['#000',
'#fff',
'#ff0000',
'#ffb6c1',
'#66cdaa'
];


function generateGrid (numRows, numCells){
  let grid = document.createElement("div");
  grid.className = "grid";
  for(let i = 0; i < numRows; i++){
    let rows = document.createElement("div");
    grid.appendChild(rows);
    rows.className = "rows";
    for(let j = 0; j < numCells; j++){
      let cells = document.createElement("div");
      cells.className = "cells";
      cells.id = j;
      cells.addEventListener("click", clickFunction(event));
      rows.appendChild(cells);
    }
  }
  rightDiv.appendChild(grid);
}


function generateColorGrid (numColorRows, numColorCells){
  let colorGrid = document.createElement("div");
  colorGrid.className = "colorGrid";
  for(let i = 0; i < numColorRows; i++){
    let colorRows = document.createElement("div");
    colorGrid.appendChild(colorRows);
    colorRows.className = "colorRows";
    for(let j = 0; j < numColorCells; j++){
      let colorCells = document.createElement("div");
      colorCells.className = "colorCells";
      colorCells.id = j;
      colorCells.setAttribute('style', 'background-color:' + colors[i]);
      colorRows.appendChild(colorCells);
      colorCells.addEventListener("click", storeColor(event));
    }
  }
  leftDiv.appendChild(colorGrid);
}


function storeColor(event) {
  storedColor = event.target.style.backgroundColor;
  console.log(storedColor);
}

function clickFunction(event) {

}



generateColorGrid(5,1);
generateGrid(5,5);






// function selectColor() {
//   let selectedColor = event.target.style.backgroundColor;
// }

// let colorCellVar = document.querySelectorAll(".colorCells");
// //adding on click event listener to colorgrid
// colorCellVar.forEach.call(colorCells, function(colorCell) {
//   colorCell.addEventListener("click", selectColor());
// });