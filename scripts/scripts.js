//define cat to be clicked
const cats = document.getElementsByClassName('cat');
//define cat names in array
const catNames = ['Meowster', 'Claws']

//numClicks is the counter that will increment when a cat is clicked
let numClicks = 0;

//this is the event listener for a click on any .cat element
for (c=0; c<cats.length; c++) {
	cats[c].addEventListener('click', function(event) {
		numClicks++;
		document.getElementById('counter').innerText = 'Click Count: ' + numClicks;
		
	});
}
