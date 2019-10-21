// GAME loop: spin wheel, Jepardy AQ, Pick a letter or solve a puzzle, REPEAT
let gameState=0
let correctJeopardyAnswer=0
let letterInPuzzle=0
// Actual Value from the wheel (set in function wheelReturn(val))
let wheelValue=0

// 0 = game haven't start yet
// -1 = game over
// 1 = Is player 1 turn, spin a wheel
// 2 = Is player 2 turn, spin a wheel
// 3 = Is player 3 turn, spin a wheel
// 11 = Is player 1 turn, Jepardy AQ
// 12 = Is player 2 turn, Jepardy AQ
// 13 = Is player 3 turn, Jepardy AQ
// 101 = Is player 1 turn, Pick a letter or solve a puzzle
// 102 = Is player 2 turn, Pick a letter or solve a puzzle
// 103 = Is player 3 turn, Pick a letter or solve a puzzle
console.log('PLAY GAME',gameState)
document.getElementById("spin").style.backgroundColor = "red";


// Set all players INACTIVE /////////////////////////////////////
setAllPlayersInactive()
// document.getElementById("act1").style.visibility = "hidden";
// document.getElementById("act2").style.visibility = "hidden";
// document.getElementById("act3").style.visibility = "hidden";
// document.getElementById("act3").style.visibility = "visible";
function setAllPlayersInactive(){
    for (let p=1;p<4;p++){
        let el="act"+p.toString()
        document.getElementById(el).style.visibility = "hidden"; 
    }
}
function setActivePlayer(p){
    setAllPlayersInactive()
    let el="act"+p.toString()
    // console.log('el',el)
    document.getElementById(el).style.visibility = "visible"
}  
// setActivePlayer(3)

//////////////////////////////////////////////////////////////////////////
// Clicked letter ////////////////////////////////////////////////////////
let letterClicked=''


let puzzleBox=document.getElementsByClassName("puzzleChar")
let l=0
puzzleAnswer.forEach(function(row) {
    console.log(row);
    for (let i=0;i<row.length;i++){
        // puzzleBox[l].innerHTML=row[i]
        if (row[i]!=" "){
            $(puzzleBox[l]).addClass("puzzleCharHere");
        }
        l++
    }
  });

// this functionality was MOVE to $('body').ready(function() in app.js  
//   $('#playGame').on('click', function() {
//     gameState=1
//     setActivePlayer(1)
//     console.log('PLAY GAME',gameState)
//     document.getElementById("playGame").style.visibility = "hidden";
//     document.getElementById("spin").style.backgroundColor = "rgb(16, 209, 16)";
//   })

 //////////////////////////////////////////////////////////////////////////
 /////////////////////////// Set P O I N T S   ////////////////////////////
 ////////////////////////////////////////////////////////////////////////// 
 function setPoints(){
    let p=gameState%10 // p is player 
    // setActivePlayer(p)
    // p-=1
    // if (!p) p=3
    let playerPoints
    if (p) playerPoints=document.getElementsByClassName("points").item(p-1).innerText
    if (wheelValue) {
        if (correctJeopardyAnswer && letterInPuzzle) {
            playerPoints=Number(playerPoints) + wheelValue
        } 
        if (!correctJeopardyAnswer) {
            playerPoints=Number(playerPoints) - wheelValue
        } 
    } else {
        playerPoints=0
    }
    // console.log('player=',p)
    // console.log('gameState=',gameState)
    // console.log('playerPoints=',document.getElementsByClassName("points").item(p-1).innerText)
    document.getElementsByClassName("points").item(p-1).innerHTML=playerPoints
 }
  
 //////////////////////////////////////////////////////////////////////////
 /////////////////////////// L O S T  T U R N  ////////////////////////////
 ////////////////////////////////////////////////////////////////////////// 
 function lostTurn(){
    let p=gameState%10 // p is player 
    p=(p+1)%3    // next player
    if (p<1) p=3
    gameState=p  // starting with spin
    document.getElementById("spin").style.backgroundColor = "rgb(16, 209, 16)";
    
 }

 //////////////////////////////////////////////////////////////////////////
 ///////////////////////////// W H E E L //////////////////////////////////
 ////////////////////////////////////////////////////////////////////////// 
 // -2 = FREE PLAY = choose letter without solving QA Jeopardy
 // -1 = LOST A TURN
 //  0 = BANKRUPT
 // positive INT = $ value
 function wheelReturn(val){
    event.preventDefault();
    wheelValue=val  // Actual Value from the wheel
    console.log('Returned \n value from wheel is:',val)
    console.log('gameState is: ',gameState)

if (gameState){
    let p=gameState%10 // p is player 
    // p=gameState%3 // p is player 
    // if (p<1) p=3
    setActivePlayer(p)
    let playerPoints
    if (p) playerPoints=document.getElementsByClassName("points")[p]
    if (gameState===0) {
        // gameState=1
        // game is starting, when START GAME button is clicked
        document.getElementById("spin").style.backgroundColor = "red";
    }
    else if (gameState>0 && gameState<4){
        console.log('*BEFORE if*gameState is: ',gameState,'player=',p)
        if (val==0){    //  0 = BANKRUPT
            setPoints()
            // playerPoints.innerHTML='0'
            p=(p+1)%3    // next player
            if (p<1) p=3
            gameState=p  // starting with spin
            document.getElementById("spin").style.backgroundColor = "rgb(16, 209, 16)";
        }
        else if (val==-1){   // -1 = LOST A TURN
            p=(p+1)%3   // next player
            if (p<1) p=3
            gameState=p   // starting with spin
            document.getElementById("spin").style.backgroundColor = "rgb(16, 209, 16)";
        }
        else if (val==-2){   // -2 = FREE PLAY = choose letter without solving QA Jeopardy
            gameState+=100
            correctJeopardyAnswer=1 // Works Same as correct Answer in Jeopardy
            document.getElementById("spin").style.backgroundColor = "red";
        }
        else {
            gameState+=10
            document.getElementById("spin").style.backgroundColor = "red";
            // console.log('I am here.','gameState is: ',gameState)
        }
    }
    console.log('*AFTER if*gameState is: ',gameState)
    console.log('Active Player is: ',p)
    if (p) {
        setActivePlayer(p)
    }
} //  if (gameState){ 
} // function wheelReturn(val)

 //////////////////////////////////////////////////////////////////////////
 /////////////////////////// L E T T E R  /////////////////////////////////
 ////////////////////////////////////////////////////////////////////////// 
