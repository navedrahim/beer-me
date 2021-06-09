const list = document.querySelector('#show-brew');
const input = document.querySelector('input');
const button = document.querySelector('button');
// make an axios call and console log result
// make a callback function that can take the data and attach it to the DOM
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