"use-strict";
import * as Timer from "./timer.js";
import { saveGame } from "./services/parchishttp.js";
// import * as Template from "./templates.js";

// TODO: Change background color button 
// TODO: Change board size button 
// TODO: Preguntar Nacho background gradient
let gameState = {};

export function startGame() {
        gameState = { // Create new game
            pieceSelected: null,
            dice: null,
            turn: "red",
            positionsOfPieces: {
                red1: "",
                red2: "",
                red3: "",
                red4: "",
                blue1: "",
                blue2: "",
                blue3: "",
                blue4: "",
                green1: "",
                green2: "",
                green3: "",
                green4: "",
                yellow1: "",
                yellow2: "",
                yellow3: "",
                yellow4: ""
            },
            dateOfCreation: new Date().getTime(),
            dateOfLastModification: new Date().getTime(),
        }
        document.querySelector(".game-info").style.display = "flex";
        drawBoard(gameState);
        drawDice(gameState);
        updateTurnOnHeader(gameState);
        document.querySelector('#upload-game').style.display = "flex";
        document.querySelector('#upload-game').addEventListener("click",()=> {
            saveGame({ player1: localStorage.getItem('uid') },gameState);
            document.querySelector(".game-info").style.display = "none";
            // window.location.hash = '#/';
        });

       
}



export function changePlayer(gameState) {
    // let gameState = {...gameState};
    switch (gameState.turn) {
        case null:
            gameState.turn = "red";
            break;
    
        case "red":
            gameState.turn = "green";
            break;
    
        case "green":
            gameState.turn = "yellow";
            break;
    
        case "yellow":
            gameState.turn = "blue";
            break;
    
        case "blue":
            gameState.turn = "red";
            break;
    
        default:
            break;
            
    }
    

    return gameState;
}

export function drawBoard(gameState) {
    // let gameState = gameState;
    document.querySelector(".container").innerHTML = `<div id="board">
                    <div id="board-container">
                        <div class="subdivider yellow">
                            <div class="piece yellow" id="yellow1"></div>
                            <div class="piece yellow" id="yellow2"></div>
                            <div class="piece yellow" id="yellow3"></div>
                            <div class="piece yellow" id="yellow4"></div>
                            </div>
                            <div class="subdivider top">
                            <div class="position" id="p31">31</div>
                            <div class="position" id="p30">30</div>
                            <div class="position" id="p29">29</div>
                            <div class="position" id="p32">32</div>
                            <div class="position" id="y1">1</div>
                            <div class="position" id="p28">28</div>
                            <div class="position" id="p33">33</div>
                            <div class="position" id="y2">2</div>
                            <div class="position" id="p27">27</div>
                            <div class="position" id="p34">34</div>
                            <div class="position" id="y3">3</div>
                            <div class="position" id="p26">26</div>
                            <div class="position" id="p35">35</div>
                            <div class="position" id="y4">4</div>
                            <div class="position" id="p25">25</div>
                            <div class="position" id="p36">36</div>
                            <div class="position" id="y5">5</div>
                            <div class="position" id="p24">24</div>
                            <div class="position" id="p37">37</div>
                            <div class="position" id="y6">6</div>
                            <div class="position" id="p23">23</div>
                            </div>
                            <div class="subdivider green">
                            <div class="piece green" id="green1"></div>
                            <div class="piece green" id="green2"></div>
                            <div class="piece green" id="green3"></div>
                            <div class="piece green" id="green4"></div>
                            </div>
                            <div class="subdivider left">
                            <div class="position" id="p44">44</div>
                            <div class="position" id="p43">43</div>
                            <div class="position" id="p42">42</div>
                            <div class="position" id="p41">41</div>
                            <div class="position" id="p40">40</div>
                            <div class="position" id="p39">39</div>
                            <div class="position" id="p38">38</div>
                            <div class="position" id="p45">45</div>
                            <div class="position" id="b1">1</div>
                            <div class="position" id="b2">2</div>
                            <div class="position" id="b3">3</div>
                            <div class="position" id="b4">4</div>
                            <div class="position" id="5">b5</div>
                            <div class="position" id="b6">6</div>
                            <div class="position" id="p46">46</div>
                            <div class="position" id="p47">47</div>
                            <div class="position" id="p48">48</div>
                            <div class="position" id="p49">49</div>
                            <div class="position" id="p50">50</div>
                            <div class="position" id="p51">51</div>
                            <div class="position" id="p52">52</div>
                            </div>
                            <div class="subdivider center"></div>
                            <div class="subdivider right">
                            <div class="position" id="p22">22</div>
                            <div class="position" id="p21">21</div>
                            <div class="position" id="p20">20</div>
                            <div class="position" id="p19">19</div>
                            <div class="position" id="p18">18</div>
                            <div class="position" id="p17">17</div>
                            <div class="position" id="p16">16</div>
                            <div class="position" id="g6">6</div>
                            <div class="position" id="g5">5</div>
                            <div class="position" id="g4">4</div>
                            <div class="position" id="g3">3</div>
                            <div class="position" id="g2">2</div>
                            <div class="position" id="g1">1</div>
                            <div class="position" id="p15">15</div>
                            <div class="position" id="p8">8</div>
                            <div class="position" id="p9">9</div>
                            <div class="position" id="p10">10</div>
                            <div class="position" id="p11">11</div>
                            <div class="position" id="p12">12</div>
                            <div class="position" id="p13">13</div>
                            <div class="position" id="p14">14</div>
                            </div>
                            <div class="subdivider blue">
                            <div class="piece blue" id="blue1"></div>
                            <div class="piece blue" id="blue2"></div>
                            <div class="piece blue" id="blue3"></div>
                            <div class="piece blue" id="blue4"></div>
                            </div>
                            <div class="subdivider bottom">
                            <div class="position" id="p53">53</div>
                            <div class="position" id="r6">6</div>
                            <div class="position" id="p7">7</div>
                            <div class="position" id="p54">54</div>
                            <div class="position" id="r5">5</div>
                            <div class="position" id="p6">6</div>
                            <div class="position" id="p55">55</div>
                            <div class="position" id="r4">4</div>
                            <div class="position" id="p5">5</div>
                            <div class="position" id="p56">56</div>
                            <div class="position" id="r3">3</div>
                            <div class="position" id="p4">4</div>
                            <div class="position" id="p57">57</div>
                            <div class="position" id="r2">2</div>
                            <div class="position" id="p3">3</div>
                            <div class="position" id="p58">58</div>
                            <div class="position" id="r1">1</div>
                            <div class="position" id="p2">2</div>
                            <div class="position" id="p59">59</div>
                            <div class="position" id="p60">60</div>
                            <div class="position" id="p1">1</div>
                            </div>
                            <div class="subdivider red">
                            <div class="piece red" id="red1"></div>
                            <div class="piece red" id="red2"></div>
                            <div class="piece red" id="red3"></div>
                            <div class="piece red" id="red4"></div>
                        </div>
                    </div>
                </div>`;

                if (gameState.positionsOfPieces != null) {
                    for (const key in gameState.positionsOfPieces) {
                        if (gameState.positionsOfPieces[key] != "") {
                            let pieceToMove = document.querySelector('#' + key);
                            document.querySelector("#" + gameState.positionsOfPieces[key]).appendChild(pieceToMove);
                            
                        }
                        
                    }
                    
                }
                addListenersToBoard(gameState);
}



