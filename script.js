
var score = 0;
var hitrn = 0;
function makebubble(){
    var bub = "";
for(var i = 1;i<=176;i++){
        var ran = Math.floor(Math.random()*10)
       bub += `<div class="bubble">${ran}</div>`
    }
    
    document.querySelector("#pbottom").innerHTML = bub
    
}
makebubble()
var timer = 60;
function runtimer(){
    var timerstart = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").innerHTML = timer
        }
        else{
            clearInterval(timerstart)
            document.querySelector("#pbottom").innerHTML =`<h1>GAME OVER</h1>`;
        }
    
        },1000)
    }
runtimer()

function gettap(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hit").innerHTML = hitrn
    

}
gettap()

function incscore(){
    score += 10
    document.querySelector("#scoreval").textContent = score

}

document.querySelector("#pbottom")
.addEventListener("click",function(details){
    var clickednum = Number(details.target.textContent)
    if(clickednum === hitrn){
        incscore();
        makebubble();
        gettap();
        

    }
})