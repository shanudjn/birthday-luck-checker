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

    calculate(day, month, year, luckyNumber);

}

function getSum(number) {
    var sum = 0;
    while (number != 0) {
        let temp = number % 10;
        number = Math.floor(number / 10);
        sum += temp;
    }
    return sum;
}

function calculate(day, month, year, luckyNumber) {
    var finalSum = 0;
    var daySum = getSum(day);
    var monthSum = getSum(month);
    var yearSum = getSum(year);

    finalSum = (daySum + monthSum + yearSum);

    if (finalSum % luckyNumber == 0) {
        console.log('Yay')
    }
    else {
        console.log('nay')
    }
}
