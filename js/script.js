let button = document.getElementById('dots')
let menu = document.querySelector('.navigation')

addEventListener("click", menuBurger)

function menuBurger() {
	button.classList.toggle('active')
	menu.classList.toggle('opened')
} 