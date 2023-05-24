var randomNumber = document.querySelectorAll(".drum");

for (let i = 0; i < randomNumber.length; i++) {
   document.querySelectorAll(".drum")[i].addEventListener("click",function() { 

      var buttonInnerHTML = this.innerHTML
makesound(buttonInnerHTML);
timeAnimation(buttonInnerHTML);
   });

}

document.addEventListener("keypress",function (event) {
   makesound(event.key);
   timeAnimation(event.key)
});








function makesound(key) {
 
   switch (key) {
      case "z":
       var crash = new Audio("sounds/crash.mp3");
       crash.play();
         break;
         case "i":
            var kickbass = new Audio("sounds/kick-bass.mp3");
           kickbass.play();
           break;
           case "e":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
            case "c":
               var tom1 = new Audio("sounds/tom-1.mp3");
               tom1.play();
               break;
                 case "o":
               var tom2 = new Audio("sounds/tom-2.mp3");
               tom2.play();
               break;
               case "t":
                  var tom3 = new Audio("sounds/tom-3.mp3");
                  tom3.play();
                  break; 
                   case "m":
                  var tom4 = new Audio("sounds/tom-4.mp3");
                  tom4.play();
                  break;

      default: console.log(button.innerHTML);
         break;
}
  
}
function timeAnimation(currentkey) {
 var activeButton =  document.querySelector("."+currentkey);
 activeButton.classList.add("pressed");

 setTimeout(function() {
   activeButton.classList.remove("pressed")
 }, 200);

   
}

 


    





















