// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");


INPUT_TEXT.addEventListener('click', function (event) {
    event.preventDefault();
});

INPUT_CHECKBOX.addEventListener('click', function (event2){
    event2.preventDefault();
});

HREF_LINK.addEventListener('click', function (event3){
    event3.preventDefault();
});
