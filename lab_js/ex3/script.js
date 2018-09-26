function rollImage() {
    var image_a = document.getElementById("image_a");
    var image_b = document.getElementById("image_b");
    var image_c = document.getElementById("image_c");
    var image_d = document.getElementById("image_d");

    image_a.src = "image_d.png";
    image_b.src = "image_a.png";
    image_c.src = "image_b.png";
    image_d.src = "image_c.png";

    image_a.id = "image_d";
    image_b.id = "image_a";
    image_c.id = "image_b";
    image_d.id = "image_c";
}
