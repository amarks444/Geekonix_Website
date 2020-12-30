const nav = document.querySelector('#nav1');
const menu = document.querySelector('#menu1');
const menuToggle = document.querySelector('.nav__toggle1');
let isMenuOpen = false;


// TOGGLE MENU ACTIVE STATE

menuToggle.addEventListener('click', e => {
  
  e.preventDefault();
  isMenuOpen = !isMenuOpen;
  
  // toggle a11y attributes and active class
  menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
  // menu.hidden = !isMenuOpen;
  nav.classList.toggle('nav--open1');
});


//document.querySelector('#nav1').classList.toggle('nav--open1');

// TRAP TAB INSIDE NAV WHEN OPEN
nav.addEventListener('keydown', e => {
  // abort if menu isn't open or modifier keys are pressed
  if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
    return;
  }
  
  // listen for tab press and move focus
  // if we're on either end of the navigation
  const menuLinks = menu.querySelectorAll('.nav__link1');
  if (e.keyCode === 9) {
    if (e.shiftKey) {
      if ( document.activeElement === menuLinks[0] ) {
        menuToggle.focus();
        e.preventDefault();
      }
    } else if ( document.activeElement === menuToggle ) {
      menuLinks[0].focus();
      e.preventDefault();
    }
  }
});

// const menuLink = document.getElementsByClassName('nav__link1');
// menuLink.addEventListener('click', e => {
//   // e.preventDefault();
//   // isMenuOpen = !isMenuOpen;
  
//   // // toggle a11y attributes and active class
//   // menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
//   // menu.hidden = !isMenuOpen;
//   // nav.classList.toggle('nav--open1');
//   var x = document.getElementById("menu1");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// });