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
const url = 'https://open-weather13.p.rapidapi.com/city/Canovelles';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8d92157160mshc16fbd5b24e2d3dp1ba813jsne99bd5f2263a',
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
};
function getWeather() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const resp = yield fetch(url, options);
            if (!resp.ok) {
                throw new Error(`HTTP error! status: ${resp.status}`);
            }
            const weatherData = yield resp.json();
            const wetherInfo = weatherData.weather[0].description;
            const temp = (((weatherData.main.temp) - 32) * (5 / 9)).toFixed(1);
            document.querySelector('.weatherInfo').innerText = `${wetherInfo} ${temp}ºC`;
            console.log(weatherData);
        }
        catch (error) {
            console.error(`Error obtenint l'acudit: ${error}`);
        }
    });
}
getWeather();
