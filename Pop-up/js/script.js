var image = document.querySelectorAll(".images .image");
var all = document.querySelector(".all");
var bigImage = document.querySelector(".all .bigImage img");
var close = document.querySelector(".all .bigImage .close");
var next = document.querySelector(".all .bigImage .next");
var prev = document.querySelector(".all .bigImage .prev");
var activImg = image[0];


for (var i = 0; i < image.length; i++) {
    image[i].addEventListener("click", function () {
        var src = this.getAttribute("title");
        bigImage.src = src;
        all.style.display = "block";
        activImg = this;
    })

}

close.addEventListener("click", function () {
    all.style.display = "none";
});

function nextF() {
    if (activImg.nextElementSibling != null) {
        bigImage.src = activImg.nextElementSibling.getAttribute("title");
        activImg = activImg.nextElementSibling;

        if (activImg.nextElementSibling == null) {
            next.style.display = "none";
        }

        if (activImg.previousElementSibling != null) {
            prev.style.display = "block";
        }
    }

}

function prevF() {
    if (activImg.previousElementSibling != null) {
        bigImage.src = activImg.previousElementSibling.getAttribute("title");
        activImg = activImg.previousElementSibling;

        if (activImg.previousElementSibling == null) {
            prev.style.display = "none";
        }

        if (activImg.nextElementSibling != null) {
            next.style.display = "block";
        }
    }

}

next.addEventListener("click", function () {
    nextF();

});

prev.addEventListener("click", function () {
    prevF();
});

window.addEventListener("keyup", function (e) {
    if (all.style.display == "block") {
        console.log(e);

        if (e.which == 27) {
            all.style.display = "none";
        }

        if (e.which == 39) {
            nextF();
        }

        if (e.which == 37) {
            prevF();
        }
    }

});

window.addEventListener("click", function (e) {
    if (e.target.classList.contains("all") &&
        all.style.display == "block") {
        all.style.display = "none";
    }
});

var nextTime = setInterval(function () {
    if (activImg.nextElementSibling != null) {
        nextF();
    } else {
        bigImage.src = image[0].getAttribute("title");
        activImg = image[0];
    }

    if (activImg.nextElementSibling != null) {
        next.style.display = "block";
    }

}, 2000);





// var par = document.getElementById("par");
// var novruz = new Date("Mar 21 2018");
// var gunBu = new Date();
// console.log(gunBu);

// if (gunBu != novruz) {
//     var result = novruz - gunBu;
//     par.innerText = result;
// } else {

// }