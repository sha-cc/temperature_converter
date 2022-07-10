
let convertFromSelector = document.getElementById("from");
let convertToSelector = document.getElementById("to");
let convertFrom = convertFromSelector.options[convertFromSelector.selectedIndex].value;
let convertTo = convertToSelector.options[convertToSelector.selectedIndex].value;

displayResult(document.getElementById("input").value);

function updateSelectorValues() {
    convertFrom = convertFromSelector.options[convertFromSelector.selectedIndex].value;
    convertTo = convertToSelector.options[convertToSelector.selectedIndex].value;
    console.log("Selected: " + convertFrom + ", " + convertTo);
}

function displayResult(value) {
    value = parseFloat(value);

    let output = document.getElementById("output");

    switch (convertFrom) {
        case "fahrenheit":
            if (convertTo == "celsius") output.innerHTML = ((value - 32) / 1.8).toFixed(4);
            else if (convertTo == "kelvin") output.innerHTML = (((value - 32) / 1.8) + 273.15).toFixed(4);
            else output.innerHTML = value;
            break;

        case "celsius":
            if (convertTo == "fahrenheit") output.innerHTML = ((value * 1.8) + 32).toFixed(4);
            else if (convertTo == "kelvin") output.innerHTML = (value + 273.15).toFixed(4);
            else output.innerHTML = value;
            break;

        case "kelvin":
            if (convertTo == "fahrenheit") output.innerHTML = (((value - 273.15) * 1.8) + 32).toFixed(4);
            else if (convertTo == "celsius") output.innerHTML = (value - 273.15).toFixed(4);
            else output.innerHTML = value;
            break;

        default:
            console.error("Something ain't right in the switch");
    }
}