var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function(event) {

    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    
    switch (key) {
        case "w":
            var audio = new Audio("sounds/sa.mp3");
            audio.play();
        break;
    
        case "a":
            var audio = new Audio("sounds/re.mp3");
            audio.play();
        break;

        case "s":
            var audio = new Audio("sounds/ga.mp3");
            audio.play();
        break;

        case "d":
            var audio = new Audio("sounds/ma.mp3");
            audio.play();
        break;

        case "j":
            var audio = new Audio("sounds/pa.mp3");
            audio.play();
        break;

        case "k":
            var audio = new Audio("sounds/dha.mp3");
            audio.play();
        break;

        case "l":
            var audio = new Audio("sounds/ni.mp3");
            audio.play();
        break;

        default: console.log(buttonInnerHTML);

    }
    
}

function buttonAnimation(currentKey) {
 
   var activeButton = document.querySelector("." + currentKey);
   activeButton.classList.add("pressed");

   setTimeout(function(){
    activeButton.classList.remove("pressed");
   }, 100);
}