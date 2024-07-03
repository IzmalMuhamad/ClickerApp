const num = document.getElementById("counter");
let counter = 0;

function increment(){
  counter++;
  num.textContent = counter;
}

function decrement(){
  counter--;
  num.textContent = counter;
}

function reset(){
  counter = 0;
  num.textContent = counter;
}