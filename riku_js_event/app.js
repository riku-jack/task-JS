
function func1() {
    console.log("ハンドラblur");
}

let element1 = document.getElementById("btn1");
element1.addEventListener("blur",function(){
    console.log("リスナーblur");
});


function func2() {
    console.log("ハンドラfocus");
}

let element2 = document.getElementById("btn2");
element2.addEventListener("focus",function(){
    console.log("リスナーfocus");
});


function func3() {
    console.log("ハンドラchange");
}

let element3 = document.getElementById("btn3");
element3.addEventListener("change",function(){
    console.log("リスナーchange");
});


function func4() {
    console.log("ハンドラselect");
}

let element4 = document.getElementById("btn4");
element4.addEventListener("select",function(){
    console.log("リスナーselect");
});


function func5() {
    console.log("ハンドラsubmit");
}

let element5 = document.getElementById("btn5");
element5.addEventListener("submit",function(){
    console.log("リスナーsubmit");
});


function func6() {
    console.log("ハンドラreset");
}

let element6 = document.getElementById("btn6");
element6.addEventListener("reset",function(){
    console.log("リスナーreset");
});


function func7() {
    console.log("ハンドラload");
}

let element7 = document.getElementById("img1");
element7.addEventListener("load",function(){
    console.log("リスナーload");
});


function func8() {
    console.log("ハンドラclick");
}

let element8 = document.getElementById("test1");
element8.addEventListener("click",function(){
    console.log("リスナーclick");
});


function func9() {
    alert("ハンドラdblclick");
}

let element9 = document.getElementById("btn7");
element9.addEventListener("dblclick",function(){
    alert("リスナーdblclick");
});


function func10() {
    alert("ハンドラkeyup");
}

let element10 = document.getElementById("btn8");
element10.addEventListener("keyup",function(){
    alert("リスナーkeyup");
});


function func11() {
    alert("ハンドラkeydown");
}

let element11 = document.getElementById("btn9");
element11.addEventListener("keydown",function(){
    alert("リスナーkeydown");
});


function func12() {
    alert("ハンドラkeypress");
}

let element12 = document.getElementById("btn10");
element12.addEventListener("keypress",function(){
    alert("リスナーkeypress");
});


function func13() {
    alert("ハンドラmouseout");
}

let element13 = document.getElementById("img2");
element13.addEventListener("mouseout",function(){
    alert("リスナーmouseout");
});


function func14() {
    alert("ハンドラmouseover");
}

let element14 = document.getElementById("img3");
element14.addEventListener("mouseover",function(){
    alert("リスナーmouseover");
});


function func15() {
    alert("ハンドラmouseup");
}

let element15 = document.getElementById("btn11");
element15.addEventListener("mouseup",function(){
    alert("リスナーmouseup");
});


function func16() {
    alert("ハンドラmousedown");
}

let element16 = document.getElementById("btn12");
element16.addEventListener("mousedown",function(){
    alert("リスナーmousedown");
});


function func17() {
    let element18 = document.getElementById("img4")
    element18.src = 'download2.jpg'
}

let element17 = document.getElementById("img5");
element17.addEventListener("mousemove",function(){
    element17.src = "download2.jpg";
});