
let puzzleStartTop=128
let puzzleStartLeft=50
let spaceBetweenColumns=15
let spaceBetweenRows=5
let letterWidth=50
let letterHeight=64

for (let i=0;i<60;i++){
    let myDiv = document.createElement('div');
    myDiv.className="puzzleChar";
    myDiv.style.top=(puzzleStartTop+Math.floor(i/15)*(spaceBetweenRows+letterHeight)).toString()+'px';
    myDiv.style.left= (puzzleStartLeft+Math.floor(i%15)*(spaceBetweenColumns+letterWidth)).toString()+'px';
    myDiv.style.width=letterWidth.toString()+'px';
    myDiv.style.height=letterHeight.toString()+'px';
    let puzzleBox=document.getElementsByClassName("box2")[0]
    console.log(puzzleBox)
    puzzleBox.appendChild(myDiv)
    // myDiv.addEventListener('click', goGreen);
    // myDiv.addEventListener('mouseover', goGreen);
}

