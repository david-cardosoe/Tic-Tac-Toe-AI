

//individual Squares
const s1 = document.querySelector("#btn1");
const s2 = document.querySelector("#btn2");
const s3 = document.querySelector("#btn3");
const s4 = document.querySelector("#btn4");
const s5 = document.querySelector("#btn5");
const s6 = document.querySelector("#btn6");
const s7 = document.querySelector("#btn7");
const s8 = document.querySelector("#btn8");
const s9 = document.querySelector("#btn9");



const squareValuesArray = [s1, s2, s3, s4, s5, s6, s7, s8, s9];
const aigrid = [[s1, s2, s3], [s4, s5, s6], [s7, s8, s9]];


let turn = "X";

//livecount
const liveCountDisplay = document.querySelector("#live-count");
liveCountDisplay.innerText = "Turn: X";

let winner = null;

s1.addEventListener('click', function() {
    if(slotAlreadyTaken(s1)){
        return;
    }

    s1.value = turn;


    logic();
    let checker = checkWinner();

    if(checker == 2 || checker == 3 || checker == 4) {
        return;
    }
    
    aiPlay();
    logic();
    checkWinner();
});
s2.addEventListener('click', function() {
    if(slotAlreadyTaken(s2)){
        return;
    }

    s2.value = turn;

    logic();
    let checker = checkWinner();

    if(checker == 2 || checker == 3 || checker == 4) {
        return;
    }


    aiPlay();
    logic();
    checkWinner();
});
s3.addEventListener('click', function() {
    if(slotAlreadyTaken(s3)){
        return;
    }

    s3.value = turn;


    logic();
    let checker = checkWinner();

    if(checker == 2 || checker == 3 || checker == 4) {
        return;
    }

    aiPlay();
    logic();
    checkWinner();
});
s4.addEventListener('click', function() {
    if(slotAlreadyTaken(s4)){
        return;
    }

    s4.value = turn;


    logic();
    let checker = checkWinner();

    if(checker == 2 || checker == 3 || checker == 4) {
        return;
    }


    aiPlay();
    logic();
    checkWinner();
});
s5.addEventListener('click', function() {
    if(slotAlreadyTaken(s5)){
        return;
    }

    s5.value = turn;


    logic();
    let checker = checkWinner();

    if(checker == 2 || checker == 3 || checker == 4) {
        return;
    }


    aiPlay();
    logic();
    checkWinner();
});
s6.addEventListener('click', function() {
    if(slotAlreadyTaken(s6)){
        return;
    }

    s6.value = turn;

    logic();
    let checker = checkWinner();

    if(checker == 2 || checker == 3 || checker == 4) {
        return;
    }


    aiPlay();
    logic();
    checkWinner();
});
s7.addEventListener('click', function() {
    if(slotAlreadyTaken(s7)){
        return;
    }

    s7.value = turn;


    logic();
    let checker = checkWinner();

    if(checker == 2 || checker == 3 || checker == 4) {
        return;
    }


    aiPlay();
    logic();
    checkWinner();
});
s8.addEventListener('click', function() {
    if(slotAlreadyTaken(s8)){
        return;
    }

    s8.value = turn;

    logic();
    let checker = checkWinner();

    if(checker == 2 || checker == 3 || checker == 4) {
        return;
    }


    aiPlay();
    logic();
    checkWinner();
});
s9.addEventListener('click', function() {
    if(slotAlreadyTaken(s9)){
        return;
    }

    s9.value = turn;

    logic();
    let checker = checkWinner();

    if(checker == 2 || checker == 3 || checker == 4) {
        return;
    }

    aiPlay();
    logic();
    checkWinner();
});



//checks game logic, decied winner

function logic() {
    //case 1
    if(s1.value + s2.value +s3.value == "XXX") {
        winner = "X";
        return;
    }
    else if(s1.value + s2.value +s3.value == "OOO") {
        winner = "O";
        return;
    }

    //case 2
    if(s4.value + s5.value +s6.value == "XXX") {
        winner = "X";
        return;
    }
    else if(s4.value + s5.value +s6.value == "OOO") {
        winner = "O";
        return;
    }

    //case 3
    if(s7.value + s8.value +s9.value == "XXX") {
        winner = "X";
        return;
    }
    else if(s7.value + s8.value +s9.value == "OOO") {
        winner = "O";
        return;
    }

    //case 4
    if(s1.value + s4.value +s7.value == "XXX") {
        winner = "X";
        return;
    }
    else if(s1.value + s4.value +s7.value == "OOO") {
        winner = "O";
        return;
    }

    //case 5
    if(s2.value + s5.value +s8.value == "XXX") {
        winner = "X";
        return;
    }
    else if(s2.value + s5.value +s8.value == "OOO") {
        winner = "O";
        return;
    }

    //case 6
    if(s3.value + s6.value +s9.value == "XXX") {
        winner = "X";
        return;
    }
    else if(s3.value + s6.value +s9.value == "OOO") {
        winner = "O";
        return;
    }

    //case 7
    if(s1.value + s5.value +s9.value == "XXX") {
        winner = "X";
        return;
    }
    else if(s1.value + s5.value +s9.value == "OOO") {
        winner = "O";
        return;
    }

    //case 9
    if(s3.value + s5.value +s7.value == "XXX") {
        winner = "X";
        return;
    }
    else if(s3.value + s5.value +s7.value == "OOO") {
        winner = "O";
        return;
    }

    let count = 0;
    for(let i = 0; i < 9; i++) {
        if(!(squareValuesArray[i].value.length == 0)) {
            count++;
        }
    }

    if(count == 9) {
        winner = "draw";
        return;
    }
    else {
        return;
    }
}

