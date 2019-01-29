// Your code goes here


const h2 = document.querySelectorAll('h2');
const imageRound = document.querySelector('.rounded');
const container = document.querySelector('.home');
const aNav = document.querySelectorAll('a');
const h1 = document.querySelector('h1');
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