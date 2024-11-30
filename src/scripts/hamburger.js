function myFunction() {
    var x = document.getElementById("myTopnav");
    var hamburger = document.getElementById("hamburger");
    if (x.className === "topnav") {
        x.className += " responsive";
        hamburger.style.marginTop = "0px";
    } else {
        x.className = "topnav";
        hamburger.style.marginTop = "72px";
    }
}
