"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getWeather() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const resp = yield fetch('http://api.weatherapi.com/v1/current.json?key=577e68d5045f4d7396c212746240401&q=Barcelona');
            if (!resp.ok) {
                throw new Error(`HTTP error! status: ${resp.status}`);
            }
            const weatherData = yield resp.json();
            const iconUrl = weatherData.current.condition.icon;
            const temp_C = weatherData.current.temp_c;
            let img = document.createElement('img');
            img.src = 'http:' + iconUrl;
            let weatherInfo = document.querySelector('.weatherInfo');
            if (weatherInfo) {
                weatherInfo.appendChild(img);
                weatherInfo.innerHTML += ` ${temp_C}ºC`;
            }
            else {
                console.error('No se encontró el elemento .weatherInfo');
            }
            console.log(weatherData);
        }
        catch (error) {
            console.error(`Error obtenint el temps: ${error}`);
        }
    });
}
getWeather();
