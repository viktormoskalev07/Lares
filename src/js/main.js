const body = document.querySelector('body');
const html = document.querySelector('html');
const header = document.querySelector('.header');
const navBtn = document.querySelector('.nav__btn');

@@include('modules/nav.js')
@@include('modules/fixed-header.js')
@@include('modules/dropdown.js')





var formContainer = document.querySelector('#form-container');
var formOverlay = document.querySelector('#form-overlay');
var formButton = document.querySelector('#form-button');


bindFormClick();
//Opening the form
function bindFormClick(){
  formButton.addEventListener('click', function(e) {
      e.preventDefault();
      toggleForm();
      this.classList.toggle('active');
   });
}

//Closing the form
formOverlay.addEventListener('click', function(e) {
   e.stopPropagation();
   e.preventDefault();
   toggleForm();
});

function toggleForm(){
   formContainer.classList.toggle('expand');
   body.classList.toggle('show-form-overlay');
//   $('.form-submitted').classList.remove('form-submitted');
}