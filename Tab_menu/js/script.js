var btn = document.querySelectorAll(".btn");
var content = document.querySelectorAll(".content");

for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        for (var i = 0; i < btn.length; i++) {
            btn[i].classList.remove("activeBtn");
            this.classList.add("activeBtn");
            content[i].classList.remove("activeContent");

            // if (menu.classList.contains("activeBtn")) {
            //     content[i].classList.add("activeContent");
            // }

        }
    });
}
