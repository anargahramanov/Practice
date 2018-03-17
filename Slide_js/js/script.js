var images = document.querySelectorAll(".images");

images[0].parentNode.style.height = images[0].scrollHeight + "px";

var next = document.querySelector(".next");
var prev = document.querySelector(".prev");

next.addEventListener("click", function () {
    var active = document.querySelector(".active");
    active.classList.remove("active");

    if (active.nextElementSibling.classList.contains("images")) {
        active.nextElementSibling.classList.add("active");
    }
    else {
        images[0].classList.add("active");
    }

});

prev.addEventListener("click", function () {
    var active = document.querySelector(".active");
    active.classList.remove("active");

    if (active.previousElementSibling != null) {
        active.previousElementSibling.classList.add("active");
    }
    else {
        images[images.length - 1].classList.add("active");
    }

});
