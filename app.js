// import functions and grab DOM elements
import { countsAsAYes } from '../utils.js';

const quizButton = document.getElementById('quiz-button');
const resultSpace = document.getElementById('result-space')

// console.log(quizButton);
// console.log(resultSpace);


// set event listeners to update state and DOM

quizButton.addEventListener('click', () => {
    // post-click logic goes here!
    // console.log('sup');


    alert('Welcome to the Casey Quiz!');
    const proceed = confirm('Do you want to proceed?');

    if (!proceed) return;
    let correctAnswers = 0;

    const firstName = prompt('What is your first name?');
    const lastName = prompt('Last Name?');


    const firstAnswer = prompt('Has Casey lived in Kalamazoo for 10 years?');
    if (countsAsAYes(firstAnswer)) correctAnswers++;

    const secondAnswer = prompt('Caseys favorite camp site is less than 3 hours away');
    if (countsAsAYes(secondAnswer)) correctAnswers++;

    const thirdAnswer = prompt('casey went to her first festival in 1998');
    if (!countsAsAYes(thirdAnswer)) correctAnswers++;

    const resultsSentence = '' + firstName + ' ' + lastName + ', you got ' + correctAnswers + ' right!';

    resultSpace.textContent = resultsSentence;


});
