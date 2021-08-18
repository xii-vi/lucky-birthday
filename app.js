var dateOfBirth = document.querySelector("#dob");
var luckyNum = document.querySelector("#luckyNo");
var checkBtn = document.querySelector("#check");
var outputBox = document.querySelector("#output-box");

function compareValues(sum, luckyNum) {
    if (sum % luckyNum === 0) {
        outputBox.innerText = "Your Birthday is Lucky";
    } else {
        outputBox.innerText = "Sorry, Better Luck Next Birth";
    }
}

function luckyOne() {
    var dat = dateOfBirth.value;
    var sum = calculateSum(dat);
    if (sum && dat)
        compareValues(sum, luckyNum)
    else {
        outputBox.innerText = "Please Enter Required Values";
    }
}

function calculateSum(dat) {
    dat = dat.replaceAll("-", "");
    let sum = 0;
    for (let i = 0; i < dat.length; i++) {
        sum = sum + Number(dat.charAt(i));
    }
    return sum;
}

checkBtn.addEventListener('click', luckyOne);