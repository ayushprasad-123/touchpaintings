c=document.getElementById("c").getContext("2d");
l=document.getElementById("c");
var d=false;
var t=0;
var r=0;
var w=0;
l.addEventListener("mousedown",down);
l.addEventListener("touchdown",tdown);
l.addEventListener("mouseup",up);
l.addEventListener("touchend",tup);
l.addEventListener("mousemove",move);
l.addEventListener("touchmove",tmove);
function down(e){
    console.log("down");
    t=document.getElementById("col").value;
    r=document.getElementById("r").value;
    w=document.getElementById("w").value;
    d=true;
}
function tdown(e){
    console.log("down");
    t=document.getElementById("col").value;
    r=document.getElementById("r").value;
    w=document.getElementById("w").value;
    d=true;
}
function up(e){
    console.log("up");
    d=false;
}
function tup(e){
    console.log("up");
    d=false;
}
function move(e){
    if(d==true){
        c.beginPath();
        c.strokeStyle=t;
        c.lineWidth=w;
        c.arc(e.clientX-l.offsetLeft,e.clientY-l.offsetTop,r,0,2*Math.PI);
        c.stroke();
        console.log("traced");
    }else{
        console.log("move, did not trace");
    }
}
function tmove(e){
    if(d==true){
        c.beginPath();
        c.strokeStyle=t;
        c.lineWidth=w;
        c.arc(e.clientX-l.offsetLeft,e.clientY-l.offsetTop,r,0,2*Math.PI);
        c.stroke();
        console.log("traced");
    }else{
        console.log("move, did not trace");
    }
}