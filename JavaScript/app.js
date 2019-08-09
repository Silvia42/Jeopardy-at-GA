let wheelAngle=0
//let wheelCount=0


function spinWheel(angle){
    let target = document.querySelector('#spinWheel');
    //console.log(target);
    let player = target.animate([
    //   {transform: 'rotateZ(0deg)'},
    //   {transform: 'rotateZ(500deg)'}
      {transform: 'rotateZ('+wheelAngle.toString()+'deg)'},
      {transform: 'rotateZ('+(wheelAngle+150).toString()+'deg)'}
    ], 700);  

    player.addEventListener('finish', function() {
        //target.style.transform = 'translate(100px, 100px)';
        wheelAngle=(wheelAngle+150)%360;
        console.log(wheelAngle)
      });

}




// credits for this function: https://stackoverflow.com/questions/18481550/how-to-dynamically-create-keyframe-css-animations
function insertCSSRule(ruleText)
{
    let sheets = document.styleSheets;
    sheets.insertRule(ruleText);
    // if(sheets.length == 0){
    //     let style = document.createElement('style');
    //     style.appendChild(document.createTextNode(""));
    //     document.head.appendChild(style);
    // }
    // let sheet = sheets[sheets.length - 1];
    // sheet.insertRule(ruleText, sheet.rules ? sheet.rules.length : sheet.cssRules.length);
};

$('body').ready(function() {
    console.log( "Body ready!" );  
    spinWheel(180)
});



$('#spin').click(function() {
    addAngle=Math.floor(Math.random()*360)
    console.log(addAngle)
    wheelAngle+=addAngle+360

    spinWheel(180)
    
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







  