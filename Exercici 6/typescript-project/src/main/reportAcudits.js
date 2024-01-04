"use strict";
class ReportAcudits {
    constructor(joke) {
        this.joke = joke;
        this.score = null;
        this.date = new Date().toISOString();
    }
    setScore(score) {
        this.score = score;
    }
}
let reportJokes = [];
const scoreButtons = document.querySelectorAll('.scoreButton');
scoreButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        reportJokes[reportJokes.length - 1].setScore(index + 1);
        console.log(reportJokes);
    });
});
