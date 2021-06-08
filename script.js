const list = document.querySelector('#show-brew');
const input = document.querySelector('input');
const button = document.querySelector('button');

// create event listener for button
function showBrew(e) {
  e.preventDefault();
// create li
  const addToList = document.createElement('li');
  
//set li innertext
  addToList.innerText = input.value
//append li to ul
  list.appendChild(addToList);
}

button.addEventListener('click', showBrew);