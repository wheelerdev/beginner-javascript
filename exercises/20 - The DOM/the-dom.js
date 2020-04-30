// const p = document.querySelector('p');
// const div = document.querySelector('div');

// // console.log(p.textContent);

// p.textContent = 'now listen here.';

// // console.log(p.textContent);

// // console.log(div);

// const pizzaList = document.querySelector('.pizza');

// console.log(pizzaList.textContent);

// pizzaList.textContent = `${pizzaList.textContent}🍕`;

pic = document.querySelector('.nice');
pic.classList.toggle('round');
pic.classList.remove('cool');
console.log(pic.classList);

function toggleRound() {
        pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.alt = 'spinny animated picture';
