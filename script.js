function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=calgary&appid=8da225f4107ffbb8a4c63062b24b7886`;

  fetch(url)
      .then(response => {
          if (!response.ok) {
            console.log(response)
              throw new Error(`Error, please try again later`);
          }
          return response.json();
      })
      .then(data => {
          console.log('Weather data:', data);
          document.getElementById("weather").innerText = data.weather[0].main;
          document.getElementById("temp").innerText = `Temp: ${data.main.temp}  | Feels like: ${data.main.feels_like}  | Wind: ${data.wind.speed}  | Humidity: ${data.main.humidity}`;
          document.getElementById("desc").innerText = data.weather[0].description;
      })
      .catch(error => {
        console.log(error)
          console.error('Error fetching weather data:', error);
      });
}

window.onload=()=>{
  getWeather();
}
