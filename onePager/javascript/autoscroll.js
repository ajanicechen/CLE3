//auto scroll to section with nav button
const storyButton = document.querySelector("#story")
const storySection = document.querySelector("#storysection")

storyButton.addEventListener("click", function (){
    storySection.scrollIntoView({behavior:'smooth'});
})

const deelButton = document.querySelector("#deel")
const deelSection = document.querySelector("#deelsection")

deelButton.addEventListener("click", function (){
    deelSection.scrollIntoView({behavior:'smooth'});
})

const overButton = document.querySelector("#over")
const overSection = document.querySelector("#oversection")

overButton.addEventListener("click", function (){
    overSection.scrollIntoView({behavior:'smooth'});
})

const steunButton = document.querySelector("#steun")
const steunSection = document.querySelector("#steunsection")

steunButton.addEventListener("click", function (){
    steunSection.scrollIntoView({behavior:'smooth'});
})