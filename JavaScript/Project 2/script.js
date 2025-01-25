document.addEventListener('DOMContentLoaded', function () {
    const cityInput = document.getElementById('city-input');
    const searchButton = document.getElementById('get-weather-btn');
    const weatherInfo = document.getElementById('weather-info');
    const cityDisplay = document.getElementById('city-name');
    const tempDisplay = document.getElementById('temperature');
    const descriptionDisplay = document.getElementById('description');
    const minTempDisplay = document.getElementById('min-temp');
    const maxTempDisplay = document.getElementById('max-temp');
    const errDisplay = document.getElementById('error-message');

    const API_KEY = "ea980a4c2cf614170c29f93e069409d2";

    searchButton.addEventListener("click", async function () {
      const cityName = cityInput.value.trim();
        if (cityName === "") {
        showError();
        return;
      }

      try {
        const weatherData = await fetchWeatherData(cityName);
        displayWeatherData(weatherData);
      } catch (error) {
        showError();
      }
    });

    async function fetchWeatherData(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

        const response = await fetch(url);
        console.log(response);
        
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        return data;
    }

    function displayWeatherData(data) {
        const { name, main, weather } = data;
        cityDisplay.textContent = name;
        tempDisplay.textContent = `Temperature: ${main.temp}`;
        minTempDisplay.textContent = `Min Temp: ${main.temp_min}`;
        maxTempDisplay.textContent = `Max Temp: ${main.temp_max}`;
        descriptionDisplay.textContent = `Weather: ${weather[0].description}`;

        weatherInfo.classList.remove('hidden');
        errDisplay.classList.add('hidden');
    }

    function showError() {
        weatherInfo.classList.add('hidden');
        errDisplay.classList.remove('hidden');
    }

});