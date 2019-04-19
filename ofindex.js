window.addEventListener("load" ,()=>{


 const music=document.querySelectorAll(".music");
 const pads=document.querySelectorAll(".pads div");


 pads.forEach( (pad,index) =>{
    
    pad.addEventListener("click", function() {
        music[index].currentTime = 0;
        music[index].play();
        console.log(index);
        
      });
 });

});