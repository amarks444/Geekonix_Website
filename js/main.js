(function ($) {
  "use strict";

  // Preloader (if the #preloader div exists)
  $(window).on("load", function () {
    if ($("#loading").length) {
      $("#loading")
        .delay(300)
        .fadeOut("slow", function () {
          $(this).remove();
        });
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Header scroll class
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#header").addClass("header-scrolled");
    } else {
      $("#header").removeClass("header-scrolled");
    }
  });

  if ($(window).scrollTop() > 100) {
    $("#header").addClass("header-scrolled");
  }

  // Smooth scroll for the navigation and links with .scrollto classes
  $(".main-nav-v a, .mobile-nav-v a, .scrollto").on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($("#header").length) {
          top_space = $("#header").outerHeight();

          if (!$("#header").hasClass("header-scrolled")) {
            top_space = top_space - 20;
          }
        }

        $("html, body").animate(
          {
            scrollTop: target.offset().top - top_space,
          },
          1500,
          "easeInOutExpo"
        );

        if ($(this).parents(".main-nav-v, .mobile-nav-v").length) {
          $(".main-nav-v .active, .mobile-nav-v .active").removeClass("active");
          $(this).closest("li").addClass("active");
        }

        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass("fa-times fa-bars");
          $(".mobile-nav-overly").fadeOut();
        }
        return false;
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $("section");
  var main_nav = $(".main-nav-v, .mobile-nav-v");
  var main_nav_height = $("#header").outerHeight();

  $(window).on("scroll", function () {
    var cur_pos = $(this).scrollTop();

    nav_sections.each(function () {
      var top = $(this).offset().top - main_nav_height,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        main_nav.find("li").removeClass("active");
        main_nav
          .find('a[href="#' + $(this).attr("id") + '"]')
          .parent("li")
          .addClass("active");
      }
    });
  });


  // flitering in glimps
  // $(window).on("load", function () {
  //   var portfolioIsotope = $(".portfolio-container").isotope({
  //     itemSelector: ".portfolio-item",
  //   });
  //   $("#portfolio-flters li").on("click", function () {
  //     $("#portfolio-flters li").removeClass("filter-active");
  //     $(this).addClass("filter-active");

  //     portfolioIsotope.isotope({ filter: $(this).data("filter") });
  //   });
  // });

  $(document).ready(function(){
    $('.list').click(function(){
      const value = $(this).attr('data-filter');
      if(value=='all'){
        $('.portfolio-item').show('1000')
      } else {
        $('.portfolio-item').not('.'+value).hide('1000');
        $('.portfolio-item').filter('.'+value).show('1000');
      }
    })
    //add active class on selected
    $('.list').click(function(){
      $(this).addClass('active').siblings().removeClass('active')
    })
  })

  // jQuery counterUp (used in Whu Us section)
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000,
  });
})(jQuery);

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
const navUl = document.querySelector(".main-nav-v");
let menuOpen = false;
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      navUl.classList.add("show");
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      navUl.classList.remove("show");
      menuOpen = false;
    }
  });
}

const menuLink = document.querySelectorAll(".main-nav-v a");

menuLink.forEach((link) => {
  if (link) {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("open");
      navUl.classList.remove("show");
      menuOpen = false;
    });
  }
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
