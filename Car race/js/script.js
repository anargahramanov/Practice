var money = 1000;
var moneySpan = document.getElementById("moneySpan").innerHTML = money;
var blueBtn = document.getElementById("blueBtn");
var redBtn = document.getElementById("redBtn");
var carBlue = document.getElementById("carBlue");
var carRed = document.getElementById("carRed");
var timeBlue = Math.round((Math.random() * 5) + 4);
var timeRed = Math.round((Math.random() * 5) + 4);
var timeBlue1 = timeBlue + "s";
var timeRed1 = timeRed + "s";
var amount = document.getElementById("amount");

function racing (){
    if (timeBlue = timeRed) {
        timeBlue = Math.round((Math.random() * 5) + 4);
        timeRed = Math.round((Math.random() * 5) + 4);
    }

    carBlue.style.animationName = "carMove";
    carBlue.style.animationTimingFunction = "linear";
    carBlue.style.animationDuration = timeBlue1;
    carBlue.classList.remove("leftZero");
    carBlue.classList.add("rightZero");


    carRed.style.animationName = "carMove";
    carRed.style.animationTimingFunction = "linear";
    carRed.style.animationDuration = timeRed1;
    carRed.classList.remove("leftZero");
    carRed.classList.add("rightZero");

    amount.value = "";
}


blueBtn.addEventListener("click", function () {
    var betAmount = new Number (amount.value);
    if (timeBlue < timeRed) {
        setTimeout(function () {
            money = money + betAmount;
            var moneySpan = document.getElementById("moneySpan").innerHTML = money;
            alert("You Win " + betAmount + " $");
        }, timeBlue * 1000);

    } else {
        setTimeout(function () {
            money = money - betAmount;   
            var moneySpan = document.getElementById("moneySpan").innerHTML = money;
            alert("You Lose " + betAmount + " $");
        }, timeRed * 1000);

    }

    racing ();

    console.log(typeof betAmount);
});

redBtn.addEventListener("click", function () {
    var betAmount = amount.value;
    if (timeBlue > timeRed) {
        setTimeout(function () {
            alert("You Win " + betAmount + " $");
            money = money + betAmount;
        }, timeRed * 1000);
    } else {
        setTimeout(function () {
            alert("You Lose " + betAmount + " $");
            money = money - betAmount;
        }, timeBlue * 1000);
    }

    racing ();

});


