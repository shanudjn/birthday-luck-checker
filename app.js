var dayInput = document.querySelector('.day');
var monthInput = document.querySelector('.month');
var yearInput = document.querySelector('.year');
var luckyNumberInput = document.querySelector('.lucky-number');
var errorMessageDiv = document.querySelector('.error-message-div');
var errorMessageElement = document.querySelector('.error-message');
var checkButton = document.querySelector('.check-button');
var resultDiv = document.querySelector('.result');
var resultSection = document.querySelector('.p__result');


checkButton.addEventListener('click', getData);

dayInput.addEventListener('change', (e) => {
    if (e.target.value >= 32 || e.target.value < 0) {
        console.log('Day should be between 0 to 31');
        errorMessageDiv.style.display = "block";
        errorMessageDiv.style.backgroundColor = "#DE0003";
        errorMessageElement.innerText = "Day should be between 0 to 31"
        // errorMessageDiv.style.border = "1px solid #A1FF63"

    } else {
        errorMessageDiv.style.display = "none";
    }
})
monthInput.addEventListener('change', (e) => {
    if (e.target.value > 12 || e.target.value < 1) {
        console.log('Month should be between 1 to 12');
        errorMessageDiv.style.display = "block";
        errorMessageDiv.style.backgroundColor = "#DE0003";
        errorMessageElement.innerText = "Month should be between 1 to 12"
    } else {
        errorMessageDiv.style.display = "none";
    }
})
yearInput.addEventListener('change', (e) => {
    if (e.target.value < 0) {
        console.log('Year cannot negative number');
        errorMessageDiv.style.display = "block";
        errorMessageDiv.style.backgroundColor = "#DE0003";
        errorMessageElement.innerText = "Year cannot Negative number"
    } else {
        errorMessageDiv.style.display = "none";
    }
})



function getData() {

    var day = dayInput.value;
    var month = monthInput.value;
    var year = yearInput.value;

    var luckyNumber = luckyNumberInput.value;

    if (day == "" || month == "" || year == "" || luckyNumber == "") {
        console.log('Inputs cant be empty');
        errorMessageDiv.style.display = "block";
        errorMessageDiv.style.backgroundColor = "#DE0003";
        errorMessageElement.innerText = "Inputs cant be empty"
        return;
    }
    else {
        errorMessageDiv.style.display = "none";

    }

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
