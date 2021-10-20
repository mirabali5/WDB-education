


 let total = 0;
 let strbuffer = "0";
 let operator = null;


 function calculations() {
    const intBuffer = parseInt(strbuffer); 
    if (operator === "+") {
        total += intBuffer;
    } else if (operator === "-") {
        total -= intBuffer;
    } else if (operator === "x") {
        total *= intBuffer;
    } else {
        total = total / intBuffer;
    }
    return total
}

function makesNumber(value) {
    if (strbuffer === "0") {
        strbuffer = value;
    } else {
        strbuffer = strbuffer + value
    }
    return strbuffer;
}

function makesSymbol(symbol) {
    if (symbol === "C") {
        strbuffer = "0";
        total = 0;
    } else if (symbol === "←") {
        if (parseInt(strbuffer) < 10) {
            strbuffer = "0"
        } else {
            strbuffer = strbuffer.substring(0, strbuffer.length-1)
        }
    } else if (symbol === "=") {
        strbuffer = calculations()
        total = 0
    }

    else { 
        const intBuffer = parseInt(strbuffer);
        if (total === 0) {
            total = intBuffer;
        } else {
            total = calculations();
        }
        operator = symbol;
        strbuffer = "0";
    }
    return strbuffer;
}


  function setListeners() {
        let elements = document.querySelectorAll(".buttons"); 
        for (item of elements) {
            let t = item.innerText;
            item.addEventListener("click", function () {
                buttonClicked(t)
            })
        }
      }

setListeners();


function buttonClicked(valueClicked) {
    let final = 0;
    if (isNaN(parseInt(valueClicked))) { //NaN means "Not a Number"
        final = makesSymbol(valueClicked);

    } else {
        final = makesNumber(valueClicked);
        strbuffer = final;
    }
    temp = document.getElementById("important");
    temp.innerHTML = final;
}

