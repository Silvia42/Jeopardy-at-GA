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
    console.log('PLAY GAME')
    
  })