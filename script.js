var buttons = document.getElementsByClassName("button");
console.log("buttom", buttons);
var display = document.getElementById("display");
console.log("display", display);
var operand1 = 0;
var operand2 = null;
var operator3 = null;
function isOperator(value) {
    return value == "+" || value == "-" || value == "*" || value == "/"
}
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        var value = this.getAttribute('data-value');
        console.log("value", value);
        var text = display.textContent.trim();
        if (isOperator(value)) {
            operator = value
            operand1 = parseFloat(text);
            display.textContent=""
        }
        else if (value == "ac") {
            display.textContent=""

        }
        else if(value =="")
        else {
            display.innerText += value;
        }
    });
}