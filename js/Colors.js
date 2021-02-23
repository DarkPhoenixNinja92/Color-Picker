const red = Math.round(Math.random() * 255);
const green = Math.round(Math.random() * 255);
const blue = Math.round(Math.random() * 255);
let bg = "rgb(" + red + "," + green + "," + blue + ");";


function colorChange(color) {
    document.body.style.backgroundColor = bg;
}