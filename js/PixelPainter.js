/* jshint esversion: 6*/

let colors = [
{hex : '#000'},
{hex : '#fff'},
{hex : '#ff0000'},
{hex: '#ffb6c1'},
{hex: '#66cdaa'}
];

let pixelPainter = document.getElementById("pixelPainter");
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
      cols.appendChild(cells);
    }
  }
  pixelPainter.appendChild(grid);
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
      colorCells.setAttribute('style', 'background-color:' + colors[i].hex);
      colorCols.appendChild(colorCells);
    }
  }
  pixelPainter.appendChild(colorGrid);
}

generateColorGrid(5,1);
generateGrid(5,5);
