//define cat to be clicked
const cats = document.getElementsByClassName('cat');
const body = document.querySelector('body');
//define cat names in array
const catNames = ['Meowster', 'Claws']

//numClicks is the counter that will increment when a cat is clicked
let numClicks = 0;

//define updateClicks function
function updateClicks() {
	document.getElementById('counter').innerText = 'Click Count: ' + numClicks;
}

//this is the event listener for a click on any .cat element
for (c=0; c<cats.length; c++) {
	cats[c].addEventListener('click', function(event) {
		numClicks++;
		updateClicks();
	});
	const catName = document.createTextNode(catNames[c]);
	const newHeader = document.createElement('h2');
	newHeader.appendChild(catName);
	body.insertBefore(newHeader, cats[c]);
}
updateClicks();
