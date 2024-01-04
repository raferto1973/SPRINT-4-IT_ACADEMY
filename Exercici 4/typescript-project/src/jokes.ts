// Definim l'URL de l'API i l'header

const API_URL = 'https://icanhazdadjoke.com/';
const headers = {
    'Accept': 'application/json'
};

// Modifiquem la funció getJoke perquè guardi la informació de l'acudit a reportJokes

async function getJoke() {
    try {
        const response = await fetch(API_URL, { headers });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const joke = data.joke;

        // Creem un nou JokeReport i el guardem a reportJokes
        const jokeReport = new ReportAcudits(joke);
        reportJokes.push(jokeReport);

        // Actualitzem l'acudit a la pàgina web
        (document.querySelector('.jokeText') as HTMLElement).innerText = joke;

        // Mostrem per consola el contingut de l'acudit
        // console.log(joke);

        // Mostrem per consola el contingut de reportJokes
        console.log(reportJokes);        

    } catch (error) {
        console.error(`Error obtenint l'acudit: ${error}`);
    }
}


// Obtenim un acudit en carregar la pàgina

getJoke();


// Afegim un esdeveniment al botó per obtenir un nou acudit

const nextJokeButton = document.getElementById('nextJoke');

if (nextJokeButton) {
    nextJokeButton.addEventListener('click', () => {
        getJoke();
    });
}


