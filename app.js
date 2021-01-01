var dayInput = document.querySelector('.day');
var monthInput = document.querySelector('.month');
var yearInput = document.querySelector('.year');
var luckyNumberInput = document.querySelector('.lucky-number');
var checkButton = document.querySelector('.check-button')


checkButton.addEventListener('click', getData);

function getData() {
    var day = dayInput.value;
    var month = monthInput.value;
    var year = yearInput.value;

    var luckyNumber = luckyNumberInput.value;


    console.log(day)
}
