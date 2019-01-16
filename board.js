
const BOX_SIZE = 150

//Board Object
function Board()
{
    this.colStart = int(height/4);
    this.rowStart = int(width/4);

    this.cells = [];
    for(i = 0; i < 9; i++)
    {
      this.cells.push(new Cell(this.rowStart+ (i%3)*BOX_SIZE, this.colStart + int((i/3)) * 150))
    }

    //find the cell the click was in
    this.findCell = function(x,y)
    {
      this.row = this.findRow(x)
      if(y - this.colStart < BOX_SIZE){
        if(this.row == 0){i = 0;}
        else if(this.row == 1){i = 1;}
        else{i = 2;}
      }
      else if(y - this.colStart < BOX_SIZE*2) {
        if(this.row == 0){i = 3;}
        else if(this.row == 1){i = 4;}
        else{i = 5;}
      }
      else {
        if(this.row == 0){i = 6;}
        else if(this.row == 1){i = 7;}
        else{i = 8;}
      }

      return this.cells[i]
    }

    //find the row the box is in
    //assumes x value falls within the playing board
    this.findRow = function(x)
    {
      if (x - this.rowStart < BOX_SIZE) { return 0; }
      else if(x - this.rowStart < BOX_SIZE * 2) {return 1;}
      else { return 2; }
    }

    //check to make sure the click is in the game area
    this.checkClick = function(x,y)
    {
      return !(x < this.rowStart || x > this.rowStart+BOX_SIZE*4 || y < this.colStart || y > this.colStart+BOX_SIZE*4)
    }

    //computer makes move by picking a random open cell
    this.makeMove = function()
    {
      var openCells = []
      for(i = 0; i < this.cells.length; i++)
      {
        if(!(this.cells[i].hasMark))
        {
          openCells.push(this.cells[i]);
        }
      }

      var c = openCells[Math.floor(Math.random() * openCells.length)];
      c.hasMark = true;
    }

    //check the board for the game result
    this.gameResult = function()
    {
      var cols = [0, 1, 2]
      var rows = [0, 3, 6]
      var diags =[0, 2]

      //check cols
      console.log("checking the results")
      //draw
      return 0;
    }

    //show the board
    this.show = function()
    {
      //draw horizontal lines
      line(this.rowStart, this.colStart+(BOX_SIZE*2), this.rowStart+(BOX_SIZE*3), this.colStart+(BOX_SIZE*2))
      line(this.rowStart, this.colStart+BOX_SIZE, this.rowStart+(BOX_SIZE*3), this.colStart+BOX_SIZE);
      //draw vertical lines
      line(this.rowStart+BOX_SIZE, this.colStart, this.rowStart+BOX_SIZE, this.colStart+(BOX_SIZE*3));
      line(this.rowStart+(BOX_SIZE*2), this.colStart, this.rowStart+(BOX_SIZE*2), this.colStart+(BOX_SIZE*3));

      for(i = 0; i < this.cells.length; i++)
      {
        this.cells[i].show();
      }
    }
}

//cell object
function Cell(x, y)
{
  this.x = x;
  this.y = y;
  this.hasMark = false;
  this.isX = false;

  //draw either an x or an o
  this.show = function()
  {
    if(this.hasMark)
    {
      if(!(this.isX))
      {
        ellipse(this.x + BOX_SIZE/2, this.y + BOX_SIZE/2, 80, 80);
      }
      else
      {
        line(this.x+BOX_SIZE*(1/4), this.y+BOX_SIZE*(1/4), this.x+BOX_SIZE*(3/4), this.y+BOX_SIZE*(3/4));
        line(this.x+BOX_SIZE*(3/4), this.y+BOX_SIZE*(1/4), this.x+BOX_SIZE*(1/4), this.y+BOX_SIZE*(3/4));
      }
    }
  }
}
