
let puzzleStartTop=0
let puzzleStartRight=0
let spaceBetweenColumns=5
let spaceBetweenRows=5
let letterWidth=32
let letterHeight=64

for (let i=0;i<10;i++){
    let myDiv = document.createElement('div');
    myDiv.className="puzzleChar";
    //(puzzleStartTop+spaceBetweenColumns+i*letterWidth).toString()+'px';
    myDiv.style.top=(puzzleStartTop+spaceBetweenRows+i*letterHeight).toString()+'px';
    myDiv.style.right= (puzzleStartTop+spaceBetweenColumns+i*letterWidth).toString()+'px';
    myDiv.style.width="32px";
    myDiv.style.height="64px";
    let puzzleBox=document.getElementsByClassName("box2")[0]
    console.log(puzzleBox)
    puzzleBox.appendChild(myDiv)
    // myDiv.addEventListener('click', goGreen);
    // myDiv.addEventListener('mouseover', goGreen);
}

