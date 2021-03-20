//next and prev slide function
let currentSlide = 1;
let slides = document.getElementsByClassName("mySlides")
titleImageSlides();

document.getElementById("prev").onclick = function(){
    currentSlide--;
    if (currentSlide <1)
    {
        currentSlide = slides.length;
    }
    titleImageSlides();
}
document.getElementById("next").onclick = function (){
    currentSlide++;
    if (currentSlide > slides.length)
    {
        currentSlide = 1;
    }
    titleImageSlides();
}

//show slides based on currentSlide
function titleImageSlides() {
    for (i = 0; i< slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[currentSlide-1].style.display = "block"
}