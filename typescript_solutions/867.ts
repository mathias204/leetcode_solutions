/**
 * @author Mathias Brosens
 * @date 2023-12-10
 */

function transpose(matrix: number[][]): number[][] {
  let result: number[][] = [];
  for (let i = 0; i < matrix[0]?.length; i++) {
    const row = matrix.map((row) => row[i]);
    result.push(row);
  }
  return result;
}
