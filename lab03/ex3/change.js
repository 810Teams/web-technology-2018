/**
 *  change.js
 */

function start() {
    // Image
    var image = document.createElement("img");
    image.src = "billgates.jpg";
    document.body.appendChild(image);

    // My Skills
    var p = document.createElement("p");
    var b = document.createElement("b");
    p.appendChild(b);
    b.innerHTML = "My Skills."
    document.body.appendChild(p);

    // List
    var ul = document.createElement("ul");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");

    li1.innerHTML = "Visual C++ Programming";
    li2.innerHTML = "Python Programming";

    ul.appendChild(li1);
    ul.appendChild(li2);

    document.body.appendChild(ul);
}
