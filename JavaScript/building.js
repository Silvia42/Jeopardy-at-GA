
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
    myDiv.style.left= (puzzleStartLeft+(i%15)*(spaceBetweenColumns+letterWidth)).toString()+'px';
    myDiv.style.width=letterWidth.toString()+'px';
    myDiv.style.height=letterHeight.toString()+'px';
    let puzzleBox=document.getElementsByClassName("box2")[0]
    //console.log(puzzleBox)
    puzzleBox.appendChild(myDiv)
    // myDiv.addEventListener('click', goGreen);
    // myDiv.addEventListener('mouseover', goGreen);
}

/////////////////  ALPHABET //////////////////////////////////////////////
let alphaStartTop=570
let alphaStartLeft=50
let vowelMoveRight=500
let alphaBetweenColumns=5
let alphaSpaceBetweenRows=10
let alphaWidth=32
let alphaHeight=64
/// VOWELS: aeiou
const vovels="aeiou"
for (let i=0;i<5;i++){
    let myDiv = document.createElement('div');
    myDiv.className="vowel";
    myDiv.innerHTML=vovels[i]
    myDiv.style.top= alphaStartTop.toString()+'px';
    myDiv.style.left= (alphaStartLeft+i*(alphaBetweenColumns+alphaWidth)).toString()+'px';
    myDiv.style.width=alphaWidth.toString()+'px';
    myDiv.style.height=alphaHeight.toString()+'px';
    let alphaBox=document.getElementsByClassName("box3A")[0]
    //console.log(alphaBox)
    alphaBox.appendChild(myDiv)
    // myDiv.addEventListener('click', goGreen);
    // myDiv.addEventListener('mouseover', goGreen);
}
/// CONSONANT
const consonants = "bcdfghjklmnpqrstvwxyz"
for (let i=0;i<21;i++){
    let myDiv = document.createElement('div');
    myDiv.className="alpha";
    myDiv.innerHTML=consonants[i]
    myDiv.style.top= (alphaStartTop+alphaHeight+alphaSpaceBetweenRows).toString()+'px';
    myDiv.style.left= (alphaStartLeft+i*(alphaBetweenColumns+alphaWidth)).toString()+'px';
    myDiv.style.width=alphaWidth.toString()+'px';
    myDiv.style.height=alphaHeight.toString()+'px';
    let alphaBox=document.getElementsByClassName("box3A")[0]
    //console.log(alphaBox)
    alphaBox.appendChild(myDiv)
    // myDiv.addEventListener('click', goGreen);
    // myDiv.addEventListener('mouseover', goGreen);
}

