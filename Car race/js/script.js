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
var resultRace = document.querySelector("#result h1");

console.log(resultRace);

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
    resultRace.innerText =  "Siz " + betAmount + " $ Mərc etdiniz";
    if (timeBlue < timeRed) {
        setTimeout(function () {
            money += betAmount;
            var moneySpan = document.getElementById("moneySpan").innerHTML = money;
            resultRace.innerText = "Siz "+ betAmount +" $ uddunuz";
        }, timeBlue * 1000);

    } else {
        setTimeout(function () {
            money -= betAmount; 
            var moneySpan = document.getElementById("moneySpan").innerHTML = money;
            resultRace.innerText = "Siz "+ betAmount +" $ uduzdunuz";
        }, timeRed * 1000);

    }

    racing ();

});

redBtn.addEventListener("click", function () {

    var betAmount = new Number (amount.value);
    resultRace.innerText =  "Siz " + betAmount + " $ Mərc etdiniz";
    if (timeBlue > timeRed) {
        setTimeout(function () {
            resultRace.innerText = "Siz "+ betAmount +" $ uddunuz";
            money += betAmount;
            var moneySpan = document.getElementById("moneySpan").innerHTML = money;
        }, timeRed * 1000);
    } else {
        setTimeout(function () {
            resultRace.innerText = "Siz "+ betAmount +" $ uduzdunuz";
            money -= betAmount; 
            var moneySpan = document.getElementById("moneySpan").innerHTML = money;
        }, timeBlue * 1000);
    }

    racing ();

});


console.log(typeof betAmount);