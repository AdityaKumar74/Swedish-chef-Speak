var btnTranslate = document.querySelector("#btn-translate");
var txtArea = document.querySelector("#txt-area");

function clickHandler() {
    console.log("input", txtArea.value);
}

btnTranslate.addEventListener("click", clickHandler)