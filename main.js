var btnTranslate = document.getElementById("btn-translate");
var txtArea = document.getElementById("txt-area");
var outputDiv = document.getElementById("output");

function clickHandler() {
    outputDiv.innerText = txtArea.value;
}

btnTranslate.addEventListener("click", clickHandler)