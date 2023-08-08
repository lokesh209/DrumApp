var num = document.querySelectorAll(".drum").length;
for(var i=0;i<(num);i++){
   document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     var keyid = this.innerHTML;
     
     soundBu(keyid);
     anim(keyid);





    })
}

function soundBu(keyid){
     switch(keyid){
       case("w"):
         var s = new Audio("/sounds/tom-1.mp3")
         s.play();
       break;

       case("a"):
       var s = new Audio("/sounds/tom-2.mp3")
       s.play();

       break;

       case("s"):
       var s = new Audio("/sounds/tom-3.mp3")
         s.play();

       break;

       case("d"):

       var s = new Audio("/sounds/tom-4.mp3")
       s.play();
       break;

       case("j"):
       var s = new Audio("/sounds/crash.mp3")
         s.play();

       break;


       case("k"):
       var s = new Audio("/sounds/kick-bass.mp3")
       s.play();

       break;


       case("l"):
       var s = new Audio("/sounds/snare.mp3")
         s.play();
       break;

     }
}

var keyClick = document.addEventListener("keydown",function(event){
    var l = event.key;
    soundBu(l);
    anim(l);

})


function anim(keyid){
   var sel = document.querySelector("."+keyid);
   sel.classList.add("pressed");
   setTimeout(function(){
    sel.classList.remove("pressed")
},100);



}
