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

pixels.forEach()