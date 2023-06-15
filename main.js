const question = document.querySelector('#three');
const answer = document.querySelector('#four');
const arrow = document.querySelector('.ans');
answer.style.display = 'none';

arrow.addEventListener('click', function myFunction() {
    if (answer.style.display === "none") {
      question.style.fontWeight = '700';
      answer.style.display = "block";
    } else {
      answer.style.display = "none";
      question.style.fontWeight = '500';
    }
})