
function drawing_object(name , type, x , y , width , height){
                      this.name = name;
                      this.type = type;
                      this.x = x;
                      this.y = y;
                      this.width = width;
                      this.height = height;

                    }






var temp_table = new Array();
var index = 0;

var old_coords_object = null;


function add_object(img, x, y)
{
  var id = img.id;
  var new_index = id;
  if(id.indexOf("canvas") == 0)
  {
    var type = temp_table[new_index].type;
    temp_table[new_index] = new drawing_object(new_index, type, x, y, img.width, img.height);
    // console.log(temp_table);
    console.log(temp_table[new_index]);
  }
  else
  {
      new_index = "canvas_" + index.toString();
      index = index + 1;
      temp_table[new_index] = new drawing_object(new_index, id, x, y, img.width, img.height);
      // console.log(temp_table);
      console.log(temp_table[new_index]);

  }
    return new_index;
}

function draw_line(p1, p2)
{
  var x1 = 0;
  var y1 = 0;
  var x2 = 0;
  var y2 = 0;
  if(p1.left < p2.left)
  {
    x1 = Math.trunc(p1.left + p1.width);
    y1 = Math.trunc(p1.top + p1.height / 2);
    x2 = Math.trunc(p2.left);
    y2 =  Math.trunc(p2.top + p1.height / 2);
  }
  else
  {
    x2 = Math.trunc(p1.left + p1.width);
    y2 = Math.trunc(p1.top + p1.height / 2);
    x1 = Math.trunc(p2.left);
    y1 =  Math.trunc(p2.top + p1.height / 2);

  }
  console.log(p1.id);
  console.log(p2.id);
  console.log(x1, y1, x2, y2);
  var line = new fabric.Line([x1, y1, x2, y2], {
    fill: 'red',
    stroke: 'red',
    strokeWidth: 5,
    selectable: false,
    absolutePositioned: true,
    evented: false
  });
  console.log('draw_line ' + line);
  canvas.add(line);

}




function create_line(target)
{
  if(old_coords_object == null)
  {
    old_coords_object = target;
  }
  else
  {
    draw_line(old_coords_object, target);
    old_coords_object = null;
  }
}

function update_features(target)
{
  var x = target.left;
  var y = target.top;
  add_object(target, x, y);
}






function initCanvas() {
    $('.canvas-container').each(function(index) {
        // $('.canvas-container').css({backgroundColor : "red"});
        var canvasContainer = $(this)[0];
        var canvasObject = $("canvas", this)[0];
        var url = $(this).data('floorplan');
        canvas = window._canvas = new fabric.Canvas(canvasObject);
        console.log(canvas);
        canvas.setHeight(500);
        canvas.setWidth(500);
        // canvas.css({'z-index' : -1, });
        // console.log('url : ' + url)
        // canvas.setBackgroundImage('js/download.jpg', canvas.renderAll.bind(canvas));
        // canvas.setAttribute('width', 800);

        var imageOffsetX, imageOffsetY;

        function handleDragStart(e) {
            [].forEach.call(images, function (img) {
                img.classList.remove('img_dragging');
            });
            this.classList.add('img_dragging');


            var imageOffset = $(this).offset();
            imageOffsetX = e.clientX - imageOffset.left;
            imageOffsetY = e.clientY - imageOffset.top;
            // console.log('dragStart happened');
        }

        function handleDragOver(e) {
            if (e.preventDefault) {
                e.preventDefault();
            }
            // console.log('dragOver happened');
            e.dataTransfer.dropEffect = 'copy';
            return false;
        }

        function handleDragEnter(e) {
            this.classList.add('over');
            // console.log('dragEnter happened');
        }

        function handleDragLeave(e) {
            this.classList.remove('over');
            // console.log('dragLeave happened');
        }

        function handleDrop(e) {
            e = e || window.event;
            if (e.preventDefault) {
              e.preventDefault();
            }
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            var img = document.querySelector('.furniture img.img_dragging');
            // console.log('event: ', e);

            var offset = $(canvasObject).offset();
            var y = e.clientY - (offset.top + imageOffsetY);
            var x = e.clientX - (offset.left + imageOffsetX);
            // console.log(img.id);
            index = add_object(img, x, y);

            var newImage = new fabric.Image(img, {
                width: img.width,
                height: img.height,
                left: x,
                top: y,
                id: index,
                flag: 0
                // onclick: handleOnClick,
                // onHover: handleOnClick
            });
            // newImage.on('mouseup', handleOnClick);
            // newImage.onSelect = handleOnClick;
            console.log(newImage.id)
            canvas.add(newImage);
            window.fabric.util.addListener(canvas.upperCanvasEl, 'dblclick', function(event, self)
              {
                event.preventDefault();
                var target = canvas.findTarget(event);
                if(target.flag == 0)
                {
                  target.flag = 1
                }
                else
                {
                  console.log('double click ' + target.id);
                  // console.log('x : ', event.pageX);
                  create_line(target);
                  target.flag = 0;
                }
              }
            );
            // window.fabric.util.addListener(canvas.upperCanvasEl, 'click', function(event, self)
            //   {
                  // event.preventDefault();
            //     var target = canvas.findTarget(event);
            //     console.log('single_click ' + target.id);
            //     update_features(target);
            //   }
            //
            // )
            return false;
        }

        function handleDragEnd(e) {
            [].forEach.call(images, function (img) {
                img.classList.remove('img_dragging');
            });
            // console.log('dragEnd happened');
        }

      var images = document.querySelectorAll('.furniture img');
      [].forEach.call(images, function (img) {
        img.addEventListener('dragstart', handleDragStart, false);
        img.addEventListener('dragend', handleDragEnd, false);
      });
      canvasContainer.addEventListener('dragenter', handleDragEnter, false);
      canvasContainer.addEventListener('dragover', handleDragOver, false);
      canvasContainer.addEventListener('dragleave', handleDragLeave, false);
      canvasContainer.addEventListener('drop', handleDrop, false);
    });
}

initCanvas();
