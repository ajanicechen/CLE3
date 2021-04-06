//next and prev slide function
let currentSlide = 1;
let slides = document.getElementsByClassName("mySlides")
const prevButton = document.getElementById("prev")
const nextButton = document.getElementById("next")
titleImageSlides();


prevButton.addEventListener("click", function(){
    currentSlide--;
    if (currentSlide <1)
    {
        currentSlide = slides.length;
    }
    titleImageSlides();
});


nextButton.addEventListener("click", function(){
    currentSlide++;
    if (currentSlide > slides.length)
    {
        currentSlide = 1;
    }
    titleImageSlides();
});

//show slides based on currentSlide
function titleImageSlides() {
    for (let i = 0; i< slides.length; i++) {
        if (currentSlide.classList !== "block"){
            slides[i].classList.remove("block");
            slides[i].classList.add("none");
        }
        slides[currentSlide-1].classList.remove("none");
        slides[currentSlide-1].classList.add("block");
    }
}

