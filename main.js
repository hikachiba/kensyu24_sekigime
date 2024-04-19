import './style.css'

const employeeData = [
  "中川社長",
  "齋藤さん",
  "加来さん",
  "木寺さん",
  "田上さん",
  "下田さん",
  "田崎さん",
  "津田さん",
  "羽根川さん",
  "永盛さん",
  "松川さん",
  "千羽さん",
  "松永さん",
  "松若さん",
  "新井さん",
  "小林さん",
  "金さん",
  "千葉さん",
  "鈴木さん",
];

let member = '';
for(let i = 0; i < employeeData.length; i++){
  member += '<label for="check' + i + '"><input class="joinCheck" id="check' + i + '" type="checkbox" name="participants" value=' + i + '>' + employeeData[i] + '</label>';
}
document.querySelector('#member').innerHTML = member;

//参加者
const checkAll = document.querySelector('#checkAll');
const joinCheck = document.querySelectorAll('.joinCheck');

//全員参加にチェックをつけた場合
checkAll.addEventListener('change', function(){
  let isChecked = checkAll.checked;
  joinCheck.forEach(function(checkbox) {
    checkbox.checked = isChecked;
    if(isChecked){
      checkbox.classList.add('checked');
    }else{
      checkbox.classList.remove('checked');
    }
  });
});

//チェックボックスにチェックがついた人を席決め対象者とする
joinCheck.forEach(function(checkbox) {
  checkParticipants(checkbox);
});

function checkParticipants(checkbox) {
  checkbox.addEventListener('change', function(){
    let isChecked = checkbox.checked;
    if(isChecked){
      checkbox.classList.add('checked');
    }else{
      checkbox.classList.remove('checked');
    }
  });
}

//参加者のみを条件のプルダウンリストに表示する
const setParticipantsBtn = document.querySelector('#setParticipantsBtn');
const distance = document.querySelector('#distance');

setParticipantsBtn.addEventListener('click', showMemberList);

function showMemberList() {

  let pulldown = '';
  let checked = document.querySelectorAll('.checked');
  checked.forEach(function(member) {
    pulldown += '<option value="' + member.value + '">' + employeeData[member.value] + '</option>';
  });

  const newMemberList = document.querySelector('#distance').lastElementChild.querySelectorAll('.memberList');
  newMemberList.forEach(function(element) {
    element.innerHTML = '<option value="null"></option>' + pulldown;
  });
}

//＋ボタンで次の行を追加
const addDistanceBtn = document.querySelector('#addDistanceBtn');
addDistanceBtn.addEventListener('click', function(){
  distance.insertAdjacentHTML('beforeend', '<div><select class="memberList person1"></select>と<select class="memberList person2"></select>を<select id="arrangement"><option value="null"></option><option value="">隣同士にする</option><option value="">同じテーブルにする</option></select></div>');
  showMemberList();
});

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

//「席を決める」ボタンを押した後の処理
const decideSeatsBtn = document.querySelector('#decideSeatsBtn');
decideSeatsBtn.addEventListener('click', showTables);

function showTables() {
  //テーブルの定員と個数を二次元配列に格納
  let seatsPerTable = document.querySelectorAll('#seatsPerTable');
  let numTables = document.querySelectorAll('#numTables');
  let numTablesList = []; 
  for(let i = 0; i < numTables.length; i++){
    numTablesList.push([seatsPerTable[i].value, numTables[i].value]);
  }

  //入力された定員・個数のテーブルを出力
  let result = '';
  for(let i = 0; i < numTablesList.length; i++){
    for(let j = 0; j < numTablesList[i][1]; j++){
      result += '<div class="resultTable">';
      for(let k= 0; k < numTablesList[i][0]; k++){
        if(k % 2 === 0){
          result += '<span class="table">a</span>';
        }else{
          result += '<span class="table">a</span><br>';
        }
      }
      result += '</div><br>';
    }
  }
  
  document.querySelector('#result').innerHTML = result;
  showRandomParticipant();
}

