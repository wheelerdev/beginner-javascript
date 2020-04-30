const myButton = document.querySelector('.button');
const randomNess = document.querySelector('.randomness');

function handleClick() {
        const gimmeNumber = Math.floor(Math.random() * 1000);
        myButton.classList.toggle('clicked');
        randomNess.innerHTML = `<p>${gimmeNumber}</p>`;
}

myButton.addEventListener('click', handleClick);
