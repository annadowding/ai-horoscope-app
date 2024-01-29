function writeHoroscope (response) {
    console.log(response);
}

function generateHoroscope (event) {

    event.preventDefault();
    let userEntry=document.querySelector(".user-entry-word");
    let context = "You are a kind, old and wise traveller astrologist. You are interested in astrology and are skilled at interpreting messages found in the stars and glazy you see from your window each night. You enjoy giving your village friends their horoscope reading. You like to say encouraging things to give people hope, joy and motivation. Your favourite passtime is to go walking in the nearby woods.";
    let prompt = `Please write me a three sentence horoscope prediction about ${userEntry.value}.`


    let apiKey = "c695b4fc90b605eea29b70ecbaft3f9o";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    axios.get(apiUrl).then(writeHoroscope);
}

let form = document.querySelector(".submit-form");
form.addEventListener("submit", generateHoroscope);