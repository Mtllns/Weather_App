// api key : 82005d27a116c2880c8f0fcb866998a0
// definimos elementos html por su clase con querySelector

const notificationElement = document.querySelector('.notification');
const iconElement         = document.querySelector('.weather-icon');
const tempElement         = document.querySelector('.temperature-value p');
const descElement         = document.querySelector('.temperature-description p');
const locationElement     = document.querySelector('.location p');


// Estos datos se recogen de la API
// App data
// const weather = {

//     temperature: {
//         value: 18,
//         unit: "celsius"
//     },

//     description: "few clouds",
//     iconId: "01d",
//     city: "London",
//     country: "GB"
// };
const weather = {};

weather.temperature = {
    unit : "celsius"
}

// APP CONSTS AND VARS
const KELVIN = 273;
// API KEY
const key = "82005d27a116c2880c8f0fcb866998a0";


function displayWeather() {
    
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    
    tempElement.innerHTML = `${weather.temperature.value}º <span>C</span>`;
    
    descElement.innerHTML = weather.description;
    
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
    
}

// funcion para convertir celsius en Fahrenheit

function celsiusToFahrenheit(temperature) {
    return (temperature * 9/5) + 32;
}

// cuando el usuario hace clic en el elemento temperatura para cambiar grados
tempElement.addEventListener("click", function() {
    
    if (weather.temperature.value === undefined) return; // esta linea previene que el codigo no haga bucle si no esta definido

    if (weather.temperature.unit === "celsius") {
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit);
        tempElement.innerHTML = `${fahrenheit}º <span>F</span>`;
        weather.temperature.unit = "fahrenheit";


    } else {
        tempElement.innerHTML = `${weather.temperature.value}º <span>C</span>`;
        weather.temperature.unit = "celsius";
    }

});

// geolocalización
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition( setPosition, showError ); // obtiene dos funciones, la de geolocalizacion y la de error   
}else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser Doesn't Support Geolocation.</p>";
}

// Fuinción para geolocalización
function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}

// función para mostrar el error cuando el navegador no soporta la geolocalización
function showError(error) {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`;
}


function getWeather(latitude, longitude) {
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
}



















