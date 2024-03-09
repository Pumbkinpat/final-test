function displaySubnav(button) {
    var subnav = button.nextElementSibling;
    if (subnav.style.display === "none" || subnav.style.display === "") {
        subnav.style.display = "block";
    } else {
        subnav.style.display = "none";
    }
}
