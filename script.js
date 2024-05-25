document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  const apiKey = '5a4eb56aed0f495781c112817242405';
  
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London`;

  fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch weather data.');
    }
    return response.json();
  })
  .then(data => {
    const weatherInfo = document.querySelector('.weather-info');
    const tempButton = document.querySelector('.temp-button');
    const conditionButton = document.querySelector('.condition-button');
    const humidityButton = document.querySelector('.humidity-button');
    const windSpeedButton = document.querySelector('.wind-speed-button');

    tempButton.addEventListener('click', () => {
      weatherInfo.innerHTML = `<p>Temperature: ${data.current.temp_c}°C</p>`;
    });

    conditionButton.addEventListener('click', () => {
      weatherInfo.innerHTML = `<p>Condition: ${data.current.condition.text}</p>`;
    });

    humidityButton.addEventListener('click', () => {
      weatherInfo.innerHTML = `<p>Humidity: ${data.current.humidity}%</p>`;
    });

    windSpeedButton.addEventListener('click', () => {
      weatherInfo.innerHTML = `<p>Wind Speed: ${data.current.wind_kph} kph</p>`;
    });
  })
  .catch(error => {
    const weatherInfo = document.querySelector('.weather-info');
    weatherInfo.innerHTML = `<p>${error.message}</p>`;
    console.error('Error:', error);
  });
}
