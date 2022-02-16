var btnTranslate = document.getElementById("btn-translate");
var txtArea = document.getElementById("txt-area");
var outputDiv = document.getElementById("output")

var serverURL = "https://api.funtranslations.com/translate/chef.json"

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Something went wrong! Try again later")
}


function clickHandler() {
    var inputText = txtArea.value; // taking input

    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; // output
        })
        .catch(errorHandler)

};

btnTranslate.addEventListener("click", clickHandler)