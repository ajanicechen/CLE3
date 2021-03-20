//section finder with button
const storyButton = document.querySelector("#story")
const storySection = document.querySelector("#storysection")

storyButton.addEventListener("click", function (){
    storySection.scrollIntoView();
})

const deelButton = document.querySelector("#deel")
const deelSection = document.querySelector("#deelsection")

deelButton.addEventListener("click", function (){
    deelSection.scrollIntoView();
})

const overButton = document.querySelector("#over")
const overSection = document.querySelector("#oversection")

    overButton.addEventListener("click", function (){
    overSection.scrollIntoView();
})

const steunButton = document.querySelector("#steun")
const steunSection = document.querySelector("#steunsection")

steunButton.addEventListener("click", function (){
    steunSection.scrollIntoView();
})