//define cat to be clicked
const cat = document.getElementById('cat');

//numClicks is the counter that will increment when cat is clicked
let numClicks = 0;

//this is the event listener for a click on the #cat element
cat.addEventListener('click', function(event) {
	numClicks++;
	document.getElementById('counter').innerText = 'Click Count: ' + numClicks;
	console.log(numClicks);
});
