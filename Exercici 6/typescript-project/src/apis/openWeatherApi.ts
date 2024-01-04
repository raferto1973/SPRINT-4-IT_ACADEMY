// Definim l'URL de l'API i l'header

const url = 'https://open-weather13.p.rapidapi.com/city/Barcelona';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8d92157160mshc16fbd5b24e2d3dp1ba813jsne99bd5f2263a',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};


// Funció getWeather per obtenir consumir el temps de Open Weather

async function getWeather() {
    try {
        const resp = await fetch(url, options);
        if (!resp.ok) {
            throw new Error(`HTTP error! status: ${resp.status}`);
        }
        const weatherData = await resp.json();
        const wetherInfo  = weatherData.weather[0].description;
        const temp        = (((weatherData.main.temp)-32)*(5/9)).toFixed(1);

        // Actualitzem l'informació a la pàgina web
        (document.querySelector('.weatherInfo') as HTMLElement).innerText = `${wetherInfo} ${temp}ºC`;

        // Mostrem per consola el contingut del temps
        console.log(weatherData);

    } catch (error) {
        console.error(`Error obtenint el temps: ${error}`);
    }
}


// Obtenim el temps al carregar la pàgina

getWeather();