var button = document.getElementById("button");
var SetColor = document.getElementById("setColor");
var randomRC = document.getElementById("randomRC");
var col = document.getElementById("col");
var raw = document.getElementById("raw");
var table = document.getElementById("table");


setColor.addEventListener("click", function () {
    var tdS = document.querySelectorAll("tr td");
    setInterval(function () {
        for (var i = 0; i < tdS.length; i++) {
            var number1 = Math.ceil(Math.random() * 256);
            var number2 = Math.ceil(Math.random() * 256);
            var number3 = Math.ceil(Math.random() * 256);
            var color = "rgb(" + number1 + "," + number2 + "," + number3 + ")";
            tdS[i].style.background = color;
        }
    },500);
});

randomRC.addEventListener("click",function(){
    var numRandom1 = Math.ceil(Math.random() * 10);
    var numRandom2 = Math.ceil(Math.random() * 10);

    var countRaw = numRandom1;
    var countCol = numRandom2;
    raw.value = "";
    col.value = "";

    for (var i = 0; i < countRaw; i++) {
        var tr = document.createElement("tr");
        table.appendChild(tr);

        for (var j = 0; j < countCol; j++) {
            var td = document.createElement("td");
            tr.appendChild(td);
            td.innerText = "Value";
        }
    }

});

button.addEventListener("click", function () {
    var countRaw = raw.value;
    var countCol = col.value;
    raw.value = "";
    col.value = "";

    for (var i = 0; i < countRaw; i++) {
        var tr = document.createElement("tr");
        table.appendChild(tr);

        for (var j = 0; j < countCol; j++) {
            var td = document.createElement("td");
            tr.appendChild(td);
            td.innerText = "Value";
        }
    }

});