export function drawDice(gameState) {
    let dice = document.createElement("DIV");
    dice.id = "dice";
    dice.innerHTML = `<img src="img/dice/6.png" alt="dice">`;
    document.querySelector("body").appendChild(dice);

    document.querySelector("#dice").addEventListener("click", () => {
        updateDice(gameState);
    });
}

function updateDice(gameState) {
    // let gameState = gameState;
    let number = Math.floor(Math.random() * 6) + 1;
    // let number = 6;
    let dice = document.querySelector("#dice");

    gameState.dice = number;
    dice.innerHTML = `<img src="img/dice/${number}.png" alt="dice">`;

    return gameState;
}

export function drawHeader() {
    
}

export function addListenersToBoard(gameState) {
    let pieces = document.querySelectorAll('.piece');
    
    // pieces.forEach(element => { // Save in the gameState which piece is selected
    //     element.addEventListener('click', (event) => {
    //         gameState = piece.selectPiece(event, gameState);
    //     });
    //     element.addEventListener('blur', (event) => {
    //         gameState = piece.unselectPiece(event, gameState);
    //     });
        
    // });
    
    pieces.forEach(element => { // when clicking a position of the board, check if there is a piece selected in the gameState, if there is one move it
        element.addEventListener('click', (event) => {
            gameState = movePiece(event, gameState);
            drawBoard(gameState);

        }); // check how to pass to the function the selected position
    });
}

export function updateTurnOnHeader(gameState) {
    document.querySelector('#turn').innerHTML = "Turn: Player " + gameState.turn;
}


