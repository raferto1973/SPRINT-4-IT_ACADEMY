// Definim la classe JokeReport
class ReportAcudits {
    joke: string;
    score: number | null;           // Pot ser null si l'usuari no vota
    date: string;

    constructor(joke: string) {
        this.joke = joke;
        this.score = null;          // Inicialment la puntuació és null
        this.date = new Date().toISOString();       // Guardem la data actual en format ISO
    }

    setScore(score: number) {
        this.score = score;
    }
}


// Inicialitzem l'array que guardarà els reports dels acudits
let reportJokes: ReportAcudits[] = [];


// Afegim esdeveniments als botons de puntuació perquè actualitzin la puntuació de l'acudit actual
const scoreButtons = document.querySelectorAll('.scoreButton');
scoreButtons.forEach((button, index) => {
    button.addEventListener('click', () => {

        // Actualitzem la puntuació de l'últim acudit a reportJokes
        reportJokes[reportJokes.length - 1].setScore(index + 1);

        // Mostrem per consola el contingut de reportJokes
        console.log(reportJokes);

    });

});
