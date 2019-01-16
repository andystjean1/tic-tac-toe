//Andy St. Jean
//tic tac toe game

function setup()
{
  createCanvas(windowWidth, windowHeight);
  stroke(0, 0, 0);
  strokeWeight(15);
  board = new Board()
  background(220, 220, 220);
  fill(220, 220, 220);
  moveCount = 0;
}

function draw()
{
  board.show()
}

function mousePressed()
{
  moveCount++;

  if(board.checkClick(mouseX, mouseY)){
    cell = board.findCell(mouseX, mouseY)
    if(!(cell.hasMark)){
      cell.hasMark = true;
      cell.isX = true;
    }
  }

  if(moveCount < 9){
    board.makeMove();
    moveCount++;
  }
  else {
    board.gameResult();
  }
}
