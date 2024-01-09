// Definim l'URL de l'API i l'header
const dadApi = 'https://icanhazdadjoke.com/';
const headers = {
    'Accept': 'application/json'
};


// Funció getJoke perquè guardi l'nformació de l'acudit a reportJokes
async function getJoke() {
    try {
        const response = await fetch(dadApi, { headers });
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
        console.log(joke);

        // Mostrem per consola el contingut de reportJokes
        console.log(reportJokes);        

    } catch (error) {
        console.error(`Error obtenint l'acudit: ${error}`);
    }
}


// Definim l'URL de l'API i l'header
const chuckApi = 'https://api.chucknorris.io/jokes/random';


// Funció getJoke perquè guardi l'nformació de l'acudit a reportJokes
async function getJokeChuck() {
  
    try {
        const response = await fetch(chuckApi);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const joke = data.value;

        // Creem un nou JokeReport i el guardem a reportJokes
        const jokeReport = new ReportAcudits(joke);
        reportJokes.push(jokeReport);

        // Actualitzem l'acudit a la pàgina web
        (document.querySelector('.jokeText') as HTMLElement).innerText = joke;

        // Mostrem per consola el contingut de l'acudit
        console.log(joke);

        // Mostrem per consola el contingut de reportJokes
        console.log(reportJokes);        

    } catch (error) {
        console.error(`Error obtenint l'acudit: ${error}`);
    }

}


// Funció per obtenir un acudit aleatòriament d'una de les dues APIs
async function getRandomJoke() {

    // Triem aleatòriament un número 0 o 1
    const random = Math.floor(Math.random() * 2);

    // Si el número és 0, obtenim un acudit de l'API d'icanhazdadjoke
    // Si el número és 1, obtenim un acudit de l'API de Chuck Norris
    if (random === 0) {
        await getJoke();
    } else {
        await getJokeChuck();
    }
}


// Obtenim un acudit en carregar la pàgina
getRandomJoke();


// Afegim un esdeveniment al botó per obtenir un nou acudit
const nextJokeButton = document.getElementById('nextJoke');
if (nextJokeButton) {
    nextJokeButton.addEventListener('click', () => {
        getRandomJoke();
    });
}



