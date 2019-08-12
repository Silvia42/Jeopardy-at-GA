// GAME loop: spin wheel, Jepardy AQ, Pick a letter or solve a puzzle, REPEAT
let gameState=0
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

// Actual Value from the wheel (set in function wheelReturn(val))
let wheelValue=0

// Clicked letter
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

  $('#playGame').on('click', function() {
    gameState=1
    console.log('PLAY GAME',gameState)
  })

 // -2 = FREE PLAY = choose letter without solving QA Jeopardy
 // -1 = LOST A TURN
 //  0 = BANKRUPT
 // positive INT = $ value
 function wheelReturn(val){
    event.preventDefault();
    wheelValue=val  // Actual Value from the wheel
    console.log('Returned \n value from wheel is:',val)
    let p=gameState%3 // p is player 
    let player=document.getElementsByClassName("points")[p]
    if (gameState===0) {
        gameState=1
    }
    else if (gameState>0 && gameState<4){
        console.log('gameState is: ',gameState)
        if (val==0){    //  0 = BANKRUPT
            player.innerHTML='0'
        }
        else if (val==-1){   // -1 = LOST A TURN
            p=(p+1)%3   // next player
            gameState=p // starting with spin
        }
        else if (val==-2){   // -2 = FREE PLAY = choose letter without solving QA Jeopardy
            gameState+=100
        }
        else {
            gameState+=10
            // console.log('I am here.','gameState is: ',gameState)
        }
    }
}

function letterClick(myLetter){
 console.log('myLetter is:',myLetter,"gameState=",gameState)
 if (gameState>10 && gameState<14){
    numberQA=consonants.indexOf(myLetter)
    jeopardy(numberQA)

 }
}

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
    for (let i=0;i<4;i++){
        let buttonOption = document.createElement("BUTTON",'buttonOption');
        buttonOption.className="buttonOption"
        myDiv.appendChild(buttonOption)
        buttonOption.innerHTML="asdf"+i.toString()
        myDiv.appendChild(buttonOption)
    }


    // $(myDiv).append(
    //     createButton('Done', toggleDone, 'done green'),
    //     createButton('Delete', function() {
    //         $('#dialogDel').data('mydata', $(this).parents('li')).dialog('open');
    //     }).addClass('del red')


////////////////////////////////////////////////////vvv///// temporally function
        myDiv.onclick=function(e) {
            this.parentNode.removeChild(this);
            for(let i=0;i<4;i++){
                for (let j=0;j<15;j++){
                    if (puzzleAnswer[i][j]==letterClicked){
                        console.log(document.getElementsByClassName("puzzleChar")[i*15+j])
                        // console.log(letterClicked,letterClick) // variable, function
                        document.getElementsByClassName("puzzleChar")[i*15+j].innerHTML=letterClicked
                    }
                }
            }
        }
////////////////////////////////////////////////////^^^/////



    ///// Play Jeopardy ///// end of function jeopardy(numQA)  ///////////////////////////
}



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