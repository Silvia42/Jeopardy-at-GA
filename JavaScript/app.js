// "slice" = circle sector
let startAngle=20+360
let wheelAngle=startAngle
// beginnig Angle of wheel, first value in array
// 24 slices: 360deg / 24 = 15 deg
// midlle of slice +-7.5 deg
let wheelValues=[-2,650,0,600,500,550,600,0,700,500,650,600,700,600,500,2500,0,900,500,650,500,800,-1,700]
// -2 = FREE PLAY
// -1 = LOST A TURN
//  0 = BANKRUPT
// positive INT = $ value
// console.log('www',wheelValues)
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

$('body').ready(function() {
    console.log( "Body ready!" );  
    spinWheel(startAngle)
});

function wheelReturn(val){
    console.log('Returned \n value from wheel is:',val)
}

$('#spin').click(function() {
    console.log('"SPIN" was clicked')
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








  