const formSubmit = document.querySelector('#form');
const inputRows = document.querySelector('[name="rows"]');
const inputCols = document.querySelector('[name="columns"]');
const table = document.querySelector('#table');

let rows = 0;
let columns = 0;

formSubmit.addEventListener('submit', (ev) => {
  ev.preventDefault();
  rows = inputRows.value;
  columns =  inputCols.value;
  //clearGrid();
  makeGrid(rows, columns);
});

const makeGrid = (rows, columns) => {

  let numOfRows = document.querySelectorAll('#tableRow').length;

  if (numOfRows) {
    while (numOfRows > -1) {
      table.deleteRow(numOfRows - 1);
      numOfRows--;
    }
  }

  for (let i = 0; i < rows; i++) {
    const row = document.createElement('tr');
    row.setAttribute('id', 'tableRow');
    for (let j = 0; j < columns; j++) {
      const square = document.createElement('td');
      row.appendChild(square);
      table.appendChild(row);
    }
  }
};
