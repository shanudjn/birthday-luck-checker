var dayInput = document.querySelector('.day');
var monthInput = document.querySelector('.month');
var yearInput = document.querySelector('.year');
var luckyNumberInput = document.querySelector('.lucky-number');
var checkButton = document.querySelector('.check-button');
var resultDiv = document.querySelector('.result');
var resultSection = document.querySelector('.p__result');


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
        resultDiv.style.display = "block";
        resultDiv.style.backgroundColor = '#A1FF63';
        resultDiv.style.border = "1px solid #A1FF63"
        resultSection.innerText = 'Yay! you have a lucky birthday';


    }
    else {
        resultDiv.style.display = "block";
        resultDiv.style.backgroundColor = '#DE0003';
        resultDiv.style.border = "1px solid #DE0003"
        resultSection.innerText = 'Sorry ! Your birthday isn\'t lucky'
    }
}
