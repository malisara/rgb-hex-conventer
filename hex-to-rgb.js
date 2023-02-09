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
    document.getElementById('rgbInput').value = HexToRgb(randomHexColor);
}

);

function getRandomHexArrayIndex() {
    return Math.floor(Math.random() * hexArray.length);
}


function HexToRgb(HexCode) {
    let rgbArray = HexToRgbArray(HexCode);
    let rgbValue = 'rgb(';
    for (let i = 0; i < rgbArray.length - 1; i++) {
        rgbValue += rgbArray[i] + ', ';
    }
    rgbValue += rgbArray[rgbArray.length - 1] + ')';
    return rgbValue;
}


function HexToRgbArray(HexCode) {
    const hexPartial = ["A", "B", "C", "D", "E", "F"];
    const rgbPartial = [10, 11, 12, 13, 14, 15];
    let rgbArray = [];

    for (let i = 1; i < HexCode.length - 1; i += 2) {

        let firstHexElement = HexCode[i];
        let secondHexElement = HexCode[i + 1];
        let firstElementIntoRgb = '';
        let secondElementIntoRgb = '';

        if (isNaN(firstHexElement)) {
            firstElementIntoRgb += rgbPartial[hexPartial.indexOf(HexCode[i].toUpperCase())];
        }
        else {
            firstElementIntoRgb += HexCode[i];
        }

        if (isNaN(secondHexElement)) {
            secondElementIntoRgb += rgbPartial[hexPartial.indexOf(HexCode[i + 1].toUpperCase())];
        }

        else {
            secondElementIntoRgb += HexCode[i + 1];
        }

        rgbArray.push(Number(firstElementIntoRgb) * 16 + Number(secondElementIntoRgb));
    }
    return rgbArray;
}