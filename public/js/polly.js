(function() {
  const elemPlayButton = document.querySelector("#play-button")
  const elemVoice = document.querySelector("#transaltion");
  const elemText = document.querySelector("#aboutus");

  elemPlayButton.addEventListener("click", function() {
    if (elemVoice.value == "english") {
      var voice = "Matthew"
    }

    if (elemVoice.value == "chinese") {
      var voice = "Zhiyu"
    }

    let url = "https://h3qb54enf9.execute-api.us-east-1.amazonaws.com/default/polly"
    url += "?voice=" + encodeURIComponent(voice);
    url += "&text=" + encodeURIComponent(elemText.textContent);

    const elemAudio = document.createElement("AUDIO");
    elemAudio.style.display = "none";
    document.body.appendChild(elemAudio);
    elemAudio.controls = true;
    elemAudio.src = url;
    elemAudio.play();

  });

}());
