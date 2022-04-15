//This variable keeps track of whose turn
let activePlayer = 'X';
//This array stores an array of moves, use to determine win condtions
let selectSquares = [];

//This function is for placing an x or o in square
function placeXOrO(squareNumber) {
    //This condtion ensures square has not been selected
    //The .some() mehtod is ised to check element of selectedSquare array
    //to see if contains the square number clicked on
    if(!selectedSquares.some(element => element.includes(squareNumber))) {
        //This variable retrieves the html element id that was clicked on
        let select = document.getElementById(squareNumber) ;
        //This condtion checks whos turn
        if (activePlayer === 'X') {
            //If activePlayer is = to X the x.png is placed
            select.style.backgroundImage = 'url("Images/X.jpg")';
            //active player may only be 'X' or 'O', so if not 'X' must be 'O'
        } else {
            //if active palyer is =  to 'O' the O.png is placed
            select.style.backgroundImage = 'url("Images/O.jpg")';
        }
        //squareNumber and activePlayer are concstrated togehter and added to array
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win condtions
        checkWinConditions();
        //This condtion is for changing the active player
        if (activePlayer === 'X') {
            //If active player is 'X' change it to 'O'
            activePlayer = 'O';
        //If active palyer is anything other than 'X'
        } else {
            //Change the activePlayer to 'X'
            activePlayer = 'X'
        }

        //This function plays placement sound
        audio ('./media/place.mp3');
        //This condtuon checks to see if it is computer turn
        if(activePlayer === 'O') {
            //This function disables clicking for the computer choice
            disableClick();
            //This function waits 1 sec before computer places images and enables click
            setTimeout(function () { computersTurn(); }, 1000)
        }
        //Rreturning true is needed for computerTurn() function to work
        return true;
    }
    //This function results in random square being selected
    function computersTurn() {
        //This boolean is needed for while loop
        let success = false;
        //This variable stores a random numnber 0-8
        let pickASquare;
        //This condtion allows our while loop to keep rying if a square is selectedn already
        while(!success) {
            //A random number between 0 and 8 selected
            pickASquare = String(Math.floor(Math.random() * 9));
            //if random number evaluated returns true, the square hasnt been selected
            if (placeXOrO(pickASquare)) {
                //This line calls fucntion
                placeXOrO(pickASquare);
                //This changes our boolean and ends loop
                success = true;
            };
        }
    }
}

//This function parses the selectedSquares array to search for win condtions
//drawWinLine function is called to draw id condtion is met
function checkWinConditions() {
    // X 0,1,2 cond.
    if    (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50,100, 558, 100) }
    //X 3,4,5 condtion
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    //X 6,7,8 cond.
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    //X 0,3,6
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    //X 1, 4, 7
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    //X 2,5,8
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    //X 6,4,2
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    //X 0,4,8
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    //O 0,1,2
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    //O 3,4,5
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    //O 6,7,8
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    //O 0,3,6
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    //O 1,4,7
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    //O 2,5,8
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    //O 6,4,2
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    //O 0,4,8
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    //this cond. checks for tie
    else if (selectedSquares.length >= 9) {
        //this function plays tie sound
        audio('./media/bubble2.mp3') ;
        //this function sets a .3 sec timer
        setTimeout(function () { resetGame(); }, 1000);
    }


    //this functuon checks if an array inclued 3 strings
    function arrayIncludes(squareA, squareB, squareC) {
        //thwese 3 variables will be ised to check for 3 in a row
        const a = selectedSquares.includes(squareA)
        const b = selectSquares.includes(squareB)
        const c = selectSquares.includes(squareC)
        // if the 3 variables we pass are all included in array true
        //returned and else if condtion executes drawwlines
        if (a === true && b === true && c === true) { return true }
    }
}

//this funcation makes our body element temp. unclickable
function disableClick() {
    //this makes body unclickable
    body.style.pointerEvents = 'none' ;
    //this makes body clickable after 1 sec
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000) ;
}

//this function takes a string parameter of the path you set ealier for 
//placement sound
function audio(audioURL) {
    //WE CREATE A NEW AUDIO OBJECT AND WE PASS THE PATH AS A PARAMeter
    let audio = new Audio(audioURL) ;
    //play method plays audio
    audio.play() ;
}
 //this function utilizes html canvas to draw win line
 function drawWinLine(coordX1, coordY2, coordX2, coordY2) {
     //this line accesses our html canvas elemnt
     const canvas = document.getElementById('win-lines')
     //this line gives us access to methods and properties to use on canvas
     const c = canvas.getContext('2d');
     //this line idicates where start of a lines x axis is
     let xl = coordX1,
     //this line idicates where the start of a lines y axis is
        y1 = coordY1,
        //this line indicates where the end
        x2 = coordX2,
        //this is where end of a lines x axis is
        y2 = coordY2,
        //this line is where end of lines a axis is
        x = x1,
        y = y1;

    //this function interacts with the vanvas
    function animationLineDrawing() {
        //this variable creates a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //this method clears content from last loop
        c.clearRect(0, 0, 608, 608)
        //this method starts new path
        c.beginPath();
        //this  method moves us to a starting point for new kine
        c.moveTo(x1, y1)
        //this method indicates the end pint in line
        c.lineTo(x, y)
        //sets width of our line
        c.lineWidth = 10;
        //this method sets color of our line
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        //this method draws everything we laid out above
        c.stroke();
        //this condtion checks if we have reached endpoint
        if (x1 <= x2 && y1 <= y2) {
            //this codntion add 10 to prev end point
            if (x < x2) { x += 10; }
            //this condition adss 10 to prev end point
            if (y < y2) { y += 10; }
            //this condition cancels our animation loop 
            //if we have reached end point
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
    }


    //this function clears our canvass after our win line is drawn
    function clear() {
        //this line starts our animation loop
        const animationLoop = requestAnimationFrame(clear);
        //this line clears canvas
        c.clearRect(0, 0, 608, 608);
        //this line stops our animation loop
        cancelAnimationFrame(animationLoop);
    }
    //this line disallows clicking while win sound playing
    disableClick();
    //this line plays win sounds
    audio('./media/bubble1.mp3');
    //this line calls our animation loop
    animateLineDrawing();
    //this line waits 1 sec then clears canvas resets game a nd allows clicking again
    setTimeout(function () { clear() ; resetGame(); }, 1000);

 }  

 //this function resets the game in the event of a tie or win
 function resetGame() {
     //this for loop iterates through each HTML square elemnt
     for (let i = 0; i < 9; i++) {
         //this variable gets the html elment of 1
         let square = document.getElementById(String(i))
         //this re,oves our elemtns backgroundImage
         square.style.backgroundImage = ''
     }
 }