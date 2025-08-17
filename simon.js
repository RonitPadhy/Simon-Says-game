let gameSeq = [];
let userSeq = [];
let btns = ["yellow","red","green","purple"];

let isStarted = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(isStarted == false){
        console.log("The game has started");
        isStarted = true;

         levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    // random button flash
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randomBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randomBtn);
    gameSeq.push(randColor);
    // console.log(gameSeq); 
    gameFlash(randomBtn);
}

function checkAns(idx){
    // console.log("Current level:-",level); 

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,500);
        }
    }

    else {
        h2.innerHTML = `Game Over!! your score was <b>${level}</b> <br> Please try again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },200);
        reset();
    }
}

function btnPress(){
    console.log("button was pressed");
    let btn = this;
    // console.log(this);
    userFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset() {
    isStarted = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}