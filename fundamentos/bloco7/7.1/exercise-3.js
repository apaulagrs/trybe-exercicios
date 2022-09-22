const button = document.getElementById('click');
const h1 = document.getElementById('total');
let clickCount;

function clicks() {
    clickCount = 0;
    button.addEventListener('click', () => {
        clickCount += 1;
        h1.innerText = `Total: ${clickCount}`;
    });
}clicks();
