/**
 *  JavaScript File
 *  `json_displayer.js`
 *  by Teerapat Kraisrisirikul (60070183)
 */

var data = [
                {
                    "id": 1,
                    "gender": "Female",
                    "lastname": "Davolio",
                    "firstname": "Nancy",
                    "position": "Sales Representative",
                    "address": "507 - 20th Ave. E. Apt. 2A"
                },
                {
                    "id": 2,
                    "gender": "Male",
                    "lastname": "Fuller",
                    "firstname": "Andrew",
                    "position": "Vice President, Sales",
                    "address": "908 W. Capital Way"
                },
                {
                    "id": 3,
                    "gender": "Female",
                    "lastname": "Leverling",
                    "firstname": "Janet",
                    "position": "Sales Representative",
                    "address": "722 Moss Bay Blvd."
                },
                {
                    "id": 4,
                    "gender": "Female",
                    "lastname": "Peacock",
                    "firstname": "Margaret",
                    "position": "Sales Representative",
                    "address": "4110 Old Redmond Rd."
                },
                {
                    "id": 5,
                    "gender": "Male",
                    "lastname": "Buchanan",
                    "firstname": "Steven",
                    "position": "Sales Manager",
                    "address": "14 Garrett Hill"
                },
                {
                    "id": 6,
                    "gender": "Male",
                    "lastname": "Suyama",
                    "firstname": "Michael",
                    "position": "Sales Representative",
                    "address": "Coventry House Miner Rd."
                },
                {
                    "id": 7,
                    "gender": "Male",
                    "lastname": "King",
                    "firstname": "Robert",
                    "position": "Sales Representative",
                    "address": "Edgeham Hollow Winchester Way"
                },
                {
                    "id": 8,
                    "gender": "Female",
                    "lastname": "Callahan",
                    "firstname": "Laura",
                    "position": "Inside Sales Coordinator",
                    "address": "4726 - 11th Ave. N.E."
                },
                {
                    "id": 9,
                    "gender": "Female",
                    "lastname": "Dodsworth",
                    "firstname": "Anne",
                    "position": "Sales Representative",
                    "address": "7 Houndstooth Rd."
                }
            ]

function display() {
    var text = '';

    for (var i = 0; i < data.length; i++) {
        text = data[i].id + ' ';
        text += '<b>' + data[i].firstname + ' ' + data[i].lastname + '</b> ';
        text += '(' + data[i].gender + ') ';
        text += 'is a ' + data[i].position + ', ' + data[i].address + '<br>';
        document.write(text);
    }
}
