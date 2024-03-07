const button = document.getElementById('dots')
if (button) {
	const menu = document.querySelector('.navigation')
	button.addEventListener("click", function(){
		button.classList.toggle('active')
		menu.classList.toggle('opened')
	})
}

