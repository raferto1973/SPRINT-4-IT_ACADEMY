// Funció getWeather per obtenir consumir el temps de Open Weather
async function getWeather() {
    try {

        const resp = await fetch('http://api.weatherapi.com/v1/current.json?key=577e68d5045f4d7396c212746240401&q=Barcelona');
        if (!resp.ok) {
            throw new Error(`HTTP error! status: ${resp.status}`);
        }
                
        const weatherData = await resp.json();
        const iconUrl = weatherData.current.condition.icon;
        const temp_C = weatherData.current.temp_c;

        // Crear un element d'imatge nou
        let img = document.createElement('img');
        img.src = 'http:' + iconUrl;

        // Obtenir l'element en què vols inserir la imatge i la temperatura
        let weatherInfo = document.querySelector('.weatherInfo');

        // Comprovar si weatherInfo és null
        if (weatherInfo) {            
            weatherInfo.appendChild(img);            // Afegir la imatge a l'element
            weatherInfo.innerHTML += ` ${temp_C}ºC`; // Afegir la temperatura a l'element
        } else {
            console.error('No se encontró el elemento .weatherInfo');
        }

        // Mostrem per consola el contingut del temps
        console.log(weatherData);

    } catch (error) {
        console.error(`Error obtenint el temps: ${error}`);
    }
}

// Obtenim el temps al carregar la pàgina
getWeather();

