function fillFields() {
    var drawObj = document.getElementById("drawObjects");
    var imgs = new Array("AND", "OR", "NOT", "NAND", "NOR", "XOR", "XNOR");
    for (i in imgs) {
        var item = document.createElement("img");
        item.setAttribute("src", "img/"+imgs[i]+".png");
        item.setAttribute("class", "column");
        item.setAttribute("height", "50px");
        item.setAttribute("width", "50px");
        item.setAttribute("title", imgs[i]+" gate");
        item.setAttribute("onclick", "dragDrop()");
        drawObj.appendChild(item);
    }
}
function new_file(e) {
    // TODO:
}
function open_file(e) {
    // TODO:
}
function save_file(e) {
    // TODO:
}
function share_file(e) {
    // TODO:
}
function dragDrop() {
    console.log("draw object selected");
    // TODO:
}

function bringCanvasUp() {
    console.log("canvas up");
    // TODO:
}

function erase() {
    console.log("erased");
    // TODO:
}

function bringGridUp() {
    console.log("grid up");
    // TODO:
}
function newpage() {
    console.log("new page");
    // TODO:
}
function pickThickness() {
    console.log("pickThickness");
    // TODO:
}
function textbox(e) {
    console.log("textbox");
    // TODO:
}
function capture() {
    console.log("captured");
    // TODO:
}
function openNav() {
    console.log("navigation opened");
    // TODO:
}
