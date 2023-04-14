const checkAnswerBtnElement = document.querySelector('.btn-question-check');
const answerInputElement = document.querySelector('.form-control');
const correctAnswerElement = document.querySelector('.correct-answer');
const incorrectAnsweElement = document.querySelector('.incorrect-answer');
const correctAnswerValue = correctAnswerElement.dataset.correctAnswer;

checkAnswerBtnElement.addEventListener('click', (event) => {
  event.preventDefault();
  const answerValue = answerInputElement.value;

  if (answerValue === correctAnswerValue) {
    // попытки сделать счет при помощи localstorage
    // if (localStorage.getItem('score') === null) {
    //   localStorage.setItem('score', 1);
    // } else {
    //   let currentScore = Number(localStorage.getItem('score'));
    //   currentScore += 1;
    //   console.log('currentScore', currentScore);
    //   localStorage.setItem('score', currentScore);
    // }
    correctAnswerElement.classList.toggle('is-visible');
  } else {
    incorrectAnsweElement.classList.toggle('is-visible');
  }
});
