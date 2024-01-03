// Definimos la URL de la API y el header
const API_URL = 'https://icanhazdadjoke.com/';
const headers = {
    'Accept': 'application/json'
};

// Definimos una función para obtener un chiste de la API
async function getJoke() {
    try {
        const response = await fetch(API_URL, { headers });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);  

        // Aquí accedemos al parámetro 'joke' del objeto
        const joke = data.joke;                  
        console.log(joke);

        // Seleccionamos el elemento del DOM donde queremos mostrar el chiste
        // y actualizamos su contenido con el chiste
        (document.querySelector('.jokeText') as HTMLElement).innerText = joke;


    } catch (error) {
        console.error(`Error obteniendo el chiste: ${error}`);
    }
}

  // Obtenemos un chiste al cargar la página
    getJoke();

// Añadimos un evento al botón para obtener un nuevo chiste
const nextJokeButton = document.getElementById('nextJoke');

if (nextJokeButton) {
    nextJokeButton.addEventListener('click', () => {
        getJoke();
    });
}