export function movePiece(event, gameState) {
    let pieceId = event.target.id;
    // event.stopPropagation();
    console.log(gameState);

    
    if (gameState) {
        if (gameState.positionsOfPieces[pieceId] === "") {
            switch (pieceId.substring(0, pieceId.length - 1)) {
                case "red":
                    gameState.positionsOfPieces[pieceId] = "p"+4;
                    break;
            
                case "green":
                    gameState.positionsOfPieces[pieceId] = "p"+19;
                    break;
            
                case "yellow":
                    gameState.positionsOfPieces[pieceId] = "p"+34;
                    break;
            
                case "blue":
                    gameState.positionsOfPieces[pieceId] = "p"+49;
                    break;
            
                default:
                    break;
            }

            checkIfPieceToKill(pieceId, gameState, event);
            
            gameState = changePlayer(gameState);
            document.querySelector("#turn").innerHTML = "Turn: Player " + gameState.turn;
            // Check if there are pieces in the cell
            // Check if there are pieces in the cell + 20
            
            
        } else {
            if (gameState.dice != null) {
                // console.log(canEnterColouredCell(pieceId, gameState));
                console.log(gameState.positionsOfPieces[pieceId].substring(0,1));
                if (gameState.positionsOfPieces[pieceId].substring(0,1) != "p") {
                    console.log("Esta dentro");
                } else if (canEnterColouredCell(pieceId, gameState) != undefined) {
                    console.log("Can enter");
                    gameState.positionsOfPieces[pieceId] = canEnterColouredCell(pieceId, gameState);
                } else if ((parseInt(gameState.positionsOfPieces[pieceId].substring(1)) + parseInt(gameState.dice)) <= 60) {
                    // gameState.positionsOfPieces[pieceId] = "p" + (substring(1, gameState.positionsOfPieces[pieceId]) + gameState.dice);
                    gameState.positionsOfPieces[pieceId] = "p" + (parseInt(gameState.positionsOfPieces[pieceId].substring(1)) + parseInt(gameState.dice));
                    
                } else { // Add to starting position
                    // gameState.positionsOfPieces[pieceId] = "p" + (substring(1, gameState.positionsOfPieces[pieceId]) + gameState.dice) % 60;
                    gameState.positionsOfPieces[pieceId] = "p" + ((parseInt(gameState.positionsOfPieces[pieceId].substring(1)) + parseInt(gameState.dice)) % 60);
                    
                }
                gameState.dice = null;
                gameState = changePlayer(gameState);
                checkIfPieceToKill(pieceId, gameState, event);
                document.querySelector("#turn").innerHTML = "Turn: Player " + gameState.turn;
            }
            // Check if there are pieces in the cell
            // Check if there are pieces in the cell + 20
        }
    }
    
    return gameState;
}

function checkIfPieceToKill(pieceToMove, gameState, event) {
    for (let pieceFromGameState in gameState.positionsOfPieces) {
        if (!(pieceFromGameState == pieceToMove || ("" + pieceFromGameState).slice(0, -1) == gameState.turn)) {
            if (gameState.positionsOfPieces[pieceFromGameState] == gameState.positionsOfPieces[pieceToMove]) {
                gameState.positionsOfPieces[pieceFromGameState] = "";
                gameState.dice = 20;
                console.log("Encontrado: " );
                movePiece(event, gameState);
                drawBoard(gameState);
                document.querySelector('.addittional-info').innerHTML = "Bonus 20 cells of advantage!!!";
                setTimeout(remove20CellBanner, 3000);
            }
        }
    }

    // if (pieceThere) {
    //     pieceThere = pieceThatIsThere
    // }

    // return pieceThere;
}

function remove20CellBanner() {
    document.querySelector('.addittional-info').innerHTML = "";
}

function canEnterColouredCell(piece, gameState) {
    switch (piece.substring(0, piece.length - 1)) {
        case "red":
            if (parseInt(gameState.positionsOfPieces[piece].substring(1)) + parseInt(gameState.dice) >= 60) {
                console.log("Substring: " +  (parseInt(gameState.positionsOfPieces[piece].substring(1)) + parseInt(gameState.dice)) % 60);
                return "r" + (parseInt(gameState.positionsOfPieces[piece].substring(1)) + parseInt(gameState.dice)) % 60;
            }
            break;
        case "green":
            if ((parseInt(gameState.positionsOfPieces[piece].substring(1)) < 16) && (parseInt(gameState.positionsOfPieces[piece].substring(1)) + parseInt(gameState.dice) >= 16)) {
                console.log("Substring: " +  (parseInt(gameState.positionsOfPieces[piece].substring(1)) + parseInt(gameState.dice)) - 15);
                return "g" + (parseInt(gameState.positionsOfPieces[piece].substring(1)) + parseInt(gameState.dice)) - 15;
            }
            break;
        case "yellow":
            if ((parseInt(gameState.positionsOfPieces[piece].substring(1)) < 31) && (parseInt(gameState.positionsOfPieces[piece].substring(1)) + parseInt(gameState.dice) >= 31)) {
                console.log("Substring: " +  (parseInt(gameState.positionsOfPieces[piece].substring(1)) + parseInt(gameState.dice)) - 30);
                return "y" + (parseInt(gameState.positionsOfPieces[piece].substring(1)) + parseInt(gameState.dice)) - 30;
            }
            break;
        case "blue":
            if ((parseInt(gameState.positionsOfPieces[piece].substring(1)) < 46) && (parseInt(gameState.positionsOfPieces[piece].substring(1)) + parseInt(gameState.dice) >= 46)) {
                console.log("Substring: " +  (parseInt(gameState.positionsOfPieces[piece].substring(1)) + parseInt(gameState.dice)) - 45);
                return "b" + (parseInt(gameState.positionsOfPieces[piece].substring(1)) + parseInt(gameState.dice)) - 45;
            }
            break;
    
        default:
            break;
    }
}