function addingEventListener(){ 

const input = document.getElementById('button');

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);
undefined
input.addEventListener('click', function() {
    alert('I was clicked!');})
}
