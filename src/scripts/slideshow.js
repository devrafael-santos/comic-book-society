let slideIndex = 1;

let slides = document.getElementsByClassName("mySlides");

if (this.screen.width <= 890) {
    for (i = 0; i < slides.length; i++) {
        slides[i].style = "none";
    }
} else {
    showSlides(slideIndex);
}


window.addEventListener("resize", function () {
    if (this.screen.width <= 890) {
        for (i = 0; i < slides.length; i++) {
            slides[i].style = "none";
        }
    } else {
        showSlides(slideIndex);
    }
});



function plusSlides(n) {
    showSlides(slideIndex += n);
}

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
        dots[i].src = "/comic-book-society/src/img/icons/dot-off.png";
    }

    slides[slideIndex - 1].style.display = "grid";
    dots[slideIndex - 1].src = "/comic-book-society/src/img/icons/dot-on.png";

}