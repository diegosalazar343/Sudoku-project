export default function Sudoku(row, column){
  this.row = row;
  this.column = column;
  // this.square = square;

};

  Sudoku.prototype.checkType = function() {
    return "not equal";
  };

  Sudoku.prototype.makeArray = function() {
    return rowSudoku;
  };


  // Sudoku.prototype.checkNums = function(number) {
  //   for(let i = 1; i <= number; i+= 1) {
  //     this.row = number
  //   }
  //};
