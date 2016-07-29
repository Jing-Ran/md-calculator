(function() {
    var calculator = document.getElementById("calculator"),
        screens = document.querySelectorAll(".screens input"),
        inputScreen = document.getElementById("screenInput"),
        topScreen = document.getElementById("screen1"),
        displayBtns = document.getElementsByClassName("display-btns"),
        clearBtn = document.getElementById("clear"),
        deleteBtn = document.getElementById("delete"),
        equalBtn = document.getElementById("equal"),
        operators = "+-*/",
        result;

    function fixDot(element) {
        var value = element.value,
            lastInput = value.substr(-1);
        if (operators.indexOf(lastInput) !== -1 || lastInput === "(" ||
            value === "") { // if previous input is op, or (, or empty
            console.log("zero");
            element.value += "0";
        } else if (lastInput === ".") { // if consecutive dots appear
            element.value = value.substr(0, value.length - 1);
        }
        return value;
    }

    function fixNums(value) {
        return value.replace(/[\d.]+/g, function(n) {
            return parseFloat(n);
        });
    }

    function displayValue(btn) {
        var lastInput = inputScreen.value.substr(-1);
        console.log("lastinput: " + lastInput);


        if (btn.value === ".") {
            console.log("dot");
            fixDot(inputScreen);
        } else if (operators.indexOf(btn.value) !== -1) {// if btn.value is an op
            console.log("ops");
            if (operators.indexOf(lastInput) !== -1) {
                console.log("last op");
                console.log("before change: " + inputScreen.value);
                inputScreen.value = inputScreen.value.substr(0, inputScreen.value.length - 1);
                console.log(inputScreen.value);
            }
        }
        inputScreen.value += btn.value;
        // else { // When the inputScreen is not empty
        //     if (operators.indexOf(btn.value) === -1) {
        //         inputScreen.value = btn.
        //     }
        // }
    }


    for (var i = 0; i < displayBtns.length; i++) {
        displayBtns[i].addEventListener("click", function() {
            displayValue(this);
        });
    }

    clearBtn.addEventListener("click", function() {
        inputScreen.value = "";
    });

    clearBtn.addEventListener("dblclick", function() {
        topScreen.value = "";
        result = "0";
    });

    deleteBtn.addEventListener("click", function() {
        inputScreen.value = inputScreen.value.substring(0,
            inputScreen.value.length - 1);
    });

    equalBtn.addEventListener("click", function() {
        var fixedValue = fixNums(inputScreen.value);

        topScreen.value = inputScreen.value;

        try {
            inputScreen.value = eval(fixedValue);
        } catch(e) {
            inputScreen.value = "Error";
        }

    });

})();