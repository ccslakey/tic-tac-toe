// wait for the DOM to finish loading
window.addEventListener('load', function () {
  resetButton();
  boxesListen();

});
/*MINIMUM FEATURE REQUIREMENTS
	
-After a cell is clicked, use javascript to add a class to display separate colors
*/
var mover = "x";
var moveChanger = function(){
  if (mover ==="x"){
    mover="o";
}
  else {
    mover = "x";
}
return mover
};  
var moveColor = function(){
  if(mover==="x"){
    colorer = 'blue'  
  }
  else {
    colorer = 'red'
  }
  return colorer
};
/* trying to get elements by class name. how to get them into an array?
var boxes = document.getElementsByClassName('box')
  for(var i=0; i<boxes.length-1; i++){
  boxes[i].addEventListener('click' , function (event){
      boxes[i].innerHTML = mover;
      boxes[i].style.backgroundColor = moveColor();
})};
*/
var boxesListen = function(){
///this might be able to be cleaned up using getElementsByClass and an iterator
	var box1 = document.querySelector('#box1');
    box1.addEventListener('click' , function (event){
    box1.innerHTML = mover;
    box1.style.backgroundColor = colorer;
    moveChanger();
    moveColor();
})
    var box2 = document.querySelector('#box2');
    box2.addEventListener('click' , function (event){
    box2.innerHTML = moveChanger();
    box2.style.backgroundColor = colorer;
    moveChanger();
    moveColor();
})
    var box3 = document.querySelector('#box3');
    box3.addEventListener('click' , function (event){
    box3.innerHTML = moveChanger();
    box3.style.backgroundColor = colorer;
    moveChanger();
    moveColor();
})
  	var box4 = document.querySelector('#box4');
  	box4.addEventListener('click' , function (event){
  	box4.innerHTML = moveChanger();
    box4.style.backgroundColor = colorer;
    moveChanger();
    moveColor();
})
  	var box5 = document.querySelector('#box5');
  	box5.addEventListener('click' , function (event){
  	box5.innerHTML = moveChanger();
    box5.style.backgroundColor = colorer;
    moveChanger();
    moveColor();
})
  	var box6 = document.querycolorerSelector('#box6');
  	box6.addEventListener('click' , function (event){
  	box6.innerHTML = moveChanger();
    box6.style.backgroundColor = colorer;
    moveChanger();
    moveColor();
})
  	var box7 = document.querySelector('#box7');
  	box7.addEventListener('click' , function (event){
  	box7.innerHTML = moveChanger();
    box7.style.backgroundColor = colorer;
    moveChanger();
    moveColor();
})
  	var box8 = document.querySelector('#box8');
  	box8.addEventListener('click' , function (event){
  	box8.innerHTML = moveChanger();
    box8.style.backgroundColor = colorer;
    moveChanger();
    moveColor();
})
  	var box9 = document.querySelector('#box9');
  	box9.addEventListener('click' , function (event){
  	box9.innerHTML = moveChanger();
    box9.style.backgroundColor = colorer;
    moveChanger();
    moveColor();
})
};
var resetButton = function(){
   var reseter = document.querySelector('button');
   reseter.addEventListener('click' , function (event){
    box1.innerHTML = 'reset';
    box1.style.backgroundColor = 'white';
    box2.innerHTML = 'reset';
    box2.style.backgroundColor = 'white';
    box3.innerHTML = 'reset';
    box3.style.backgroundColor = 'white';
    box4.innerHTML = 'reset';
    box4.style.backgroundColor = 'white';
    box5.innerHTML = 'reset';
    box5.style.backgroundColor = 'white';
    box6.innerHTML = 'reset';
    box6.style.backgroundColor = 'white';
    box7.innerHTML = 'reset';
    box7.style.backgroundColor = 'white';
    box8.innerHTML = 'reset';
    box8.style.backgroundColor = 'white';
    box9.innerHTML = 'reset';
    box9.style.backgroundColor = 'white';
})
};