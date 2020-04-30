const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P Element';
myParagraph.classList.add('special');
// console.log(myParagraph);
// console.log(myParagraph.innerText);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/400';
myImage.alt = 'niiiiice';
// console.log(myImage);

const myDiv = document.createElement('div');
myDiv.textContent = 'I am a Div Element';
myDiv.classList.add('wrapper');
// console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

const myUL = document.createElement('ul');
myUL.classList.add('unorderedlist');
myUL.textContent = 'List Heading';
console.log(myUL);

const myLi1 = document.createElement('li');
const myLi2 = document.createElement('li');
const myLi3 = document.createElement('li');
const myLi4 = document.createElement('li');
const myLi5 = document.createElement('li');

myLi1.textContent = '1';
myLi2.textContent = '2';
myLi3.textContent = '3';
myLi4.textContent = '4';
myLi5.textContent = '5';

myUL.appendChild(myLi1);
myUL.appendChild(myLi2);
myUL.appendChild(myLi3);
myUL.appendChild(myLi4);
myUL.appendChild(myLi5);

document.body.appendChild(myUL);


//======================================

console.log('it works!');

const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'Nice photo';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

// oh shoot! we need to add somethint to the top. like a heading!
const heading = document.createElement('h2');
heading.textContent = 'Cool Things';

myDiv.insertAdjacentElement('beforebegin', heading);

// <ul>
// <li>One</li>
// <li>two</li>
// <li>three</li>
// <li>four</li>
// <li>five</li>
// </ul>

const list = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'three';
list.appendChild(li);

document.body.insertAdjacentElement('afterbegin', list);

const li5 = document.createElement('li');
li5.textContent = 'Five';
list.append(li5);

const li1 = li5.cloneNode(true);
li1.textContent = 'one';
list.insertAdjacentElement('afterbegin', li1);

const li4 = document.createElement('li');
li4.textContent = 'four';
li5.insertAdjacentElement('beforebegin', li4);

const li2 = document.createElement('li');
li2.textContent = 'two';
li1.insertAdjacentElement('afterend', li2);
