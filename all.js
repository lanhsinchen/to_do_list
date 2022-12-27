const txt = document.querySelector('.txt');
const save = document.querySelector('.save');
const list = document.querySelector('.list');
let data = [];
function renderData(){
  let str = '';
  data.forEach(function(item,index){
    str += `
    <li>${item.content}<input class="delete" data-num="${index}" type="button" value="刪除待辦"></li>
    `
    const list = document.querySelector('.list');
  })
    list.innerHTML = str;
}
//新增待辦功能
save.addEventListener('click', function(e){
  if(txt.value == ''){
    alert('請輸入內容')
    return;
  }
  let obj = {};
  obj.content = txt.value
  data.push(obj);
  renderData();
  txt.value = '';
})


//刪除待辦功能
list.addEventListener('click', function(e){
  //console.log(e.target.nodeName);
  if(e.target.getAttribute('class') !== 'delete'){
    //alert('沒有點擊到')
    return;
  }
  let num = e.target.getAttribute('data-num');
  console.log(num);
  data.splice(num,1);
  renderData();
})


