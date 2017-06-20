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

function generateGrid (numRows, numCells, nodeAttribute){
  function name (node, attribute){
    let atr = Object.keys(attribute);
    for ( let i = 0; i < atr.length; i++){
      node.setAttribute(atr[i], attribute[atr[i]]);
    }
  }

  let grid = document.createElement("div");
  grid.className = "grid";
  for(let i = 0; i < numRow; i++){
    let rows = document.createElement("div");
    grid.appendChild(rows);
    rows.className = "rows";
    for(let j = 0; j < numCells; j++){
      let cells = document.createElement("div");
      cells.className = "cells";
      rows.appendChild(cells);
    }
  }
  return grid;
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
      colorCells.setAttribute('style', 'background-color:' + colors[i].hex);
      colorRows.appendChild(colorCells);
    }
  }
  leftDiv.appendChild(colorGrid);
}

generateColorGrid(5,1);
//generateGrid(5,5);
