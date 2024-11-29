let slideIndex = 1;

let slides = document.getElementsByClassName("mySlides");

if (this.screen.width <= 890) {
    for (i = 0; i < slides.length; i++) {
        console.log(this.screen.width);
        slides[i].style = "none";
    }
} else {
    showSlides(slideIndex);
}


window.addEventListener("resize", function () {
    if (this.screen.width <= 890) {
        for (i = 0; i < slides.length; i++) {
            console.log(this.screen.width);
            slides[i].style = "none";
        }
    } else {
        showSlides(slideIndex);
    }
});

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {

    let i;
    let dots = document.getElementsByClassName("dots");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].src = "comic-book-society/src/img/icons/dot-off.png";
    }

    slides[slideIndex - 1].style.display = "grid";
    dots[slideIndex - 1].src = "comic-hook-society/src/img/icons/dot-on.png";

}

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