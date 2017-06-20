/* jshint esversion: 6*/
let pixelPainter = document.getElementById("pixelPainter");
function generateGrid (numRows, numCols){
  let grid = document.createElement("div");

  //document.getElementById("div").className = "grid";
  for(let i = 0; i < numRows; i++){
    let rows = document.createElement("div");
    grid.appendChild(rows);
    //rows.className = "rows";
    for(let j = 0; j < numCols; j++){
      let cells = document.createElement("div");
      //cells.className = "cells";
      rows.appendChild(cells);
    }
  }
  pixelPainter.appendChild(grid);
}
generateGrid(5,4);
