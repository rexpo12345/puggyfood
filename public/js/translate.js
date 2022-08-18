let element = document.getElementsByName("aboutus");
const languageSelector = document.querySelector("#transaltion");

function translateAbout() {
    var language = languageSelector.value;
    console.log(language);
    var request = new XMLHttpRequest();
    request.open("POST", "https://7najbc6c0i.execute-api.us-east-1.amazonaws.com/default/translate", true); 
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function () {
        console.log("translated");
        element.innerHTML = JSON.parse(request.responseText);
    };
    request.send(JSON.stringify({language:language}));
}
