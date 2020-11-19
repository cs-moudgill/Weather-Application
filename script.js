

function getWeatherData() {
    var userInput = document.getElementById('enter').value;
    var api = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=******&units=metric`;
    var callAPI = fetch(api).then((data) => {
        return data.json();
    }).then((finalResponse) => {
        document.getElementsByClassName('status')[0].querySelector('p').innerHTML = finalResponse.name;
        document.getElementsByClassName('temp')[0].querySelector('h2').innerHTML = finalResponse.weather[0].main;
        document.getElementById('final-temp').innerText = finalResponse.main.temp;
        document.getElementById('min-temp').innerHTML = finalResponse.main.temp_min;
        document.getElementById('max-temp').innerHTML = finalResponse.main.temp_max;
    }).catch((error) => {
        console.log(error);
    })
}