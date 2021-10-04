//dropdown
function dropdown() {
	const drop = document.querySelector('.sub-menu-toggle')
	if (drop) {
		drop.addEventListener('click', function () {
			drop.classList.toggle('active')
		})
	}
}
dropdown()
