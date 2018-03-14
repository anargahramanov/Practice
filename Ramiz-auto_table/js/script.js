var button = document.getElementById("button");
var col = document.getElementById("col");
var raw = document.getElementById("raw");
var table = document.getElementById("table");


button.addEventListener("click", function () {
    var countRaw = raw.value;
    var countCol = col.value;
    raw.value = "";
    col.value = "";

    for (var i = 0; i < countCol; i++){
        var td = document.createElement("td");
        colS = td;
    }

    for (var i = 0; i < countRaw; i++) {
        var tr = document.createElement("tr");
        table.appendChild(tr);
    }

    tr.appendChild(colS);
    
});

