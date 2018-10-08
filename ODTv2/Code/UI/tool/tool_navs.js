    function Toolbar()
    {
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
    }
    function Menubar()
    {
        var self= this;
        self.newFile = function() {
            // TODO:
            console.log("new file");
        };
        self.openFile = function() {
            // TODO:
            console.log("open file");
        };
        self.dupFile = function() {
            // TODO:
            console.log("duplicate file");
        };
        self.saveFile = function() {
            // TODO:
            console.log("save file");
        };
        self.saveAsFile = function() {
            // TODO:
            console.log("save as");
        }
    }
    function Footer()
    {
        var self = this;
        self.username = "James Bond";
        self.srn = "01FB15ECS007";
        var modal_id = "#myModal";

        self.showUserInfo =function()
        {
            document.getElementById("modal-title").innerHTML = "User Information";
            document.getElementById("modal-body").innerHTML = self.username +"\n"+self.srn;
            $(modal_id).modal();
            console.log("user");
        }
        self.showQuestion =function()
        {
            document.getElementById("modal-title").innerHTML = "Question";
            document.getElementById("modal-body").innerHTML = "blah"+"\n"+"blah";
            $(modal_id).modal();
            console.log("question");
        
        }
        
    }
    function loadImages()
    {
        var shapes = document.getElementById("Shapes");
        var folder = "../images/";
    /*    $.ajax({
            url : folder,
            success: function (data) {
                $(data).find("a").attr("href", function (i, val) {
                    if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                        $(shapes).append( "<img src='"+ folder + val +"'>" );
                    } 
                });
            }
        });        
        */
    }   
    function init()
    {
        loadImages();    
    }
    var footer = new Footer();
    var tool = new Toolbar();
    var menu = new Menubar();
    