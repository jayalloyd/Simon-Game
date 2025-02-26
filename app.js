let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];
let started = false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started== false){
        console.log("game started");
        started= true;

        levelUp();
    }
});
function btnFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},1000);
}
function levelUp(){
    
    level++;
    h2.innerText=`Level ${level}`;

    let randIndx=Math.floor(Math.random()*3);
    let randColor=btns[randIndx];
    let randbtn=document.querySelector(`.${randColor}`);

  
    btnFlash(randbtn);


}

function buttonPress(){
let btn=this;
btnFlash(btn);

}
let btnAll=document.querySelectorAll(".btn");
for(btn of btnAll){
btn.addEventListener("click",buttonPress);
}

