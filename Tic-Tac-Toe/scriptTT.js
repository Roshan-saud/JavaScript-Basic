let music = new Audio("extra/music.mp3");
let audioturn = new Audio("extra/ting.mp3");
let gameoveraudio = new Audio("extra/gameover.mp3");
let turn = "X";
let gameover = false


//function to change the turn
const changeTurn = () => {
    return turn === "X"? "0" : "X";
}

//Functino to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if((boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[2]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[0]].innerHTML !== " ")) {
            document.querySelector('.info').innerHTML = boxtext[e[0]].innerHTML + " Won"
            gameover = true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "150px";
        }
        // else if(){

        // }
    })
}


//Main Game-logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener("click", () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkWin();
            
            if(!gameover){
                document.getElementsByClassName("info")[0].innerHTML = "Turn for: " + turn;
            } 
        }
    })
})


//Add onclick listner to reset button
reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerHTML = " "
    })
    turn = "X";
    gameover = false;
    document.getElementsByClassName("info")[0].innerHTML = "Turn for: " + turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px"
})