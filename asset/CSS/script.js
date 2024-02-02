

$(function(){
    $("#js-hamburger-menu, .navigation__link").on("click",function(){
        $(".navigation").slideToggle(500);
        $(".hamburger-menu").toggleClass("hamburger-menu--open");
    });
});






// スライドショー

// script.js
let currentIndex = 0;
const intervalTime = 3000; // 5秒ごとに切り替える
let slideInterval;

function showSlides() {
  const slides = document.querySelector('.main_visual');
  const images = document.querySelectorAll('.kakiage');

  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  const newTransformValue = -currentIndex * 100 + "%";
  slides.style.transform = "translateX(" + newTransformValue + ")";
}

function startSlideshow() {
  slideInterval = setInterval(showSlides, intervalTime);
}

function plusSlides(n) {
  const slides = document.querySelector('.main_visual');
  const images = document.querySelectorAll('.kakiage');

  currentIndex += n;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  const newTransformValue = -currentIndex * 100 + "%";
  slides.style.transform = "translateX(" + newTransformValue + ")";
}

document.querySelector('.prev').addEventListener('click', function () {
  clearInterval(slideInterval);
  plusSlides(-1);
  startSlideshow();
});

document.querySelector('.next').addEventListener('click', function () {
  clearInterval(slideInterval);
  plusSlides(1);
  startSlideshow();
});

startSlideshow();


    //予約画面のフェードイン

    $(document).ready(function() {
        // Function to check if the yoyaku element is in the viewport
        function isYoyakuVisible() {
            var yoyakuOffset = $('.yoyaku').offset().top;
            var windowHeight = $(window).height();
            var scrollPos = $(window).scrollTop();
            return yoyakuOffset < scrollPos + windowHeight;
        }
    
        // Initial check when the document is ready
        if (isYoyakuVisible()) {
            $('.yoyaku').animate({ opacity: 1 }, 3000);
        }
    
        // Check again when the window is scrolled
        $(window).scroll(function() {
            if (isYoyakuVisible()) {
                $('.yoyaku').animate({ opacity: 1 }, 3000);
            }
        });
    });
    
    document.addEventListener("DOMContentLoaded", function() {
        var yoyakuElement = document.querySelector(".yoyaku");
    
        function isInViewport(element) {
            var rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
    
        function handleScroll() {
            if (isInViewport(yoyakuElement)) {
                yoyakuElement.style.opacity = 1;
                window.removeEventListener("scroll", handleScroll);
            }
        }
    
        window.addEventListener("scroll", handleScroll);
    });

    document.addEventListener('DOMContentLoaded', function () {
        var yoyakuSection = document.getElementById('yoyakuSection');

        yoyakuSection.addEventListener('click', function () {
            window.location.href = 'http://127.0.0.1:5501/form.html';
        });
    });

    // JavaScriptでスクロールを下に移動する機能を追加
document.querySelector('.news').addEventListener('click', function() {
    this.scrollTop += 50; // スクロール量を調整（必要に応じて変更）
  });

  