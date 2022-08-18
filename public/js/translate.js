

function translateAbout() {
    let element = document.getElementsByName("aboutus");
    let language = document.querySelector("#transaltion").value;
    console.log(language);
    var request = new XMLHttpRequest();
    request.open("POST", "https://7najbc6c0i.execute-api.us-east-1.amazonaws.com/default/translate", true); 
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function () {
        console.log("translated");
        console.log(JSON.parse(request.responseText));
        element.innerHTML = JSON.parse(request.responseText);
    };
    request.send(JSON.stringify({language:language}));
}
