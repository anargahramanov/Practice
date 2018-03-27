var mainVideoPage = document.getElementById("mainVideoPage");
var button = document.getElementById("button");
var closeBtn = document.getElementById("closeBtn")
var body = document.getElementById("body");
var slideImgs = document.querySelectorAll("#slider #sliderImgs img");
var activeSlideImg = document.querySelector(".active");
var circle = document.querySelectorAll("#circles .circle");
var whiteCircle = document.querySelector("#circles .whiteCircle");


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

for (var i = 0; i < circle.length; i++) {

    circle[i].addEventListener("click", function () {
        console.log(circle.indexOf(i));

    });
}

