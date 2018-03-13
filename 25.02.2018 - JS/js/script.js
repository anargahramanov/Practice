var image = document.querySelectorAll(".images .image");
var all = document.querySelector(".all");
var bigImage = document.querySelector(".all .bigImage img");
var close = document.querySelector(".all .bigImage .close");

for (var i = 0; i < image.length; i++) {
    image[i].addEventListener("click", function () {
        var src = this.getAttribute("title");
        bigImage.src = src;
        all.style.display = "block";
    })

}

close.addEventListener("click", function () {
    all.style.display = "none";
});