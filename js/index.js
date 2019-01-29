// Your code goes here

const h2 = document.querySelectorAll('h2');
const imageRound = document.querySelector('.rounded');
const container = document.querySelector('.home');
const aNav = document.querySelectorAll('a');
const h1 = document.querySelector('h1');
const allImg = document.querySelectorAll('img');
//const contentSection=document.querySelector('.content-section');
const title = document.querySelector('.titleDoc');

//function that return a random color
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

//random color for all h2 in the page when 'mouseover' on h2 -----  center h2 on click
h2.forEach((item) => {
	item.addEventListener('mouseover', function() {
		let c = getRandomColor();
		item.style.color = c;
		//item.style.color='green';
	});
	item.addEventListener('click', (event) => {
		event.target.style.textAlign = 'center';
	});
});

//added random color on all a tag when hover over container
container.addEventListener('mousemove', colorRandom);
function colorRandom() {
	aNav.forEach((item) => {
		let randomColor = getRandomColor();
		item.style.color = randomColor;
	});
}

//adding mouseover and mouseout event listeners on h1
h1.addEventListener('mouseover', (event) => {
	event.target.textContent = 'Lambda School DOM II';
	event.target.style.color = 'purple';
});

h1.addEventListener('mouseout', (event) => {
	event.target.textContent = 'Lambda School Fun Bus';
	event.target.style.color = 'red';
});

//adding a keydown event on window
window.addEventListener('keydown', checkKeyPress);

const textContent = document.querySelectorAll('.text-content');
console.log(textContent[0]);

function checkKeyPress(key) {
	if (key.keyCode == '65') {
		alert("The 'a' letter key has been pressed.");
	}

	if (key.keyCode == '82') {
		textContent[0].style.backgroundColor = 'red';
	}
	if (key.keyCode == '87') {
		textContent[0].style.backgroundColor = 'white';
	}
	if (key.keyCode == '66') {
		textContent[0].style.backgroundColor = 'blue';
	}
	if (key.keyCode == '86') {
		textContent[0].style.backgroundColor = 'violet';
	}
}

//alert when a paragraph is copied
const p = document.querySelectorAll('p');
p.forEach((item) => {
	item.addEventListener('copy', function() {
		alert('Warning, a paragraph is copied');
	});
});

//promp an imput box when buttons are pressed
const allButtons = document.querySelectorAll('.btn');
allButtons[1].addEventListener('click', prompMessage);

function prompMessage() {
	let name = prompt('Enter your name');
	console.log(name + 'you are sign out');
	h1.textContent = name;
}

const navContainer = document.querySelector('nav');
const body = document.querySelector('body');

// ADDS AN ALERT WHEN THE USER FIRST SCROLLS WITH THE MOUSE WHEEL BUT THEM REMOVES THAT EVENT SO THEY CAN ACTUALLY NAVIGATE THE SITE
body.addEventListener('wheel', function alertMeOnce() {
	alert('WEEEEEEEEEEEE!!!!!!');
	body.removeEventListener('wheel', alertMeOnce);
});

const funBusBanner = document.querySelector('.intro > img');

// DRAG THE FUN-BUS INTRO IMAGE TO SCALE IT
funBusBanner.addEventListener('drag', (e) => (e.target.style.transform = 'scale(1.5)'));

// ON DOCUMENT LOAD AN ALERT WILL APEAR TELLING THE USER THE 9 OTHER THINGS THEY CAN DO WITH THE SITE
window.addEventListener('load', function alertOnLoad(event) {
    alert(' Hello Folks -All resources finished loading  No intruction ');
    window.removeEventListener('load',alertOnLoad);
});

//EXPERIMENT

const signUpButton1 = document.querySelector('.btn');
const signUpButton1Div = document.querySelector('.destination');

// ADDED CONSOLE LOG FOR WHEN FUN IN THE SUNS DIV IS CLICKED
signUpButton1Div.addEventListener('click', (e) => {
	console.log('div-clicked');
});

// STOPPING THE BUBBLING OF DIV CLICKED CONSOLE LOG
signUpButton1.addEventListener('click', (e) => {
	console.log('signup 1 clicked');
	e.stopPropagation();
});

const paragraph = document.querySelectorAll('p');
window.addEventListener('resize', (e) => {
	//alert("OUCHHHH!!!!")
	console.log('NOOOO! don.t make me small');
});

//RIGHT CLICK ON FOOTER IT WILL CHANGE THE COLLOR
const footer=document.querySelector('footer');
footer.addEventListener('contextmenu', function() {
	event.target.style.color = 'dodgerblue';
});


//// Try


