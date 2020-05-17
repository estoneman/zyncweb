const imageFiles = ['../img/psych1.jpg',
                    '../img/psych2.jpg',
                    '../img/psych3.jpg',
                    '../img/zawa1.webp'];

const slideshowSection = document.querySelector('.slideshow');

const image = document.querySelector('.image');

const nextButton = document.querySelector('.next');

function playSlideshow() {

    let i = 0;

    if (slideshowSection == null)
        throw 'slideshow player does not exist...';
    else {
        image.src = imageFiles[i];
        nextButton.addEventListener('click', clickNext, false);
    }

    function clickNext() {
        if (i == imageFiles.length - 1)
            i = 0;
        else   
            i++;
        image.src = imageFiles[i];
    }

}

var slideIndex = 0;
showSlides();

function showSlides() {
    let i = 0;
    const slides = document.querySelectorAll('.slides');

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length)
        slideIndex = 1;

    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2500); // Change image every 2 seconds
}