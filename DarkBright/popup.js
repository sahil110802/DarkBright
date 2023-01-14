if(document.querySelector(".popup")){
const button=document.querySelector(".button");
const circle=document.querySelector(".circle");
let buttonOn=false;
button.addEventListener("click",()=>{
    if(!buttonOn){
        buttonOn=true;
        circle.style.animation= "MoveCircleRight 0.5s forwards";
        button.style.animation="BackgroundWhite 0.5s forwards";
        button.style.color="white";

        chrome.tabs.executeScript({
            file:"appOn.js"
        })
    }
    else{
        buttonOn=false;
        circle.style.animation= "MoveCircleLeft 0.5s forwards";
        button.style.animation="BackgroundBlack 0.5s forwards";
        button.style.color="black";

        chrome.tabs.executeScript({
            file:"appOff.js"
        })
    }
})
}