/**
 *  change.js
 */

function add() {
    value1 = parseFloat(document.getElementById("value1").value);
    value2 = parseFloat(document.getElementById("value2").value);

    result = document.getElementById("result");
    result.innerHTML = "Result = " + (value1 + value2);
}
