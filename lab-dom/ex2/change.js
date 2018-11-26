/**
 *  change.js
 */

function add() {
    value1 = parseFloat(document.getElementById("value1").value);
    value2 = parseFloat(document.getElementById("value2").value);
    
    result = document.getElementById("result");
    result.innerHTML = "Result = " + (value1 + value2);
    
    var newResultBox = document.createElement("p");
    var newResult = document.createTextNode(value1 + " + " + value2 + " = " + (value1 + value2));
    
    newResultBox.appendChild(newResult);
    document.body.appendChild(newResultBox);
}
