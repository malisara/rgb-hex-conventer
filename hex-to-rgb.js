"use strict";

const hexArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const random_color_btn = document.getElementById('random-color-btn');
random_color_btn.addEventListener('click', function () {
    let randomHexColor = '#';

    for (let i = 0; i < 6; i++) {
        randomHexColor += hexArray[getRandomHexArrayIndex()];
    }

    document.getElementById('circle').style.backgroundColor = randomHexColor;
    document.getElementById('hexInput').value = randomHexColor;
    // TODO: create rgb code from hex
}

);

function getRandomHexArrayIndex() {
    return Math.floor(Math.random() * hexArray.length);
}
