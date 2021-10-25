/*========= Modal ==========*/
function modalsInit(modal) {
	const modalCall = document.querySelector('[data-modal]')
	const modalClose = document.querySelector('[data-close]')
	const modalDialog = document.querySelector('.modal-dialog')

	// Modal Call
	modalCall.addEventListener('click', function (event) {
		event.preventDefault()

		let modalId = document.querySelector(this.dataset.modal)
		modalId.classList.add('show')
		body.classList.add('no-scroll')

		// Set Timeout for CSS Animation
		setTimeout(function () {
			modalDialog.style.transform = 'scale(1)'
		}, 180)
	})

	// Modal Close
	modalClose.addEventListener('click', function (event) {
		event.preventDefault()

		let modalParent = this.closest('.modal')
		modalDialog.style.transform = 'scale(0)'

		// Set Timeout for CSS Animation
		setTimeout(function () {
			modalParent.classList.remove('show')
			body.classList.remove('no-scroll')
		}, 180)
	})

	// Modal Close (click to bg)
	modal.addEventListener('click', function () {
		modalDialog.style.transform = 'scale(0)'

		// Set Timeout for CSS Animation
		setTimeout(function () {
			modal.classList.remove('show')
			body.classList.remove('no-scroll')
		}, 180)
	})

	modalDialog.addEventListener('click', function (event) {
		event.stopPropagation()
	})
}

if (document.querySelector('.modal')) {
	const modal = document.querySelector('.modal')
	modalsInit(modal)
}
/*========= Modal END ==========*/
