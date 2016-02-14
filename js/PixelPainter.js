$(function(){
  run();
});

function run (){
  init();
}
var body = document.body;
var pixelPainterContainer;
var canvasCell;
var color;
var selectedColor;
//send picture to server
var savedCanvas;
//
function init(){
pixelPainterContainer = $('#pixelPainter');//document.getElementById('pixelPainter');
// drawSwatches(swatches);
drawSwatchGrid(4, 10);
drawCanvasGrid(8, 8);
createColorSwatch();
paintCanvas();
selectColor();
clearButton();
eraseButton();
saveButton();
deleteButton();
}

function selectColor() {
 $('.cell').click(function (events){
    selectedColor = $(this).css('background-color');
  });
}

function paintCanvas(){
  $('.canvasCell').click(function (events) {
    $(this).css("background-color", selectedColor);
  });
}

function createColorSwatch(){
  $('.cell').each(function(index, element){
    $(element).css('background-color', generateRandomColor());
  });
}

function clearButton (){
  var clearButton = $('<button/>')
    .text('Clear')
    .click(function (events) {
    $('.canvasCell').css("background-color", "white"); 
  });
  $('.container').append(clearButton);
}

function eraseButton (){
  var eraseButton = $('<button/>')
  .text('Erase')
  .click(function (events) {
  selectedColor = "white";
  });
  $('.container').append(eraseButton);
}

function saveButton () {
  var picture = [];
  var add = $('<button/>')
    .text('Save')
    .click(function (events) {
     $('.canvasCell').each(function(i, cell){
        picture.push($(cell).css("background-color"));
       // for(var j = 0; j < cells.length; j++){
       //  console.log(cells[j]);
       // }  
      });
   savedCanvas = picture;
    }); 
  $('.container').append(add);
}


function deleteButton() {
  var remove = $('<button/>')
    .text('Delete')
    .click(function (events) {

    });
  $('.container').append(remove);
}


 function generateRandomColor(){
  var red = Math.floor(Math.random()*256);
  var green = Math.floor(Math.random()*256);
  var blue = Math.floor(Math.random()*256);
  return 'rgb('+red+ ', '+green+', '+blue+')';
}

  //targeting swatch container
 // var swatchElement = $('<div class="container"></div>');
  
//   // setting swatches background color
//   swatchElement.css('background-color', element);
//   // create click handler for this swatch
//    var targetColor = swatchElement.css('background-color');
//   // when you click swatch, it changes the grid color
//   swatchElement.on('click', function(event){
//     $('.canvasCell').css('background-color', targetColor);
//   });

  // appending swatch to pixel painter container
//   pixelPainterContainer.append(swatchElement);
// }



// creating the swatch grid
function drawSwatchGrid (x, y) {
  //create grid and grid container
  var grid = [];
  var gridContainer = $('<div />');
  gridContainer.attr('id','grid');
  gridContainer.addClass('container');

  //create row and row container
  for (var column = 0; column < y; column++){
    var rowArray = [];
    var rowContainer = $('<div />');

    //create cell and cell container
    for (var row = 0; row < x; row ++){
      var cellElement = $('<div />');
      cellElement.addClass('cell');
      rowArray.push(null);
      rowContainer.append(cellElement);
    }
    grid.push(rowArray);
    gridContainer.append(rowContainer);

  }
  pixelPainterContainer.append(gridContainer);
  
}

// creating the canvas grid
function drawCanvasGrid (x, y) {
  //create grid and grid container
  var canvasGrid = [];
  var canvasGridContainer = $('<div />');
  canvasGridContainer.attr('id','canvasGrid');
  canvasGridContainer.addClass('canvasContainer');

  //create row and row container
  for (var column = 0; column < y; column++){
    var canvasRowArray = [];
    var canvasRowContainer = $('<div />');

    //create cell and cell container
    for (var row = 0; row < x; row ++){
      var canvasCell = $('<div />');
      canvasCell.addClass('canvasCell');
      canvasRowArray.push(null);
      canvasRowContainer.append(canvasCell);
    }
    canvasGrid.push(canvasRowArray);
    canvasGridContainer.append(canvasRowContainer);


  }
  pixelPainterContainer.append(canvasGridContainer);


}



