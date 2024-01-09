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
const dadApi = 'https://icanhazdadjoke.com/';
const headers = {
    'Accept': 'application/json'
};
function getJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(dadApi, { headers });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = yield response.json();
            const joke = data.joke;
            const jokeReport = new ReportAcudits(joke);
            reportJokes.push(jokeReport);
            document.querySelector('.jokeText').innerText = joke;
            console.log(joke);
            console.log(reportJokes);
        }
        catch (error) {
            console.error(`Error obtenint l'acudit: ${error}`);
        }
    });
}
const chuckApi = 'https://api.chucknorris.io/jokes/random';
function getJokeChuck() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(chuckApi);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = yield response.json();
            const joke = data.value;
            const jokeReport = new ReportAcudits(joke);
            reportJokes.push(jokeReport);
            document.querySelector('.jokeText').innerText = joke;
            console.log(joke);
            console.log(reportJokes);
        }
        catch (error) {
            console.error(`Error obtenint l'acudit: ${error}`);
        }
    });
}
function getRandomJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const random = Math.floor(Math.random() * 2);
        if (random === 0) {
            yield getJoke();
        }
        else {
            yield getJokeChuck();
        }
    });
}
getRandomJoke();
const nextJokeButton = document.getElementById('nextJoke');
if (nextJokeButton) {
    nextJokeButton.addEventListener('click', () => {
        getRandomJoke();
    });
}
