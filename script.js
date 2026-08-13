const main = document.querySelector('.main');
const btn = document.querySelector('.btn');
const menu = document.querySelector('.menu');
const icon = document.querySelector('#icon');

window.onload = function () {
  main.style.opacity = '1';
}

btn.addEventListener('click', function () {
  main.style.opacity = '0.2';
  menu.style.opacity = '1';
  menu.style.visibility = 'visible';
});

icon.addEventListener('click', function () {
  main.style.opacity = '1';
  menu.style.opacity = '0';
  menu.style.visibility = 'hidden';
});

function getWeather(city, titleAttribute) {
  fetch(`https://wttr.in/${city}?format=j1`)
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

      const cityName = document.querySelector('.title');
      cityName.textContent = `Погода в ${titleAttribute}`;

      document.querySelector('#temp-C').textContent = `${temp} °C`;
      document.querySelector('#Feels-Like-C').textContent = `${feelsLike} °C`;
      document.querySelector('#humidity').textContent = `${humidity} %`;
      document.querySelector('#wind-speed').textContent = `${wind} км/ч`;
      document.querySelector('#pressure').textContent = `${pressure} мбар`;
      document.querySelector('#visibility').textContent = `${visibility} км`;
    });
}
getWeather('Gyumri', 'Гюмри');
const menuLink = document.querySelectorAll('.menu-link');
menuLink.forEach(function (button) {
  button.addEventListener('click', function () {
    const selectedCity = button.getAttribute('data-city');
    const titleAttribute = button.getAttribute('data-title');
    getWeather(selectedCity, titleAttribute);
    main.style.opacity = '1';
    menu.style.opacity = '0';
    menu.style.visibility = 'hidden';
  });
});