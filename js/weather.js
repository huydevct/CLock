const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

const onGeoOk = (location) => {
    const lat = location.coords.latitude;
    const long = location.coords.longitude;
    const API_KEY = "e5bc57258c33054e315142a70f277688";
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}⁰C`;
    });
}

const onGeoError = () => {
    alert("Can't find you. No weather for you!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);