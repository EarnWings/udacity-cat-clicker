//define Cat constructor function
function Cat (name, image, source, description) {
	this.name = name;
	this.image = image;
	this.source = source;
	this.description = description;
	this.clicks = 0;
	this.updateClicks = function() {
		this.clicks++;
	}
}

//create 5 cat objects
let cat1 = new Cat("Meowster", "lap-cat-638x404.jpg", "https://www.freeimages.com/photo/lap-cat-1243719", "lap cat");

let cat2 = new Cat("Claws", "basket_cat-639x920.jpg", "https://www.freeimages.com/photo/cat-1377061", "cat in basket");

let cat3 = new Cat("Puff", "sweet-cat-640x480.jpg", "https://www.freeimages.com/photo/sweet-cats-2-1563060", "sweet cat");

let cat4 = new Cat("Ziggy", "ziggy-the-cat-639x425.jpg", "https://www.freeimages.com/photo/ziggy-the-cat-1400927", "Ziggy the cat");

let cat5 = new Cat("Yuki", "yuki-the-cat-640x480.jpg", "https://www.freeimages.com/photo/yuki-the-cat-1410294", "Yuki the cat");

//put cat objects in an array for use in building the page
const catArray = [cat1, cat2, cat3, cat4, cat5];

//define body element as variable
const body = document.querySelector('body');

//create nav menu elements in preperation for loop of cat objects
const menu = document.createElement('nav');
const list = document.createElement('ul');
menu.appendChild(list);
body.appendChild(menu);

//loop through the catArray and create the menu 
catArray.forEach(function(cat) {
	const menuItem = document.createElement('li');
	const catName = document.createTextNode(cat.name);
	menuItem.appendChild(catName);
	document.querySelector('ul').appendChild(menuItem);
});

//define menuItems
const menuItems = document.querySelectorAll('li');
//loop through the menu items and add ids (cat.name)
menuItems.forEach(function(item) {
	item.setAttribute('id', item.innerText);
});

const imageDiv = document.createElement('div');
body.appendChild(imageDiv);
const catDiv = document.querySelector('div');

//event listner on the menu
menu.addEventListener('click', function(event) {
	//determine which cat was clicked
	let catName = event.target.getAttribute('id');
	//remove any previous cat image from the screen
	catDiv.innerHTML = "";
	//create new image tag for the cat that was clicked
	let imageTag = document.createElement('img');
	//create new header tag for the cat that was clicked
	const imageHeader = document.createElement('h2');
	//add the header tag to the page
	catDiv.appendChild(imageHeader);
	//add the image tag to the page
	catDiv.appendChild(imageTag);
	//create a counter paragraph tag and append to catDiv
	const counterPara = document.createElement('p');
	catDiv.appendChild(counterPara);
	//add cat name to image header
	const header = document.querySelector('h2');
	//TODO: determine catID by catName (loop through array & if name === name)
	let catID;
	catArray.forEach(function(cat) {
		if (cat.name === catName) {
			catID = cat;
		}
	});
	header.innerText = catID.name; 
	//add image tag attributes for cat picture
	const catImage = document.querySelector('img');
	const catURL = 'img/' + catID.image; 
	catImage.setAttribute('src', catURL);
	catImage.setAttribute('alt', catID.description); 
	//add click counter for selected cat
	catImage.addEventListener('click', function(e) {
		catID.updateClicks(); 
		clickCounter.innerText = 'Click Count: ' + catID.clicks;
	});
	const clickCounter = document.querySelector('p');
	clickCounter.innerText = 'Click Count: ' + catID.clicks;
});