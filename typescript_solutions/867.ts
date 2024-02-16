/**
 * @author Mathias Brosens
 * @date 2023-12-10
 */

/**
 * 867. Transpose Matrix
 * https://leetcode.com/problems/transpose-matrix/description/
 *
 * Given a 2D integer array matrix, return the transpose of matrix.
 * The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.
 */

function transpose(matrix: number[][]): number[][] {
  let result: number[][] = [];
  for (let i = 0; i < matrix[0]?.length; i++) {
    const row = matrix.map((row) => row[i]);
    result.push(row);
  }
  return result;
}
