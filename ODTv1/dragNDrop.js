//   Does not work with IE7

var diffX, diffY, theElement;

var ii= 'img1';
var tt= 'txt1';

function grabber(event) {
  theElement = event.currentTarget;
  var posX = parseInt(theElement.style.left);
  var posY = parseInt(theElement.style.top);
  diffX = event.clientX - posX;
  diffY = event.clientY - posY;
 var x=event.clientX;
var y=event.clientY;
document.addEventListener("mousemove", mover, true);
  document.addEventListener("mouseup", dropper, true);
 event.stopPropagation();
  event.preventDefault();

}
function mover(event) {
  theElement.style.left = (event.clientX - diffX) + "px";
  theElement.style.top = (event.clientY - diffY) + "px";
  event.stopPropagation();
}

function dropper(event) {
  document.removeEventListener("mouseup", dropper, true);
  document.removeEventListener("mousemove", mover, true);
  event.stopPropagation();
}
function erase_ele(dd)
{
	var i_rem = document.getElementById(dd);
	document.getElementById("div0").removeChild(i_rem);
	
}

function createImage(ff)
{
	var i=document.createElement("img");
	i.setAttribute("src",ff);
	i.setAttribute("id",ii);
	i.style.top="50px";
	i.style.left="200px";
	i.style.position="absolute";
	i.style.width="150px";
	i.style.height="auto";
	i.addEventListener("mousedown",grabber,true);
	i.setAttribute("class","dropped");
	document.getElementById("div0").appendChild(i);
	i.setAttribute("ondblclick","erase_ele(this.id)");
	ii = 'img'+(ii.slice(3)+1);
}
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
var c= document.getElementById("myCanvas");
var lineThickness=1;
var ctx= c.getContext("2d");;


function setWidth()
{
ctx.lineWidth=lineThickness;
}
function pickThickness()
{
lineThickness=parseInt(prompt("Enter in pixels"));
}
function pickColor()
{
	var	col = document.getElementById("colorPicker").value;
	ctx.strokeStyle=String(col);
}
function getStart(e) {

	var start_x =e.screenX-195;
    var start_y =e.screenY-110;    
	ctx.beginPath();
	ctx.moveTo(start_x, start_y);	
}

function getStop(e) 
{
    var stop_x =e.screenX-195;
    var stop_y =e.screenY-110;
	ctx.lineTo(stop_x, stop_y);
	setWidth();
	ctx.stroke();
}
function bringCanvasUp()
{
	document.getElementById("myCanvas").style.zIndex="1";
	document.getElementById("div0").style.zIndex="0";
	document.getElementById("myCanvas").style.cursor="url(img/cursor.png), crosshair";
	lineChosen=1;
	lineThickness=1
	ctx.strokeStyle="black";
	pickColor();
	}
function bringGridUp()
{
document.body.style.cursor="default";	
	document.getElementById("myCanvas").style.zIndex="0";
	 document.getElementById("div0").style.zIndex="1";
	 lineChosen=0;
}

function tb(e)
{
	e.preventDefault();
	var frm=document.createElement("form");
	var t=document.createElement("input");
	t.setAttribute("type","text");
	t.setAttribute("placeholder","here");
	t.setAttribute("maxlength",20);
	t.style.border="none";
	t.style.width="80px";
	frm.style.marginLeft=(e.screenX-195)+"px";
	frm.style.marginTop=(e.screenY-110)+"px";
	frm.style.position="absolute";
	frm.appendChild(t);
	document.getElementById("div0").appendChild(frm);
	t.setAttribute("ondblclick","erase_ele(this.id)");
	tt = 'txt'+(tt.slice(3)+1);
}
function textbox(ev)
{
	document.body.style.cursor="text";
	document.getElementById("div0").addEventListener("contextmenu",tb,false);
	
}


function openNav() 
{
    document.getElementById("mySidenav").style.width="50%";

}

function closeNav() 
{
    document.getElementById("mySidenav").style.width = "0";
}
function signout()
{
	var ans=confirm("Are you sure you want to sign out?");
	if(ans==true)
	{
		window.location.href="index.html";	
	} 
}
function newpage()
{
	var bool=confirm("Are you sure you want a fresh page?");
	if(bool==true)
	{	var myNode = document.getElementById("div0");
		var fc = myNode.firstChild;
		while( fc ) 
		{
    			myNode.removeChild( fc );
    			fc = myNode.firstChild;
		}
		ctx.clearRect(0,0,c.width,c.height);
		
	}
}

function erase()
{
	document.getElementById("myCanvas").style.zIndex="1";
	document.getElementById("div0").style.zIndex="0";
	document.getElementById("myCanvas").style.cursor="url(images.png), crosshair";
	lineChosen=1;
	lineThickness=20;
	ctx.strokeStyle="white";
}