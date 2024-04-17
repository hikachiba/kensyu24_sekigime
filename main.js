import './style.css'

//テーブルフォームを1行追加する
document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("addTableButton");
  addButton.addEventListener("click", addTableForm);
});

function addTableForm() {
  const tableForm = document.createElement("div");
  tableForm.classList.add("tableForm"); 
  tableForm.innerHTML = `
    <label for="seatsPerTable">テーブル：</label>
    <input type="number" id="seatsPerTable" min="1">人掛けの
    <label for="numTables">テーブルが</label>
    <input type="number" id="numTables" min="1">個
  `;
  const tableFormsContainer = document.getElementById("tableForms");
  tableFormsContainer.appendChild(tableForm); 
}
