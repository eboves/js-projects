const body = document.getElementsByTagName("body")[0]
// this function is called as an onclick argument.
// then get the argument value from the elements.
function setColor(name) {
    body.style.backgroundColor = name;
}
// this function generate a RGB Number, to create a random color
function randomColor() {
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)
    const red = Math.round(Math.random() * 255)

    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;
}