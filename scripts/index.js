// получаем доступ к контейнеру
var container = document.querySelector('.container');
// получили значение ползунка
var rangeslider = document.getElementById("idinput"); 
// получили доступ к блокам
var blockRed = document.getElementById("block1"); 
var blockBlue = document.getElementById("block2"); 
var p = document.querySelector('p');
// выводим значение ползунка на экран, хотя не обязательно
var output = document.getElementById("demo"); 
output.innerHTML = rangeslider.value; 
//меняем фон экрана при смене значения ползунка
rangeslider.oninput = function() { 
  output.innerHTML = this.value; 
  change(rangeslider);
  blockRed.style.transform = `translate(${this.value}`+ 'px,0)';
  blockBlue.style.transform = `translate(-${this.value}`+ 'px,0)';
} 

//функция смены цвета фона при движении ползунка
function change(rangeslider){
    if(rangeslider.value == 0){
        changeBackground('white');
    }
    if(rangeslider.value == 250){
        changeBackground('gray');
    }
    if(rangeslider.value == 500){
        changeBackground('black');
        output.style.color = 'white';
        p.style.color = 'white';
    }
}
//функция смены цвета фона
function changeBackground(color) {
    container.style.background = color;
 }





