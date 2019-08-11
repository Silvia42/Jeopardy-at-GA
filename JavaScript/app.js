// "slice" = circle sector
let wheelAngle=0
let startAngle=20
// beginnig Angle of wheel, first value in array
// 24 slices: 360deg / 24 = 15 deg
// midlle of slice +-7.5 deg
let wheelValues=[-2,]
// -2 = FREE PLAY
// -1 = LOST A TURN
//  0 = BANKRUPT
// positive INT = $ value

function spinWheel(angle){
    let target = document.querySelector('#spinWheel');
    //console.log(target);
    let player = target.animate([
    //   {transform: 'rotateZ(500deg)'}
      {transform: 'rotateZ('+(wheelAngle+360+angle).toString()+'deg)'}
    ], {duration : 512, iterations : 1,fill : "forwards",easing: 'ease-in-out'}
    );
    player.addEventListener('finish', function() {
        //target.style.transform = 'translate(100px, 100px)';
        // wheelAngle=(wheelAngle+angle)%360;
        wheelAngle+=angle
        console.log(wheelAngle)
      });
}

$('body').ready(function() {
    console.log( "Body ready!" );  
    spinWheel(startAngle)
});

$('#spin').click(function() {
    console.log('something was click')
    //addAngle=Math.floor(Math.random()*360)
    // wheel will stop only in the middle of slice
    // 15deg * 24 slices
    addAngle=15*Math.floor(Math.random()*24)
    //console.log('math',addAngle)
    wheelAngle+=addAngle+360
    spinWheel(addAngle)
    //console.log($("#spinWheel").css("animation"))
    //console.log($("#spinWheel").css("animation-iteration-count"))
    let ic=$("#spinWheel").css("animation-iteration-count");
    ic=(parseInt(ic)+1).toString()
    //console.log(typeof ic)
    //console.log(ic)
    $("#spinWheel").css("animation-iteration-count", ic);
    //$("#spinWheel").css("transform", "rotate(" + degrees + "deg)");
    // alert( "Handler for spin.click() called. \n"+ "animation-iteration-count = "+ic);
    "@keyframes keepRotate{0%{transform: rotateZ(0deg)}100% { transform: rotateZ(500deg)}}"
  });







  