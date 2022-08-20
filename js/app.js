document.getElementById("side_menu").style.display = "none";
function myFunction() {
    var x = document.getElementById("side_menu");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
