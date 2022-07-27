const container = document.querySelector('.container');

for (let j = 0; j < 16; j++){
    for (let i = 0; i < 16; i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');
        div.addEventListener('mouseenter', function() {
            this.style.backgroundColor = "black";
        })
        container.appendChild(div);
    }
}

const pixels = document.querySelectorAll('.pixel');

const button = document.querySelector('.button');
button.addEventListener('click', clickButton);

function clickButton(){
    const message = prompt("Enter number of pixels (max 100)");
    let num = parseInt(message);
    if (num != NaN && num <= 100){
        createNewBoard(num);
    }
}

function createNewBoard(tiles){
    // delete all pixels
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => pixel.remove());
    // find the size
    const size = 960 / tiles;

    // create new board
    for (let j = 0; j < tiles; j++){
        for (let i = 0; i < tiles; i++){
            const div = document.createElement('div');
            div.classList.add('pixel');
            div.style.minWidth = `${size}px`;
            div.style.maxHeight = `${size}px`;

            div.addEventListener('mouseenter', function() {
                this.style.backgroundColor = "black";
            })
            container.appendChild(div);
        }
    }
}