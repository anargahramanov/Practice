var money = document.getElementById("money");
var blueBtn = document.getElementById("blueBtn");
var redBtn = document.getElementById("redBtn");
var startBtn = document.getElementById("startBtn");
var carBlue = document.getElementById("carBlue");
var carRed = document.getElementById("carRed");

startBtn.addEventListener("click",function(){
    carBlue.style.animationName = "carMove";
    carBlue.style.animationTimingFunction = "linear";
    carBlue.style.animationDuration = Math.ceil((Math.random()*10)+4) + "s";
    carBlue.classList.remove("leftZero");
    carBlue.classList.add("rightZero");

    carRed.style.animationName = "carMove";
    carRed.style.animationTimingFunction = "linear";
    carRed.style.animationDuration = Math.floor((Math.random()*10)+4) + "s";
    carRed.classList.remove("leftZero");
    carRed.classList.add("rightZero");


})
