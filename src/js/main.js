const body = document.querySelector('body');
const html = document.querySelector('html');
const header = document.querySelector('.header');
const navBtn = document.querySelector('.nav__btn');

(function(){
    const elems = document.querySelectorAll(".header__has-sub-menu");

    elems.forEach((elem) =>
    elem.addEventListener("click", function () {
    if (this.classList.contains("active")) {
        elems.forEach((elem) => elem.classList.remove("active"));
    } else {
        elems.forEach((elem) => elem.classList.remove("active"));
        this.classList.add("active");
    }
    })
    );
}());


@@include('modules/nav.js')
@@include('modules/fixed-header.js')
