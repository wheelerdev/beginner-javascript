// select the elements
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');

const shakeButton = document.querySelector('.shake');
const MOVE_AMOUNT = 40;

let hue = 0;
console.log(hue);
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

// make a variable called height and width from the same properties on our canvas.
const { width, height } = canvas;

// create random x and y starting points on the canvas
// console.log(Math.floor(Math.random() * 100));
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

// setup canvas for drawing

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// write draw function
function draw({ key }) {
        // increment the hue
        hue += hue;
        ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
        console.log(key);
        // start the path
        ctx.beginPath();
        ctx.moveTo(x, y);
        // move our x and y values depending on what the user did
        // x -= MOVE_AMOUNT;
        // y -= MOVE_AMOUNT;
        switch (key) {
                case 'ArrowUp':
                        y -= MOVE_AMOUNT;
                        break;
                case 'ArrowDown':
                        y += MOVE_AMOUNT;
                        break;
                case 'ArrowLeft':
                        x -= MOVE_AMOUNT;
                        break;
                case 'ArrowRight':
                        x += MOVE_AMOUNT;
                        break;
                default:
                        break;
        }
        ctx.lineTo(x, y);
        ctx.stroke();
}

// write handler for keys
function handleKey(e) {
        // e.preventDefault();
        if (e.key.includes('Arrow')) {
                e.preventDefault();
                draw({ key: e.key });
        }
}

// clear/shake function
function clearCanvas() {
        canvas.classList.add('shake');
        ctx.clearRect(0, 0, width, height);
        canvas.addEventListener(
                'animationend',
                function() {
                        canvas.classList.remove('shake');
                },
                { once: true }
        );
}

// listen for arrow keys
window.addEventListener('keydown', handleKey);
shakeButton.addEventListener('click', clearCanvas);
