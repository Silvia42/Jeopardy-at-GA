let wheelAngle=0
let wheelCount=0

// function findKeyframesRule(rule) {
//     let ss = document.styleSheets;
//     for (var i = 0; i < ss.length; ++i) {
//       console.log(ss[i])  
//       for (var j = 0; j < ss[i].cssRules.length; ++j) {
//         console.log(ss[i].cssRules[j].type)  
//         if (ss[i].cssRules[j].type == window.CSSRule.WEBKIT_KEYFRAMES_RULE && 
//         ss[i].cssRules[j].name == rule) { 
//           return ss[i].cssRules[j]; }
//       }
//     }
//     return null;
//   }

//   function findKeyframesRule(rule) {
//     var ss = document.styleSheets;
//     for (var i = 0; i < ss.length; ++i) {
//         for (var j = 0; j < ss[i].cssRules.length; ++j) {
//             if (ss[i].cssRules[j].type == window.CSSRule.WEBKIT_KEYFRAMES_RULE && ss[i].cssRules[j].name == rule) { return ss[i].cssRules[j]; }
//         }
//     }
//     return null;
// }

$('body').ready(function() {
    console.log( "Body ready!" );  
    // Body ready!
    console.log(document.styleSheets);
    // StyleSheetList {0: CSSStyleSheet, length: 1}
    console.log(document.styleSheets[0]);
    // CSSStyleSheet {ownerRule: null, type: "text/css", href: "file:///Users/silviakocsisovaCB5/Desktop/SEI/MyProjects/001.WheelOfJeopardy/WOJ.001/CSS/main.css", ownerNode: link, parentStyleSheet: null, …}
    console.log(document.styleSheets[0].cssRules);
    // DOMException: Failed to read the 'cssRules' property from 'CSSStyleSheet': Cannot access rules ........
    // console.log(document.styleSheets[0].cssRules[0].name);
    


    //keyframes.insertRule('0% {transform: translate(100px, 100px) rotate(" + (multiplier + 0) + "deg)translate(-100px, -100px) rotate(" + (multiplier + 0) + "deg);background-color:red;}");'

    //document.getElementsByClassName('keepRotate')[0].classList.add('translateAnimationClass'); }
    //console.log(document.getElementById('keepRotate'))    // null
    //console.log(document.getElementById('keepRotate')[0]) // undefined

    //$("body").keyframe.define({
    // $('body').keyframes.define({
    //     name: 'keepRotate',
    //     from: {'transform':'rotateZ(0deg)'},
    //     to: {'transform':'rotateZ(500deg)'}
    // });


});

$('#spin').click(function() {
    let addAngle=Math.floor(Math.random()*360)
    console.log(addAngle)
    wheelAngle+=addAngle+360
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







  