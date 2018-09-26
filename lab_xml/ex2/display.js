/**
 *  display.js
 */

var xhttp;
xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    } 
};

xhttp.open("GET", "company.xml", true);
xhttp.send();

function myFunction(xml) {
    var x, i, txt, xmlDoc;
    xmlDoc = xml.responseXML;

    employees = xmlDoc.getElementsByTagName("employee");

    for (i = 0; i < employees.length; i++) {
        txt = '<div><p>';
        txt += employees[i].id + ' ';
        txt += employees[i].childNodes[1].innerHTML + ' ';
        txt += employees[i].childNodes[3].innerHTML + ' ';
        txt += employees[i].childNodes[5].innerHTML + ' ';
        txt += '( ' + employees[i].childNodes[7].innerHTML + ' ), ';
        txt += '<i>' + employees[i].childNodes[9].innerHTML + '</i></p></div>';
        document.write(txt);
    }
 }
