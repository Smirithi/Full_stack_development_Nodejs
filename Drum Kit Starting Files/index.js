var count = document.querySelectorAll(".set button").length;
for(let i=0; i<count; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        playSoundForKeyPress(buttonInnerHTML);  
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function(e) {
    var keyPressed = e.key;
    playSoundForKeyPress(keyPressed);
    buttonAnimation(keyPressed);
});

function playSoundForKeyPress(key){

    switch(key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;
        
        case "a":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;
        
        case "s":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "d":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;

        case "j":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
        
        default: console.log(buttonInnerHTML);
    }
}

function buttonAnimation(key) {
    var currentKey = document.querySelector("." + key);
    currentKey.classList.add("pressed");
    setTimeout(function() {
        currentKey.classList.remove("pressed");
    }, 500);
}