const dinosaure =document.getElementById("dinosaure");
const cactus = document.getElementById("cactus");



function jump(){
    
    if(dispatchEvent.classList!="jump"){
       
        dinosaure.classList.add("jump");
        
        setTimeout(function(){
            
             dinosaure.classList.remove("jump");
            
        },300)
        
    }
    
    
}

    let cheacklive = setInterval(function(){
    
    let dinotop = parseInt(window.getComputedStyle(dinosaure).getPropertyValue("top"));
   

    let cactsleft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));


if(cactsleft>0 && cactsleft<80 && dinotop>=230){
    dinosaure.style.animationPlayState ='paused';
    cactus.style.animationPlayState ='paused';
    alert("whooops! game over");
    window.location.reload();
}
    
},10);

document.addEventListener("keydown", function(e){
                          jump();
                          })
                         
console.log(dispatchEvent)


