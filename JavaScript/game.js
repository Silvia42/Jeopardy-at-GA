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
    wheelValue=val  // Actual Value from the wheel
    console.log('Returned \n value from wheel is:',val)
    let p=gameState%3 // p is player 
    let player=document.getElementsByClassName("points")[p]
    if (val==0){    //  0 = BANKRUPT
        player.innerHTML='0'
    }
    if (val==-1){   // -1 = LOST A TURN
        p=(p+1)%3   // next player
        gameState=p // starting with spin
    }
    if (val==-2){   // -2 = FREE PLAY = choose letter without solving QA Jeopardy
        gameState+=100
    }
}

// function letterClick(){

// }

$('.alpha,.vowel').click(function() {
    console.log('letter was clicked')

})

//     let newButton = $('<button></button>').text(buttonText).on('click', clickFunction);

// createButton('Delete', function() {
//     $('#dialogDel').data('mydata', $(this).parents('li')).dialog('open');