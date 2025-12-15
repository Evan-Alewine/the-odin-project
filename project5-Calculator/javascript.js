console.log("Loading");
document.addEventListener("DOMContentLoaded", () => {
    console.log("Loading Complete");
});

let inputtingX = true;
let inputX = "";
let inputtingY = false;
let inputY = "";
let operatorCount = 0;
let finalVal = 0;

document.addEventListener('keydown', function(keyboardInput) {
    let keyPress = keyboardInput.key
        if (keyPress == "Enter") {
            calculate();
            return;
        } else if (keyPress == "Backspace" || keyPress == "Delete") {
            clearInput();
            return;
        } else {
            switch(keyPress) {
                case "0":
                    append(0)
                break;
                case "1":
                    append(1)
                break;
                case "2":
                    append(2)
                break;
                case "3":
                    append(3)
                break;
                case "4":
                    append(4)
                break;
                case "5":
                    append(5)
                break;
                case "6":
                    append(6)
                break;
                case "7":
                    append(7)
                break;
                case "8":
                    append(8)
                break;
                case "9":
                    append(9)
                break;
                case "+":
                    operand("+")
                break;
                case "-":
                    operand("-")
                break;
                case "*":
                    operand("*")
                break;
                case "/":
                    operand("/")
                break;
                case ".":
                    decimalify()
                break;
            }
            return;
    }
});

function append(value) {
    if (inputtingX == true) {
            finalVal = 0;
            document.getElementById("valueX").classList.toggle("invisible", true);
            document.getElementById("operator").classList.toggle("invisible", true);
            document.getElementById("valueY").classList.toggle("invisible", true);
            document.getElementById("equate").classList.toggle("invisible", true);
            document.getElementById("equate").innerText = "=";
                if (inputX === "-0") {inputX = 0 - value;} 
                else if (inputX == "0") {inputX = value;}
                else {inputX = inputX + value};
            document.getElementById("input").innerText = inputX;
            document.getElementById("valueX").innerText = inputX;
    }
    if (inputtingY == true) {
        document.getElementById("equate").innerText = "=";
        if (inputY === "-0") { inputY = 0 - value; }
        else if (inputY == "0") { inputY = value; }
        else { inputY = inputY + value; }
        document.getElementById("input").innerText = inputY;
        document.getElementById("valueY").innerText = inputY;
    }
}

function operand(value) {
    document.getElementById("equate").innerText = "=";
    document.getElementById("valueX").classList.toggle("invisible", false);  
    document.getElementById("operator").classList.toggle("invisible", false);
    if (inputX == "") {
        inputtingY = true;
        inputtingX = false;
        inputX = finalVal;
        document.getElementById("valueX").innerText = inputX;
        document.getElementById("valueY").classList.toggle("invisible", true);
    }
    if (operatorCount == 0) {
            operatorCount = 1;
            inputtingX = false;
            document.getElementById("input").innerText = 0;
            document.getElementById("operator").innerText = value;
            document.getElementById("valueY").innerText = 0;
            inputtingY = true;
            return;
    } else {document.getElementById("operator").innerText = value;}
}

function calculate() {
    document.getElementById("valueX").classList.toggle("invisible", false);
    document.getElementById("operator").classList.toggle("invisible", false);
    document.getElementById("valueY").classList.toggle("invisible", false);
    document.getElementById("equate").classList.toggle("invisible", false);
    if (inputX == "" && inputY == "") { return; }
    if (inputY == "") {
        document.getElementById("valueY").innerText = 0;
    } else { document.getElementById("valueY").innerText = inputY;}
    inputX = Number(inputX);
    inputY = Number(inputY);
    if (document.getElementById("operator").innerText == "+") {
        finalVal = inputX + inputY;
        notate();
        document.getElementById("input").innerText = finalVal;
    }
    if (document.getElementById("operator").innerText == "-") {
        finalVal = inputX - inputY;
        notate();
        document.getElementById("input").innerText = finalVal;
    }
    if (document.getElementById("operator").innerText == "*") {
        finalVal = inputX * inputY;
        notate();
        document.getElementById("input").innerText = finalVal;
    }
    if (document.getElementById("operator").innerText == "/") {
        if (inputX === 0 && inputY === 0) {
            document.getElementById("input").innerText = "🤷"
            inputX = "";
            inputY = "";
            operatorCount = 0;
            inputtingX = true;
            inputtingY = false;
            return;
        }
        finalVal = inputX / inputY;
        notate();
        document.getElementById("input").innerText = finalVal;
    }
    inputX = "";
    inputY = "";
    operatorCount = 0;
    inputtingX = true;
    inputtingY = false;
    return;
}

