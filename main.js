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

let member = "";
for(let i = 0; i < employeeData.length; i++){
  member += '<input class="joinCheck" id="check' + i + '" type="checkbox" name="participants" value=' + i + '>' + employeeData[i];
}
document.querySelector('#member').innerHTML = member;


//参加者
const checkAll = document.querySelector('#checkAll');
const joinCheck = document.querySelectorAll('.joinCheck');

//全員参加にチェックをつけた場合
checkAll.addEventListener("change", function(){
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
  checkbox.addEventListener("change", function(){
    let isChecked = checkbox.checked;
    if(isChecked){
      checkbox.classList.add('checked');
    }else{
      checkbox.classList.remove('checked');
    }
  });
}





