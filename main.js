var start =document.querySelector(".start");
var startGame =document.querySelector(".start-game ");
var urName =document.querySelector(".ur-name");
var inputName =document.querySelectorAll(".ur-name input")[0];
var bk = document.querySelector(".start")
var gameBlocks = document.querySelector(".game-blocks")
var blocks = Array.from( gameBlocks.children);
let numberflipped=[]; 

console.log( blocks)

let play = document.querySelector(".playAgain")


  blocks.forEach((block)=>{
    block.classList.add("is-flipped");
    start.style.background = "rgb(55, 55, 206 , 1)"
    setTimeout(()=> {
      block.classList.remove("is-flipped");
      start.style.background = "rgb(55, 55, 206 , 0.8)"
    },1000)  })

    
document.querySelector(".start-game span").onclick = function(){
    startGame.classList.add("close");
    urName.classList.remove("close");
}

document.getElementById("buttonStart-2").onclick= function(){
  let level = document.querySelector('input[type="radio"]:checked');
console.log(level.value);


let theName = inputName.value;
urName.remove();
start.remove();
if(theName === "" || theName === null || theName.length > 25)
document.querySelector(".name span").innerHTML = "player"
else
document.querySelector(".name span").innerHTML = theName;

let conter = setInterval(timedown ,1000);

if(level.value === "easy"){
  blocks.forEach((block)=>{
    block.classList.add("is-flipped");
    setTimeout(()=> {
      block.classList.remove("is-flipped");
    },3000)  })
  
}else if(level.value === "medium"){
  blocks.forEach((block)=>{
    block.classList.add("is-flipped");
    setTimeout(()=> {
      block.classList.remove("is-flipped");
    },1000)  })
}else{

}}

 function timedown(){
  
  seconds = parseInt(time.innerHTML);
  if(seconds > 10 ){
    time.innerHTML = seconds - 1;
   
  }else if(seconds <= 10 && seconds > 0){
  time.innerHTML = seconds - 1;
  divtime.innerHTML = `Time 0:0${time.innerHTML}`
  divtime.classList.add("ten-seconds");
  }else if(seconds === 0){
    Lost();
  }}
  

document.querySelector(".name span").onclick=()=>{
  blocks.forEach((block)=>{
    clickk(block)
    setTimeout(()=> {
      block.classList.remove("flipUp");
    },2000)  })
}

console.log("1",gameBlocks);
var k1= -1;

blocks.forEach((block , index)=>{
    block.style.order = index;
    block.addEventListener("click" , function(){
        clickk(block);     
        
console.log(k1)
numberflipped[++k1] = block;
console.log(k1)


console.log("before-length",numberflipped.length) 
if(numberflipped.length === 1){

  stopclick(numberflipped[k1])

  setTimeout(()=>{
    numberflipped[k1].classList.remove("flipUp");
    k1=-1;
  },1000)
  
}
if(numberflipped.length === 2){
  stopclicks();
  flippedBlocks(numberflipped[k1] , numberflipped[--k1])
  numberflipped.splice(0,2);

  k1=-1;
}


})})

let numbersTriesWrong = document.querySelector(".wrong-tries span");
let numbersTries = document.querySelector(".tries span");


function timedown(){
if(numbersTries.innerHTML == 10 || numbersTriesWrong.innerHTML >= 25){
  clearInterval(conter);
}else{
  seconds = parseInt(time.innerHTML);
  if(seconds > 10 ){
    time.innerHTML = seconds - 1;
   
  }else if(seconds <= 10 && seconds > 0){
  time.innerHTML = seconds - 1;
  divtime.innerHTML = `Time 0:0${time.innerHTML}`
  divtime.classList.add("ten-seconds");
  }else if(seconds === 0){
    Lost();
  }}}
  


function flippedBlocks(firstBlock , secondBlock){
 
  if(firstBlock.dataset.animal ===  secondBlock.dataset.animal){
    
    firstBlock.classList.remove("flipUp");
    secondBlock.classList.remove("flipUp");
    firstBlock.classList.add("is-flipped" , "no-click" ,"flash")
    secondBlock.classList.add("is-flipped","no-click","flash")

    numbersTries.innerHTML = parseInt( numbersTries.innerHTML)+1;

    if(numbersTries.innerHTML == 10){
      Win();
    }
  }else{

  setTimeout(()=>{
    firstBlock.classList.remove("flipUp");
    secondBlock.classList.remove("flipUp");
    
    numbersTriesWrong.innerHTML = parseInt( numbersTriesWrong.innerHTML)+1;
    if(numbersTriesWrong.innerHTML >= 20 && numbersTriesWrong.innerHTML < 25){
      document.querySelector(".wrong-tries").classList.add("wrong-20")
    }else if( numbersTriesWrong.innerHTML >= 25){
      Lost();
    }
  
  },600)
}
}

function stopclicks(){
  gameBlocks.classList.add("no-clicking");
  setTimeout(()=> {
    gameBlocks.classList.remove("no-clicking");
  },600)
}

function stopclick(block){
  block.classList.add("no-clicking");
  setTimeout(()=> {
   block.classList.remove("no-clicking");
  },1000)
}
let randomm =[]
for(var k=0; k<1000; k++)
 randomm[k] = Math.floor(Math.random() * blocks.length);
let newrandom = new Set(randomm);
var ran = Array.from(newrandom)

for(var k=0; k<blocks.length; k++){  
blocks[k].style.order = ran[k];
}

function clickk(block){
block.classList.add("flipUp");
}



var divtime = document.querySelector(".time")
var time = document.querySelector(".time span");


let win = document.querySelector(".win");
let bkWin = document.querySelector(".bk-win");


let lost =  document.querySelector(".lost");
let bkLost =  document.querySelector(".bk-lost");



function Win(){
  win.classList.remove("close");
  bkWin.classList.remove("close");
  }
  
  
  function Lost(){
    lost.classList.remove("close");
    bkLost.classList.remove("close");
    
   
  }
 
