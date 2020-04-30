// Make a div

// add a class of wrapper to it

// put it into the body

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
document.body.appendChild(myDiv);

// make an unordered list

// add three list items with the words "one, two three" in them
// put that list into the above wrapper

const myUL = document.createElement('ul');

myDiv.appendChild(myUL);

const li1 = document.createElement('li');
li1.textContent = 'One';
const li2 = document.createElement('li');
li2.textContent = 'Two';
const li3 = document.createElement('li');
li3.textContent = 'Three';

myUL.insertAdjacentElement('afterbegin', li1);
li1.insertAdjacentElement('afterend', li2);
li2.insertAdjacentElement('afterend', li3);

// create an image
// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.width = 250;
myImage.classList.add('cute');
myDiv.appendChild(myImage);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
// add a class to the second paragraph called warning

const myHTML = `
    <div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, vel inventore. Harum magni, libero perspiciatis aut eius id deleniti accusantium fugit assumenda quisquam aliquid? Enim veritatis dolore neque suscipit delectus.
        </p>
        <p class="warning">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, vel inventore. Harum magni, libero perspiciatis aut eius id deleniti accusantium fugit assumenda quisquam aliquid? Enim veritatis dolore neque suscipit delectus.
        </p>
    </div>
    `;

const itPutsTheHTMLInTheElement = document.createRange().createContextualFragment(myHTML);
myDiv.prepend(itPutsTheHTMLInTheElement);

// remove the first paragraph

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
        // const name = 'Leo';
        // const age = 11;
        // const height = '36in';
        // const ageInDogYears = age * 7;
        // console.log(ageInDogYears);
        const html = `
        <div class="playerCard">
           <h2>${name} — ${age}</h2>
           <p>They are ${height} inches tall and ${age} years old. In Dog years this person would be ${age *
                7}. That would be a tall dog!</p>
                <button class="delete" type=button>&times; Delete</button>

        </div>
        `;
        // const infoSchminfo = document.createRange().createContextualFragment(theHTML);
        // myDiv.prepend(infoSchminfo);
        return html;
}

// console.log(generatePlayerCard('Scott', 11, '74'));

// make a new div with a class of cards

const cards = document.createElement('div');
cards.classList.add('cards');

// Have that function make 4 cards

const card1 = generatePlayerCard('Scott', 39, '74');
const card2 = generatePlayerCard('Leo', 13, '24');
const card3 = generatePlayerCard('Clancy', 10, '60');
const card4 = generatePlayerCard('Kylo', 33, '80');

cards.innerHTML = card1 + card2 + card3 + card4;
console.log(cards.innerHTML);

myDiv.insertAdjacentElement('beforebegin', cards);
const buttons = document.querySelectorAll('.delete');

console.log(buttons);

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener

// console.log(myDiv);
