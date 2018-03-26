var smallPhoto = document.querySelectorAll(".cookSmallPhotos .cookSmallPhoto img");
var mainPhoto = document.querySelector(".cookMainPhoto img");

for (var i = 0; i < smallPhoto.length; i++) {
    smallPhoto[i].addEventListener("click", function(){
        var src = this.getAttribute("title");
        mainPhoto.src = src;
    });
}