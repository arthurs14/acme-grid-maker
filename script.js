const formSubmit = document.querySelector('#form');
const inputRows = document.querySelector('[name="rows"]');
const inputCols = document.querySelector('[name="columns"]');
const table = document.querySelector('#table');

let rows = 0;
let columns = 0;

let rowIdx = 0;
let colIdx = 0;


const makeGrid = (rows, columns) => {

  let numOfRows = document.querySelectorAll('#tableRow').length;
  let grid = [];

  if (numOfRows) {
    while (numOfRows > -1) {
      table.deleteRow(numOfRows - 1);
      numOfRows--;
    }
  }

  for (let i = 0; i < rows; i++) {
    const row = document.createElement('tr');
    let gridRow = []
    row.setAttribute('id', 'tableRow');
    for (let j = 0; j < columns; j++) {
      const square = document.createElement('td');
      row.appendChild(square);
      table.appendChild(row);
      gridRow.push(row);
    }
    grid.push(gridRow);
  }
  return grid;
};

const squareClicked = (ev) => {
  if (event.target.className !== "") {
    event.target.className = "";
  } else {
    event.target.className = "red";
    // rowIdx = grid.indexOf();
    // console.log(rowIdx);
  }
};

formSubmit.addEventListener('submit', (ev) => {
  ev.preventDefault();
  rows = inputRows.value;
  columns =  inputCols.value;
  mainGrid = makeGrid(rows, columns);
  console.log(mainGrid);
});

table.addEventListener('click', squareClicked);