function letterClick(myLetter){
 console.log('myLetter is:',myLetter,"gameState=",gameState)
 if (vovels.indexOf(myLetter)<0) {// myLetter is consonant ////////////////
    if (gameState>10 && gameState<14){
        numberQA=consonants.indexOf(myLetter)
        jeopardy(numberQA)
        // If wrong, No +points, player loss turn
        // Letter Will be Showed Always

        // This move to function onClick(OPTION) in Jeopardy
        showLettersInPuzzle(letterClicked)
        document.getElementById("spin").style.backgroundColor = "rgb(16, 209, 16)";
        gameState-=10
    }

    if (gameState>100 && gameState<104){
        // Player can play without Jeopardy  
        showLettersInPuzzle(letterClicked)
        document.getElementById("spin").style.backgroundColor = "rgb(16, 209, 16)";
        gameState-=100 // going back to turn wheel
    }
 } else { // myLetter is  V O W E L  ////////////////////////////////////
if (gameState>10 && gameState<14){
    showLettersInPuzzle(letterClicked)
    document.getElementById("spin").style.backgroundColor = "rgb(16, 209, 16)";
    gameState-=10
    // LOST points value from wheel
    correctJeopardyAnswer=0
    setPoints()
    // if not letterInPuzzle, LOST TURN
    if (!letterInPuzzle){
        lostTurn()
    }
 }
}
} // end of function letterClick(myLetter)

//////////////////////////////////////////////////////////////////////////
function showLettersInPuzzle(letterClicked){
    letterInPuzzle=0
    for(let i=0;i<4;i++){
        for (let j=0;j<15;j++){
            if (puzzleAnswer[i][j]==letterClicked){
                // console.log(document.getElementsByClassName("puzzleChar")[i*15+j])
                // console.log(letterClicked,letterClick) // variable, function
                document.getElementsByClassName("puzzleChar")[i*15+j].innerHTML=letterClicked
                letterInPuzzle=1
            }
        }
    }
    // hide "letterClicked"
    // str.indexOf(searchValue)
    // The index of the first occurrence of searchValue, or -1 if not found.
    // consonants
    let c=consonants.indexOf(letterClicked)
    if (c>=0) document.getElementsByClassName("alpha")[c].style.visibility = "hidden";
    // vovels
    let v=vovels.indexOf(letterClicked)
    if (v>=0) document.getElementsByClassName("vowel")[v].style.visibility = "hidden";

} // end of function showLettersInPuzzle(letterClicked)

