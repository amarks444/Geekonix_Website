// (function ($) {
//   "use strict";

//   //   // Preloader (if the #preloader div exists)
//   $(window).on('load', function () {
//     if ($('#preloader').length) {
//       $('#preloader').delay(100).fadeOut('slow', function () {
//         $(this).remove();
//       });
//     }
//   });

//   // Back to top button
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 100) {
//       $(".back-to-top").fadeIn("slow");
//     } else {
//       $(".back-to-top").fadeOut("slow");
//     }
//   });
//   $(".back-to-top").click(function () {
//     $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
//     return false;
//   });

//   // Initiate the wowjs animation library
//   new WOW().init();

//   // Header scroll class
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 100) {
//       $("#header").addClass("header-scrolled");
//     } else {
//       $("#header").removeClass("header-scrolled");
//     }
//   });

//   if ($(window).scrollTop() > 100) {
//     $("#header").addClass("header-scrolled");
//   }

//   // Smooth scroll for the navigation and links with .scrollto classes
//   $(".main-nav a, .mobile-nav a, .scrollto").on("click", function () {
//     if (
//       location.pathname.replace(/^\//, "") ==
//         this.pathname.replace(/^\//, "") &&
//       location.hostname == this.hostname
//     ) {
//       var target = $(this.hash);
//       if (target.length) {
//         var top_space = 0;

//         if ($("#header").length) {
//           top_space = $("#header").outerHeight();

//           if (!$("#header").hasClass("header-scrolled")) {
//             top_space = top_space - 20;
//           }
//         }

//         $("html, body").animate(
//           {
//             scrollTop: target.offset().top - top_space,
//           },
//           1500,
//           "easeInOutExpo"
//         );

//         if ($(this).parents(".main-nav, .mobile-nav").length) {
//           $(".main-nav .active, .mobile-nav .active").removeClass("active");
//           $(this).closest("li").addClass("active");
//         }

//         if ($("body").hasClass("mobile-nav-active")) {
//           $("body").removeClass("mobile-nav-active");
//           $(".mobile-nav-toggle i").toggleClass("fa-times fa-bars");
//           $(".mobile-nav-overly").fadeOut();
//         }
//         return false;
//       }
//     }
//   });

//   // Navigation active state on scroll
//   var nav_sections = $("section");
//   var main_nav = $(".main-nav, .mobile-nav");
//   var main_nav_height = $("#header").outerHeight();

//   $(window).on("scroll", function () {
//     var cur_pos = $(this).scrollTop();

//     nav_sections.each(function () {
//       var top = $(this).offset().top - main_nav_height,
//         bottom = top + $(this).outerHeight();

//       if (cur_pos >= top && cur_pos <= bottom) {
//         main_nav.find("li").removeClass("active");
//         main_nav
//           .find('a[href="#' + $(this).attr("id") + '"]')
//           .parent("li")
//           .addClass("active");
//       }
//     });
//   });

//   // jQuery counterUp (used in Whu Us section)
//   $('[data-toggle="counter-up"]').counterUp({
//     delay: 10,
//     time: 1000,
//   });

//   // Porfolio isotope and filter
//   $(window).on("load", function () {
//     var portfolioIsotope = $(".portfolio-container").isotope({
//       itemSelector: ".portfolio-item",
//     });
//     $("#portfolio-flters li").on("click", function () {
//       $("#portfolio-flters li").removeClass("filter-active");
//       $(this).addClass("filter-active");

//       portfolioIsotope.isotope({ filter: $(this).data("filter") });
//     });
//   });

//   // Testimonials carousel (uses the Owl Carousel library)
//   $(".testimonials-carousel").owlCarousel({
//     autoplay: true,
//     dots: true,
//     loop: true,
//     items: 1,
//   });
// })(jQuery);

// const boxes = document.querySelectorAll('.about-extra');
// window.addEventListener('scroll', checkBoxes)

// checkBoxes()

// function checkBoxes() {
//     const triggerBottom = window.innerHeight / 5 * 4

//     boxes.forEach(box => {
//         const boxTop = box.getBoundingClientRect().top

//         if(boxTop < triggerBottom) {
//             box.classList.add('show')
//         } else {
//             box.classList.remove('show')
//         }
//     })
// }

// const panels = document.querySelectorAll('.member')

// panels.forEach(panel => {
//     panel.addEventListener('click', () => {

//         removeActiveClasses()
//         panel.classList.add('active')
//     })
// })

// function removeActiveClasses() {
//     panels.forEach(panel => {
//         panel.classList.remove('active')
//     })
// }
// const dots1 = document.getElementById("dots1");
// const moreText1 = document.getElementById("more1");
// const btnText1 = document.getElementById("myBtn1");

// btnText1.addEventListener("click", readMore1);

// function readMore1() {
//   if (dots1.style.display === "none") {
//     dots1.style.display = "inline";
//     btnText1.innerHTML = "Read more";
//     moreText1.style.display = "none";
//   } else {
//     dots1.style.display = "none";
//     btnText1.innerHTML = "Read less";
//     moreText1.style.display = "inline";
//   }
// }

// const card = document.querySelectorAll("#services .box");
// const container = document.querySelector("#services");
// const title = document.querySelectorAll("#services .info .title");
// const sneaker = document.querySelectorAll("#services .icon img");
// const description = document.querySelectorAll("#services .info .description");

// card.addEventListener("mouseenter", (e) => {
//   card.style.marginTop = "50px";
//   card.style.transition = "none";
//   title.style.transform = "translateZ(30px)";
//   sneaker.style.transform = "translateZ(20px) rotateZ(-45deg)";
//   description.style.transform = "translateZ(25px)";
// });
// //
// card.addEventListener("mouseleave", (e) => {
//   card.style.transform = `rotateY(0deg) rotateX(0deg)`;
//   card.style.transition = "all 0.5s ease";
//   title.style.transform = "translateZ(0px)";
//   sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
//   description.style.transform = "translateZ(0px)";
// });

const loader = document.querySelector("#loading");
function init() {
  setTimeout(() => {
    loader.style.display = "none";
    loader.style.opacity = 0;

    setTimeout(() => {}, 50);
  }, 4000);
}

init();

const dots = document.getElementById("dots");
const moreText = document.getElementById("more");
const btnText = document.getElementById("myBtn");

btnText.addEventListener("click", readMore);

function readMore() {
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

const dots1 = document.getElementById("dots1");
const moreText1 = document.getElementById("more1");
const btnText1 = document.getElementById("myBtn1");

btnText1.addEventListener("click", readMore1);

function readMore1() {
  if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    btnText1.innerHTML = "Read more";
    moreText1.style.display = "none";
  } else {
    dots1.style.display = "none";
    btnText1.innerHTML = "Read less";
    moreText1.style.display = "inline";
  }
}

const dots2 = document.getElementById("dots2");
const moreText2 = document.getElementById("more2");
const btnText2 = document.getElementById("myBtn2");

btnText2.addEventListener("click", readMore2);

function readMore2() {
  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnText2.innerHTML = "Read more";
    moreText2.style.display = "none";
  } else {
    dots2.style.display = "none";
    btnText2.innerHTML = "Read less";
    moreText2.style.display = "inline";
  }
}

const dots3 = document.getElementById("dots3");
const moreText3 = document.getElementById("more3");
const btnText3 = document.getElementById("myBtn3");

btnText3.addEventListener("click", readMore3);

function readMore3() {
  if (dots3.style.display === "none") {
    dots3.style.display = "inline";
    btnText3.innerHTML = "Read more";
    moreText3.style.display = "none";
  } else {
    dots3.style.display = "none";
    btnText3.innerHTML = "Read less";
    moreText3.style.display = "inline";
  }
}

const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      menuOpen = false;
    }
  });
}

const navUl = document.querySelector(".main-nav-v");
menuBtn.addEventListener("click", () => {
  navUl.classList.toggle("show");

  const navShow = document.querySelector(".main-nav-v.show");
});

const boxes = document.querySelectorAll(".about-extra");
window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