function clearInput() {
    if (inputtingX == true) {
            document.getElementById("valueX").classList.toggle("invisible", true);
            document.getElementById("operator").classList.toggle("invisible", true);
            document.getElementById("valueY").classList.toggle("invisible", true);
            document.getElementById("equate").classList.toggle("invisible", true);
            document.getElementById("input").innerText = 0;
            inputX = "";
            finalVal = 0;
            operatorCount = 0;
            document.getElementById("operator").innerText = '+';
            return;
    }
    if (inputtingY == true && inputY != "") {
            document.getElementById("valueY").classList.toggle("invisible", true);
            document.getElementById("equate").classList.toggle("invisible", true);
            document.getElementById("input").innerText = 0;
            inputY = "";
            operatorCount = 0;
            return;
    }
    if (inputtingY == true && inputY == "") {
            document.getElementById("valueX").classList.toggle("invisible", true);
            document.getElementById("operator").classList.toggle("invisible", true);
            document.getElementById("valueY").classList.toggle("invisible", true);
            document.getElementById("equate").classList.toggle("invisible", true);
            document.getElementById("input").innerText = 0;
            inputX = ""
            inputtingX = true;
            inputtingY = false;
            operatorCount = 0;
            document.getElementById("operator").innerText = '+';
            return;
    }
}

function decimalify() { 
    if (inputtingX == true) {
        let isXFloat = inputX.includes('.');
            if (isXFloat == false) {
                inputX = inputX + ".";
                document.getElementById("input").innerText = inputX;
            }
            else {
                return;
            }
    } 
    if (inputtingY == true) {
        let isYFloat = inputY.includes('.');
            if (isYFloat == false) {
                inputY = inputY + ".";
                document.getElementById("input").innerText = inputY;
            }
    }
}

function makeNegative() {
    if (finalVal == 0 ) { 
        if (inputtingX == true && inputX != "") {
            inputX = -(inputX);
            document.getElementById("valueX").innerText = inputX;
            document.getElementById("input").innerText = inputX;
        }
        if (inputtingX == true && inputX == "") {
            inputX = "-0";
            document.getElementById("valueX").innerText = inputX;
            document.getElementById("input").innerText = inputX;
        }
        if (inputtingY == true && inputY != "") {
            inputY = -(inputY);
            document.getElementById("valueY").innerText = inputY;
            document.getElementById("input").innerText = inputY;
        }
        if (inputtingY == true && inputY == "") {
            inputY = "-0";
            document.getElementById("valueY").innerText = inputY;
            document.getElementById("input").innerText = inputY;
        }
        return;
    } else {
        document.getElementById("valueX").classList.toggle("invisible", true);
        document.getElementById("operator").classList.toggle("invisible", true);
        document.getElementById("valueY").classList.toggle("invisible", true);
        document.getElementById("equate").classList.toggle("invisible", true);
        finalVal = 0 - finalVal;
        document.getElementById("input").innerText = finalVal;
    }
    }

function notate() {
    let digits = String(Math.abs(finalVal)).length
    if (digits > 9) {
        document.getElementById("equate").innerText = "≈";
        finalVal = finalVal.toExponential(4);
    }
    return;
}    