//////////////////////////////////////////////////////////////////////////
//////////////////////// J E O P A R D Y  ////////////////////////////////
//////////////////////////////////////////////////////////////////////////
function jeopardy(numQA){
    // I am getting already numbQA=consonants.indexOf(myLetter)
    console.log('doing jeopardy')
    let myDiv = document.createElement('div');
    let myBody=document.getElementsByTagName("body")[0]
    //console.log(myBody)
    myDiv.className="divJeopardy"
    //$('.balance').addClass("zero");
    //$(myDiv).addClass("divJeopardy");
    myBody.appendChild(myDiv)
    //console.log(myDiv,myDiv.parentElement)
    /////// Show ANSWER ////////////////////////////////////////////////
    myDiv.innerHTML=answers[Math.floor(numQA/7)][numQA%7]
    //console.log(numQA,Math.floor(numQA/3),numQA%3)
    
    /////// Make OPTION buttons ////////////////////////////////////////
    let corectOptionId // will be set, when string is starting with '*'
    let opt
    let s
    for (let i=0;i<4;i++){
        let buttonOption = document.createElement("BUTTON",'buttonOption');
        buttonOption.className="buttonOption"
        myDiv.appendChild(buttonOption)
        //answers[Math.floor(numQA/7)][numQA%7]
        //console.log(options[0][0][i])
        s = options[0][0][i]
        // escape OR encodeURI OR encodeURIComponent functions
        // options[Math.floor(numQA/7)][numQA%7][i]
        opt = options[Math.floor(numQA/7)][numQA%7][i].replace("<","&lt")
        if (opt[0]=='*') {
            corectOptionId=i
            opt=opt.slice(1) // method slice, end is optional
            buttonOption.className="buttonOption correctOption"
        }
        buttonOption.innerHTML =  /// "option "+(i+1).toString()
            questionStart[Math.floor(numQA/7)][numQA%7] +
            opt +
            questionEnd[Math.floor(numQA/7)][numQA%7]
        // "asdf"+i.toString()
        myDiv.appendChild(buttonOption)
        // console.log(buttonOption.className)

    }
    /////////////////
    // buttonOption.onclick=function(opt) {
    //     console.log("clicked option",opt)
    // }
    $('.buttonOption').click(function(event) {   
        event.preventDefault();
        let which = event.target;
        // let whichParent = which.parentNode.nodeName;
        // console.log("clicked option",which,'parent is:',whichParent)
        // console.log(which.parentNode.childNodes[1])
        // console.log(which.parentNode.childNodes[2])
        // console.log(which.parentNode.childNodes[3])
        // console.log(which.parentNode.childNodes[4])
        // console.log(which)
        // console.log(which.parentNode.childNodes[corectOptionId])
        // console.log('corectOptionId',corectOptionId)
        // for (i=1;i<5;i++){
        //     if (which.textContent===
        //         which.parentNode.childNodes[corectOptionId].textContent) {
        //         console.log('CORRECT !!!')
        //     } else {
        //         console.log('*** INCORRECT !!!')
        //     }
        // }
        // console.log(which.className.length)
        correctJeopardyAnswer=which.className.length>12
        // if (which.className.length>12) {
        //     console.log('CORRECT !!!')} else {console.log('*** INCORRECT !!!')}
        setPoints()
    })



    ////////////////////////////////////////////////////vvv///// temporally function
    myDiv.onclick=function(e) {
    this.parentNode.removeChild(this);
    showLettersInPuzzle(letterClicked)
}
////////////////////////////////////////////////////^^^/////
} // end of function jeopardy(numQA)  ///////////////////////////

// $(myDiv).append(
//     createButton('Done', toggleDone, 'done green'),
//     createButton('Delete', function() {
//         $('#dialogDel').data('mydata', $(this).parents('li')).dialog('open');
//     }).addClass('del red')




$('.divJeopardy').click(function(event) { 
    //$('.divJeopardy').remove();
    //event.target.
})

// $('.alpha,.vowel').click(function() {
//     event.preventDefault();
$('.alpha,.vowel').click(function(event) {   
    event.preventDefault();
    let which = event.target;
    //let which = $( this )
    letterClicked=$( which ).text();
    //console.log('letter was clicked',which,letterClicked)
    console.log('Clicked: ',letterClicked)
    letterClick(letterClicked)
})

//     let newButton = $('<button></button>').text(buttonText).on('click', clickFunction);

// createButton('Delete', function() {
//     $('#dialogDel').data('mydata', $(this).parents('li')).dialog('open');

 //////////////////////////////////////////////////////////////////////////
 //////////// F I N A L - S O L V E   P U Z Z L E  ////////////////////////
 ////////////////////////////////////////////////////////////////////////// 

//  myDiv.onclick=function(e) {
//     this.parentNode.removeChild(this);
//     showLettersInPuzzle(letterClicked)

$('.player').click(function(event) {
    event.preventDefault();
    let which = event.target.id;
    console.log('"player" was clicked','gameState=',gameState)
    console.log('Clicked: ',which)
    let who=which[which.length-1]
    console.log('pppppppppp',who)
    if ('0'<who && who<'4'){
        let myDiv = document.createElement('div');
        let myBody=document.getElementsByTagName("body")[0]
        myDiv.className="divSolvePuzzle"
        myBody.appendChild(myDiv)

        myDiv.innerHTML='Player '+who+', solve puzzle:'
        let x = document.createElement("INPUT");
        x.setAttribute("type", "text");
        x.className="inputSolution"
        myDiv.appendChild(x)
    }    
  });
