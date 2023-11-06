let startButton=document.getElementById("js-start");
let stopButton=document.getElementById("js-stop");
let displayMsg=document.getElementById("js-displayMsg")

startButton.addEventListener("click",function(){  
    let sayHi=setInterval(function(){
        displayMsg.innerHTML+="Hii <br> "
        

    },1000);
    stopButton.addEventListener("click",function(){
        clearInterval(sayHi);
    })
    

})
