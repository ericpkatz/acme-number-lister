let inputForm = document.querySelector('#inputForm');
let numbersList = document.querySelector('#numbersList');
let numberInput = document.querySelector('#numberInput');

function generateRandom(){
  return Math.ceil(Math.random() * 10);

}

inputForm.addEventListener('submit', function(ev){
  ev.preventDefault();
  let li = document.createElement('li');
  let num = numberInput.value;
  if(num === ''){
    num = generateRandom();
  }
  li.innerText = num;
  numbersList.appendChild(li);
  numberInput.value = '';
});
