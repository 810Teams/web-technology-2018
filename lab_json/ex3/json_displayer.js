/**
 *  JavaScript File
 *  `json_displayer.js`
 *  by Teerapat Kraisrisirikul (60070183)
 */

var xmlhttp = new XMLHttpRequest();
var url = "person.json";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        display(JSON.parse(xmlhttp.responseText)[0]);
    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

function display(data) {
    var text = '';

    text += data.firstName + ' ' + data.lastName + ', ';
    text += data.gender.type + ' ' + data.age + ' years old.' + '<br>';
    text += data.address.streetAddress + ' ' + data.address.city + ' ' + data.address.state + '<br>'; 
    text += data.address.postalCode + '<br>';

    for (var i = 0; i < data.phoneNumber.length; i++) {
        text += data.phoneNumber[i].type + ' : ' + data.phoneNumber[i].number + '<br>';
    }

    document.write(text);
}
