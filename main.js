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
    <label for="numTables">テーブル：</label>
    <input type="number" class="seatsPerTable" min="1">人掛けのテーブルが
    <input type="number" class="numTables" min="1">個
  `;
  const tableFormsContainer = document.getElementById("tableForms");
  tableFormsContainer.appendChild(tableForm); 
}
