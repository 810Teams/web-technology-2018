/*
    `validator.js` JavaScript
*/

function validateForm() {
    var nationalID = document.forms["registrationForm"]["nationalID"].value;
    var prefix = document.forms["registrationForm"]["prefix"].value;
    var firstName = document.forms["registrationForm"]["firstName"].value;
    var lastName = document.forms["registrationForm"]["lastName"].value;
    var address = document.forms["registrationForm"]["address"].value;
    var zone = document.forms["registrationForm"]["zone"].value;
    var city = document.forms["registrationForm"]["city"].value;
    var province = document.forms["registrationForm"]["province"].value;
    var postID = document.forms["registrationForm"]["postID"].value;
    var mobile = document.forms["registrationForm"]["mobile"].value;

    if (nationalID.length != 13 || Number.isNaN(nationalID)) {
        alert("National ID error.");
        return false;
    }
    if (prefix == "00") {
        alert("Please select prefix.");
        return false;
    }
    if (firstName.length < 2 || firstName.length > 20) {
        alert("First name too short.");
        return false;
    }
    if (lastName.length < 2 || lastName.length > 30) {
        alert("Last name too short.");
        return false;
    }
    if (address.length < 2) {
        alert("Address too short.");
        return false;
    }
    if (zone.length < 2) {
        alert("Zone too short.");
        return false;
    }
    if (city.length < 1) {
        alert("City error.");
        return false;
    }
    if (province == "00") {
        alert("Please select province.");
        return false;
    }
    if (postID.length != 5 || Number.isNaN(postID)) {
        alert("Post ID error.");
        return false;
    }
    if (mobile.length < 9 || mobile.length > 10 || Number.isNaN(mobile)) {
        alert("Mobile number error.");
        return false;
    }

    return true;
}