//disables buttons when we have a winner
function disableBtns() {
    for(let i = 0; i < squareValuesArray.length; i++) {
        squareValuesArray[i].disabled = true;
    }
}

//resets game

const resetBtn = document.querySelector("#reset-btn");

resetBtn.addEventListener('click', reset);

function reset() {

    for(let i = 0; i < squareValuesArray.length; i++) {
        squareValuesArray[i].value = "";
    }

    winner = null;
    console.log(winner);

    liveCountDisplay.innerText = "Turn: X";

    enableBtns();
}

function enableBtns() {
    for(let i = 0; i < squareValuesArray.length; i++) {
        squareValuesArray[i].disabled = false;
    }
}




//wins display
const xWinsDisplay = document.querySelector("#xwins");
const oWinsDisplay = document.querySelector("#owins");
let xWinCounts = 0;
let oWinCounts = 0;
xWinsDisplay.innerText = "X Wins: " + xWinCounts;
oWinsDisplay.innerText = "O Wins: " + oWinCounts;

function updateScoresX() {
    xWinCounts++;
    xWinsDisplay.innerText = "X Wins: " + xWinCounts;
}

function updateScoresO() {
    oWinCounts++;
    oWinsDisplay.innerText = "O Wins: " + oWinCounts;
}

//check winner
function checkWinner() {
    if(winner == "X") {
        alert("X is the winner!");
        console.log("X is the winner!");
        updateScoresX();
        disableBtns();
        return 2;
    }
    else if(winner == "O") {
        alert("O is the winner!");
        console.log("O is the winner!");
        updateScoresO();
        disableBtns();
        return 3;
    }
    else if(winner == "draw") {
        alert("It's a Draw!");
        console.log("It's a Draw!");
        disableBtns();
        return 4;
    }
    else {
        return 1;
    }
}




//Choosing a taken slot

function slotAlreadyTaken(square) {
    if(square.value == "X" || square.value == "O") {
        alert("Please choose a different slot");
        return true;
    }
    else {
        return false;
    }
}














function aiLogic() {
    //case 1
    if(s1.value + s2.value +s3.value == "XXX") {
        return "X";
    }
    else if(s1.value + s2.value +s3.value == "OOO") {
        return "O";
    }

    //case 2
    if(s4.value + s5.value +s6.value == "XXX") {
        return "X";
    }
    else if(s4.value + s5.value +s6.value == "OOO") {
        return "O";
    }

    //case 3
    if(s7.value + s8.value +s9.value == "XXX") {
        return "X";
    }
    else if(s7.value + s8.value +s9.value == "OOO") {
        return "O";
    }

    //case 4
    if(s1.value + s4.value +s7.value == "XXX") {
        return "X";
    }
    else if(s1.value + s4.value +s7.value == "OOO") {
        return "O";
    }

    //case 5
    if(s2.value + s5.value +s8.value == "XXX") {
        return "X";
    }
    else if(s2.value + s5.value +s8.value == "OOO") {
        return "O";
    }

    //case 6
    if(s3.value + s6.value +s9.value == "XXX") {
        return "X";
    }
    else if(s3.value + s6.value +s9.value == "OOO") {
        return "O";
    }

    //case 7
    if(s1.value + s5.value +s9.value == "XXX") {
        return "X";
    }
    else if(s1.value + s5.value +s9.value == "OOO") {
        return "O";
    }

    //case 9
    if(s3.value + s5.value +s7.value == "XXX") {
        return "X";
    }
    else if(s3.value + s5.value +s7.value == "OOO") {
        return "O";
    }

    let count = 0;
    for(let i = 0; i < 9; i++) {
        if(!(squareValuesArray[i].value.length == 0)) {
            count++;
        }
    }

    if(count == 9) {
        return "draw";
    }
    else {
        return null;
    }
}




//ai
function aiPlay() {
    let bestScore = -Infinity;
    let move;
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            if(aigrid[i][j].value == "") {
                aigrid[i][j].value = "O";
                let score = minimax(aigrid, 0, false);
                aigrid[i][j].value = "";
                if(score > bestScore) {
                    bestScore = score;
                    move = {i, j};
                }
            }
        }
    }
    console.log(move)
    aigrid[move.i][move.j].value = "O";
}

let scores = {
    X: -1,
    O: 1,
    draw: 0
}

function minimax(aigrid, depth, isMaximizing) {
    let result = aiLogic();
    if(result !== null) {
        return scores[result];
    }

    if(isMaximizing) {
        let bestScore = -Infinity;
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                if(aigrid[i][j].value == "") {
                    aigrid[i][j].value = "O";
                    let score = minimax(aigrid, depth + 1, false);
                    aigrid[i][j].value = "";
                    bestScore = Math.max(score, bestScore);
                }
            }
        }
        return bestScore;
    }
    else {
        let bestScore = Infinity;
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                if(aigrid[i][j].value == "") {
                    aigrid[i][j].value = "X";
                    let score = minimax(aigrid, depth + 1, true);
                    aigrid[i][j].value = "";
                    bestScore = Math.min(score, bestScore);
                }
            }
        }
        return bestScore;
    }
}
