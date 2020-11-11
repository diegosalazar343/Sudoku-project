//check that each row only uses the numbers 1-9 once.

//check that each column only uses the numbers 1-9 once.

//check that each square only uses the numbers 1-9 once

import { TestScheduler } from 'jest';
import Sudoku from'./../src/sudoku.js';

describe('Sudoku', () => {

//Test 1:Should take an array and ask "does this array use the number 1-9 once?"
  test('should correctly create a sudoku object', () => {
    const sudoku = new Sudoku(9,9);
    expect(sudoku.row).toEqual(9);
    expect(sudoku.column).toEqual(9);
  });

  test('should have sum of the rows equal to the sum of the columns', () => {
    const notSudoku = new Sudoku(3, 9);
    expect(notSudoku.checkType()).toEqual("not equal");
  });

  test('row should includes numbers 1-9', () => {
    const rowSudoku = [];
    expect(rowSudoku).toEqual(this.row);
  });
});
//Test 2:
