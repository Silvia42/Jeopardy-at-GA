
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