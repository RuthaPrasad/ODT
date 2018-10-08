angular.module("headerApp",[]).controller("ToolbarCtrl",[function() {
    var self = this;
    self.pencilDraw = function() {
        // TODO:
        console.log("draw pencil");
    };
    self.erase = function() {
        // TODO:
        console.log("erase");
    };
    self.select = function() {
        // TODO:
        console.log("select");
    };
    self.newObj = function() {
        // TODO:
        console.log("new object");
    };
    self.circleDraw = function() {
        // TODO:
        console.log("draw circle");
    };
    self.pickColor = function() {
        // TODO:
        console.log("pick color");
    };
    self.resizeFont = function() {
        // TODO:
        console.log("resize font");
    };
    self.callHelp = function() {
        // TODO:
        console.log("help called");
    };

}])
.controller("MenubarCtrl",[function() {
    var s = this;
    s.newFile = function() {
        // TODO:
        console.log("new file");
    };
    s.openFile = function() {
        // TODO:
        console.log("open file");
    };
    s.dupFile = function() {
        // TODO:
        console.log("duplicate file");
    };
    s.saveFile = function() {
        // TODO:
        console.log("save file");
    };
    s.saveAsFile = function() {
        // TODO:
        console.log("save as");
    }
}])
