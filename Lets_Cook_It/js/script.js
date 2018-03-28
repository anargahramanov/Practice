var body = document.getElementById("body");

// VideoPage JS
var mainVideoPage = document.getElementById("mainVideoPage");
var closeBtn = document.getElementById("closeBtn")
var button = document.getElementById("button");

// SliderSec JS
var slider = document.querySelector("#slider");
var slideImgs = document.querySelectorAll("#slider #sliderImgs img");
var circle = document.querySelectorAll("#circles .circle");
var whiteCircle = document.querySelector("#circles .whiteCircle");
var arrows = document.querySelectorAll("#slider .arrows");
var next = document.querySelector("#slider .next");
var prev = document.querySelector("#slider .prev");

// Foods Sec
var cols = document.querySelectorAll("#BreakfastSec .rows .cols");


mainVideoPage.style.height = body.scrollHeight + "px";

button.addEventListener("click", function () {
    mainVideoPage.style.display = "block";
});

closeBtn.addEventListener("click", function () {
    mainVideoPage.style.display = "none";
});

setInterval(function () {
    var activeSlideImg = document.querySelector(".active");
    var whiteCircle = document.querySelector(".whiteCircle");

    if (activeSlideImg.nextElementSibling != null) {
        activeSlideImg.classList.remove("active");
        activeSlideImg.nextElementSibling.classList.add("active");

    } else {
        activeSlideImg.classList.remove("active");
        slideImgs[0].classList.add("active");
    }

    if (whiteCircle.nextElementSibling != null) {
        whiteCircle.classList.remove("whiteCircle");
        whiteCircle.nextElementSibling.classList.add("whiteCircle");

    } else {
        whiteCircle.classList.remove("whiteCircle");
        circle[0].classList.add("whiteCircle");
    }

}, 4000);

slider.onmouseover = function () {
    arrows.forEach(function (a) {
        a.style.opacity = "1";
        a.style.transition = "1.5s";
    });

};

slider.onmouseleave = function () {
    arrows.forEach(function (a) {
        a.style.opacity = "0";
        a.style.transition = "1.5s";
    });

};

next.addEventListener("click", function () {
    var activeSlideImg = document.querySelector(".active");
    if (activeSlideImg.nextElementSibling != null) {
        activeSlideImg.classList.remove("active");
        activeSlideImg.nextElementSibling.classList.add("active");
    } else {
        activeSlideImg.classList.remove("active");
        slideImgs[0].classList.add("active");
    }

});

prev.addEventListener("click", function () {
    var activeSlideImg = document.querySelector(".active");
    if (activeSlideImg.previousElementSibling != null) {
        activeSlideImg.classList.remove("active");
        activeSlideImg.previousElementSibling.classList.add("active");
    } else {
        activeSlideImg.classList.remove("active");
        slideImgs[slideImgs.length - 1].classList.add("active");
    }

});

cols.forEach(function(col){
    col.onmouseover = function(){
        col.style.transform = "scale(1.05)";
        col.style.boxShadow = "#a4a4a480 5px 10px 5px";
    };
});

cols.forEach(function(col){
    col.onmouseleave = function(){
        col.style.transform = null;
        col.style.boxShadow = null;
    };
});