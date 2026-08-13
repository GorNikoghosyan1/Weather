window.onload = function () {
  const main = document.querySelector('.main');
  main.style.opacity = '1';
}
fetch('https://wttr.in/Gyumri?format=j1')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const temp = data.current_condition[0].temp_C;
    const feelsLike = data.current_condition[0].FeelsLikeC;
    const humidity = data.current_condition[0].humidity;
    const wind = data.current_condition[0].windspeedKmph;
    const pressure = data.current_condition[0].pressure;
    const visibility = data.current_condition[0].visibility;

    // DOM elements
    const temp_C_Element = document.querySelector('#temp-C');
    const Feels_Like_Element = document.querySelector('#Feels-Like-C');
    const humidity_Element = document.querySelector('#humidity');
    const wind_Element = document.querySelector('#wind-speed');
    const pressure_Element = document.querySelector('#pressure');
    const visibility_Element = document.querySelector('#visibility');
    
    temp_C_Element.textContent = `${temp} °C`;
    Feels_Like_Element.textContent = `${feelsLike} °C`;
    humidity_Element.textContent = `${humidity} %`;
    wind_Element.textContent = `${wind} км/ч`;
    pressure_Element.textContent = `${pressure} мбар`
    visibility_Element.textContent = `${visibility} км`;
  });