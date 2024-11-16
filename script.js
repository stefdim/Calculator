let screen = document.getElementById('screen');

function screenDisplay(input) {
    if (screen.innerText === '0') {
        screen.innerHTML = input;
    } else {
        screen.innerHTML += input;
    }


}

function calculation() {
    try {
        screen.innerHTML = eval(screen.innerHTML);
    } catch (error) {
        screen.innerHTML = 'Error';
    }

}

function clearScreen() {
    screen.innerHTML = '0';
}
