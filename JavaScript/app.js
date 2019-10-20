//console.log(AnswersQuestions)
//console.log(AnswersQuestions[0])
let categories=[,,] //empty array
let answers=[[,,,,,,],[,,,,,,],[,,,,,,]] //empty double array
let questionStart=[[,,,,,,],[,,,,,,],[,,,,,,]] 
let questionEnd=[[,,,,,,],[,,,,,,],[,,,,,,]] 
let options=[[,,,,,,],[,,,,,,],[,,,,,,]] 

//console.log(puzzleAnswer)

function loadJSON1() {
    let AQ = JSON.parse(answersQuestions);
    // alert(AQ.length); // -> 150 = ( 1+(1+1+1+4)*7 )*3  
    // category / answer / qBegin / qEnd / options 4x
    for (let c=0;c<3;c++){  // c is number of category
        categories[c]=AQ[50*c]
        for (let i=0;i<7;i++){  // i is number of answer/question
            answers[c][i]=AQ[50*c+1+7*i]
            questionStart[c][i]=AQ[50*c+1+7*i+1]
            questionEnd[c][i]=AQ[50*c+1+7*i+2]
            //  there are 4 options for each answers/question
            options[c][i]=AQ.slice(50*c+1+7*i+3,50*c+1+7*i+7)
            //console.log(options[c][i])
        }
    }
} // end of function loadJSON1() 

loadJSON1()
// alert(categories)
// alert(answers)
// alert(questionStart)
// alert(questionEnd)
// alert(options)
///////////////////////////////////////////////////////////////////  
///////////          Data was loaded          /////////////////////      
///////////////////////////////////////////////////////////////////


// "slice" = circle sector
let startAngle=20+360       // Angle for the first rotation of the wheel
let wheelAngle=startAngle   // actual angle of the wheel
// beginnig Angle of wheel, first value in array
// 24 slices: 360deg / 24 = 15 deg
// midlle of slice +-7.5 deg
let wheelValues=[-2,650,0,600,500,550,600,0,700,500,650,600,700,600,500,2500,0,900,500,650,500,800,-1,700]
// -2 = FREE PLAY
// -1 = LOST A TURN
//  0 = BANKRUPT
// positive INT = $ value
// console.log('wheel',wheelValues)
// console.log(wheelValues.length) // 24

function spinWheel(angle){
    let target = document.querySelector('#spinWheel');
    //console.log(target);
    let player = target.animate([
    //   {transform: 'rotateZ(500deg)'}
      {transform: 'rotateZ('+(angle).toString()+'deg)'}
    ], {duration : 512, iterations : 1,fill : "forwards",easing: 'ease-in-out'}
    );
    player.addEventListener('finish', function() {
        //target.style.transform = 'translate(100px, 100px)';
        // wheelAngle=(wheelAngle+angle)%360;
        //////////////////////////////////////////wheelAngle+=angle
        console.log("Wheel finished rotation")
        wheelReturn(wheelValues[Math.floor(((wheelAngle-startAngle)%360)/15)])
      });
}

// function wheelReturn(val) is in "game.js"

$('body').ready(function() {
    console.log( "Body ready!" );  
    spinWheel(startAngle)
});

$('#spin').click(function() {
    console.log('"SPIN" was clicked','gameState=',gameState)
    // wheel will stop only in the middle of slice
    // 15deg * 24 slices
    addAngle=15*Math.floor(Math.random()*25)
    //console.log('math',addAngle, addAngle/15)
    //addAngle=15
    wheelAngle+=addAngle+360
    spinWheel(wheelAngle)
    ////// This does not work as expected. 
    ////// Function spinWheel is done before rotation of the wheel is finished.
                // $.when( spinWheel(wheelAngle) ).done(function() {
                //     // Wheel Rotation Finished! 
                //     wheelReturn(wheelValues[Math.floor(((wheelAngle-startAngle)%360)/15)])
                // });
  });
  