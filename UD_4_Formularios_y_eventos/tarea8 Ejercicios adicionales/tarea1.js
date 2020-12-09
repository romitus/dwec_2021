let height;
let width;

window.addEventListener("resize", myFunction);

function myFunction() {
    height = window.outerHeight;
    width = window.outerWidth;
    document.getElementById("hey").innerHTML = width + "x" + height;
}