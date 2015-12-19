$(init);

var pixelPainterContainer;

function init(){
pixelPainterContainer = $('#pixelPainter');//document.getElementById('pixelPainter');

drawSwatches(swatches);
drawSwatchGrid(4, 10);
drawCanvasGrid(8, 8);
}
var swatches = function generateRandomColor(){
  var red = Math.floor(Math.random()*256);
  var green = Math.floor(Math.random()*256);
  var blue = Math.floor(Math.random()*256);
  return 'rgb ('+red+ ', '+green+', '+blue+')';
};



//accept an array of colors to generate swatches
function drawSwatches (swatches)  {
  //get swatch color
  // var swatch = swatches;
  //create div for swatch
var swatchElement = $('<div class="grid"></div>');

  
  //setting swatches background color
  // swatchElement.css('background-color', element);
  //create click handler for this swatch
  // var targetColor = swatchElement.css('background-color');
  //when you click swatch, it changes the grid color
  // swatchElement.on('click', function(event){
  //   $('.canvasCell').css('background-color', targetColor);
  // });

$('.cell').each(function(index, element){
  $(element).css("background-color", generateRandomColor());
});
  //appending swatch to pixel painter container
  pixelPainterContainer.append(swatchElement);
}



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
// var targetColor;
// function selectColor (){
//      $('swatchElement', this).on('click', function(){
//        targetColor = .css('background-color', targetColor);
//      })
    
//   }
  

function paintPixel (){

}