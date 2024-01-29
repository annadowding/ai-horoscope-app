function writeHoroscope (response) {
    console.log(response);
}

function generateHoroscope (event) {

    event.preventDefault();
    

    let apiKey = "c695b4fc90b605eea29b70ecbaft3f9o";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    axios.get(apiUrl).then(writeHoroscope);
}

let form = document.querySelector(".submit-form");
form.addEventListener("submit", generateHoroscope);