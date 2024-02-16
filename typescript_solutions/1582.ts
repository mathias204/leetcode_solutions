/**
 * @author  Mathias Brosens
 * @date    2023-12-13
 */

/**
 * 1582. Special Positions in a Binary Matrix
 * https://leetcode.com/problems/special-positions-in-a-binary-matrix/description/
 *
 * Given an m x n binary matrix mat, return the number of special positions in mat.
 * A position (i, j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).
 */

/**
 * Very unefficient method, I think going over element per element would be more efficient.
 */
function numSpecial(mat: number[][]): number {
  let count = 0;
  for (let i = 0; i < mat[0].length; i++) {
    const column = mat
      .map((row) => {
        if (row.filter((num) => num === 1).length === 1) {
          return row[i];
        } else if (row[i] === 1) {
          return 2;
        }
      })
      .filter((num) => num === 1 || num === 2);
    if (column.length === 1 && column[0] === 1) {
      count++;
    }
  }
  return count;
}
