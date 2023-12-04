function updateWeatherData(data, weatherDescription) 
{
    // Update the <span> with the new value we get from the server
    var span = document.querySelector("#weather-data");
    span.textContent = data;

    // Update the weather icon based on the weather description
    var icon = document.querySelector("#weather-icon");

    if (weatherDescription.toLowerCase().includes("rain")) 
    {
        icon.src = "/Users/paveem./Desktop/MyFile/Study/Seneca/Class/Fall2023/WEB222/Workshop/Assignment 8 V3/rainy.png"; 
    } 
    
    else if (weatherDescription.toLowerCase().includes("snow")) 
    {
        icon.src = "snowy.png"; 
    } 
    
    else if (weatherDescription.toLowerCase().includes("sunny")) 
    {
        icon.src = "sunny.png"; 
    } 
    
    else 
    {
        icon.src = "default.png"; 
    }

    // Refresh the data and icon every 30 minutes
    var thirtyMinutes = 30 * 60 * 1000;
    setTimeout(getCurrentWeather, thirtyMinutes);
}

function getCurrentWeather() 
{
    var xhr = new XMLHttpRequest();
    var url = "https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=f253248498780b79f2b70a80cb5c5893&units=metric";

    xhr.onload = function () 
    {
        if (this.status === 200) 
        {
            var response = JSON.parse(this.responseText);
            var weatherDescription = response.weather[0].description;
            var temperature = response.main.temp;
            var weatherData = `${weatherDescription}, ${temperature}°C`;
            updateWeatherData(weatherData, weatherDescription);
        }
    };

    xhr.onerror = function () 
    {
        updateWeatherData("Error: Unable to get current weather data", "unknown");
    };

    xhr.open("GET", url);
    xhr.send();
}

window.onload = function () 
{
    getCurrentWeather();
}