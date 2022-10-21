let quoteContent = document.querySelector('.content');
let authorName = document.querySelector('.author');

function generateQuote() {
    fetch('https://api.quotable.io/random', {
        method: 'GET'
    })
    .then(responseObj => responseObj.json())
    .then(quote => {
        showUI(quote);
    })
    .catch((error) => {
        alert(error.message);
    });
}

function showUI(quoteObj) {
    console.log(quoteObj.content)
    console.log(quoteObj.author)
    quoteContent.innerText = quoteObj.content;
    authorName.innerText = quoteObj.author;
}

document.addEventListener('DOMContentLoaded', () => {
    generateQuote();
})

document.querySelector('.generate-quote').addEventListener('click', () => {
    generateQuote();
})

document.querySelector('.speak-quote').addEventListener('click', () => {
    const synthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(quoteContent.innerText);
    synthesis.speak(utterance);
})