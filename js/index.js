const WEATHER_API = "https://api.weather.gov/points/";
async function getWeather() {
    let zip = document.querySelector('.zip').value;
    let response = await fetch(WEATHER_API + ZIPCODES[zip] + "/forecast", { mode: 'cors' });
    let data = await response.json();
    for (let i = 0; i < 13; i++) {
        let name = document.querySelector('.d' + i + '>.name');
        let description = document.querySelector('.d' + i + '>.description');
        let icon = document.querySelector('.d' + i + '>.icon');
        let temperature = document.querySelector('.d' + i + '>.temperature');
        let day = data.properties.periods[i];
        temperature.textContent = day.temperature + 'F';
        icon.src = day.icon;
        name.textContent = day.name;
        description.textContent = day.detailedForecast;
    }
}