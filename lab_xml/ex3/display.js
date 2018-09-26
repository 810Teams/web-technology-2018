/**
 *  display.js
 */

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    } 
};

xhttp.open("GET", "company.xml", true);
xhttp.send();

function myFunction(xml) {
    var xmlDoc = xml.responseXML;

    employees = xmlDoc.getElementsByTagName("employee");

    // Adding new nodes
    for (var i = 0; i < employees.length; i++) {
        newElement = xmlDoc.createElement("country");
        newText = xmlDoc.createTextNode("USA");
        newElement.appendChild(newText);
        employees[i].appendChild(newElement);
    }

    // Display
    for (var i = 0; i < employees.length; i++) {
        txt = '<div><p>';
        txt += employees[i].getAttribute("id") + ' ';
        txt += employees[i].childNodes[1].innerHTML + ' ';
        txt += employees[i].childNodes[3].innerHTML + ' ';
        txt += employees[i].childNodes[5].innerHTML + ' ';
        txt += '( ' + employees[i].childNodes[7].innerHTML + ' ), ';
        txt += '<i>' + employees[i].childNodes[9].innerHTML + '</i>, ';
        txt += employees[i].childNodes[11].innerHTML + '</p></div>';
        document.write(txt);
    }
 }
