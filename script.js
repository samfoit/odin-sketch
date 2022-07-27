const container = document.querySelector('.container');

for (let j = 0; j < 16; j++){
    for (let i = 0; i < 16; i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');
        container.appendChild(div);
    }
}