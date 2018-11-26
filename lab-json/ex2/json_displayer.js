/**
 *  JavaScript File
 *  `json_displayer.js`
 *  by Teerapat Kraisrisirikul (60070183)
 */

var data = {
    "username" : "helloKitty",
    "social_media": [
        {
            "description" : "twitter",
            "link" : "https://twitter.com/itwebtech"
        },
        {
            "description" : "facebook",
            "link" : "https://www.facebook.com/itwebtech" 
        },
        {
            "description" : "github",
            "link" : "https://github.com/itwebtech" 
        }
    ] 
};

function display() {
    var text = '';
    
    document.write('Username : ' + data.username + '<br>');

    for (var i = 0; i < data.social_media.length; i++) {
        text = data.social_media[i].description + ' : ';
        text += '<a href=' + data.social_media[i].link + ' target=\"_blank\">' + data.social_media[i].link + '</a><br>';
        document.write(text);
    }
}
