val_c1 = 1
val_c2 = 1
val_c3 = 1
val_c4 = 1
val_c5 = 1
val_c6 = 1
val_c7 = 1
turn = 1


function createBoard() {
    const board = document.querySelector('.board');

    for (let col = 1; col <= 7; col++) {
        const column = document.createElement('ul');
        column.classList.add('column')
        column.id = `c${col}`;

        for (let row = 6; row >= 1; row--) {
            const solt = document.createElement('li');
            solt.id = `c${col}r${row}`;
            column.appendChild(solt);
        }
        board.appendChild(column)
    }
}
createBoard();



//checking the winner
function check(player) {

    function doAfterWin() {
        gameOver = true; //After win no player able to click on board
        document.querySelectorAll('.column').forEach((col) => {
            col.style.cursor = "not-allowed";   // Show "not-allowed" cursor
        });
        const turnDisplay = document.getElementById("whosturn");
        turnDisplay.innerText = `🎉🎉🎉Congratulations🎉🎉🎉${player.toUpperCase()} wins🏆!`;
        turnDisplay.style.backgroundColor = player === 'red' ? '#e53935' : '#fdd835'; // Red or Yellow
        turnDisplay.style.color = '#000000';
        setTimeout(() => {
            location.reload() //To reload the page immediately
        }, 3000)
    }

    setTimeout(() => {
        //To check vertical win
        //i:rows and j:columns
        for (i = 1; i <= 7; i++) {
            for (j = 1; j <= 3; j++) {
                if (document.getElementById(`c${i}r${j}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${i}r${j + 1}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${i}r${j + 2}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${i}r${j + 3}`).style.backgroundColor == `${player}`) {
                    doAfterWin();
                }

            }
        }


        //To check horizental win
        //i:rows and j:columns
        for (i = 1; i <= 6; i++) {
            for (j = 1; j <= 4; j++) {
                if (document.getElementById(`c${j}r${i}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${j + 1}r${i}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${j + 2}r${i}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${j + 3}r${i}`).style.backgroundColor == `${player}`) {
                    doAfterWin()
                }

            }

        }

        //To check right to left diagonal win
        for (i = 1; i <= 4; i++) {
            for (j = 1; j <= 3; j++) {
                if (document.getElementById(`c${i}r${j}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${i + 1}r${j + 1}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${i + 2}r${j + 2}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${i + 3}r${j + 3}`).style.backgroundColor == `${player}`) {
                    doAfterWin()
                }

            }
        }

        //To check left to right diagonal win
        for (i = 1; i <= 4; i++) {
            for (j = 6; j >= 4; j--) {
                if (document.getElementById(`c${i}r${j}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${i + 1}r${j - 1}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${i + 2}r${j - 2}`).style.backgroundColor == `${player}` &&
                    document.getElementById(`c${i + 3}r${j - 3}`).style.backgroundColor == `${player}`) {
                    doAfterWin()
                }

            }
        }

    }, 100)

}



//playing
let gameOver = false
document.querySelectorAll(".column").forEach((e) => {
    e.addEventListener("click", () => {
        if (gameOver)
            return

        //It evaluates a string as JavaScript code.
        sum = eval(`val_${e.id}`)
        eval(`val_${e.id}++`)

        //when odd : red turn 
        if (sum <= 6 && turn % 2 != 0) {
            document.getElementById(`${e.id}r${sum}`).style.backgroundColor = "red"
            turn++
            check('red')
            document.getElementById("whosturn").innerText = "Yellow's Turn"
        }
        //when even : yellow's turn 
        else if (sum <= 6 && turn % 2 == 0) {
            document.getElementById(`${e.id}r${sum}`).style.backgroundColor = "yellow"
            turn++
            check('yellow')
            document.getElementById("whosturn").innerText = "Red's Turn"
        }
    })
})

