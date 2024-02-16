/**
 * @author Mathias Brosens
 * @date  2023-12-14
 */

/**
 * 2482. Difference Between Ones and Zeros in Row and Column
 * https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/description/
 *
 * You are given a 0-indexed m x n binary matrix grid.
 * A 0-indexed m x n difference matrix diff is created with the following procedure:
 * Let the number of ones in the ith row be onesRowi.
 * Let the number of ones in the jth column be onesColj.
 * Let the number of zeros in the ith row be zerosRowi.
 * Let the number of zeros in the jth column be zerosColj.
 * diff[i][j] = onesRowi + onesColj - zerosRowi - zerosColj
 *
 * Return the difference matrix diff.
 */

/**
 * Memory and speed could be better.
 */
function onesMinusZeros(grid: number[][]): number[][] {
  const row_length = grid[0].length;
  const column_length = grid.length;
  let ones_row_grid: number[] = grid.map(
    (row) => row.filter((num) => num === 1).length
  );
  let ones_column_grid: number[] = [];
  for (let j = 0; j < grid[0].length; j++) {
    let onesColumnj = grid
      .map((row) => row[j])
      .filter((num) => num === 1).length;
    ones_column_grid.push(onesColumnj);
  }
  const result: number[][] = [];
  for (let i = 0; i < grid.length; i++) {
    result.push([]);
    for (let j = 0; j < grid[0].length; j++) {
      result[i].push(
        ones_column_grid[j] +
          ones_row_grid[i] -
          (row_length - ones_row_grid[i]) -
          (column_length - ones_column_grid[j])
      );
    }
  }
  return result;
}

// function onesMinusZeros(grid: number[][]): number[][] {
//   const row_length = grid[0].length;
//   const column_length = grid.length;
//   const result: number[][] = [];
//   for (let i = 0; i < grid.length; i++) {
//     result.push([]);
//     let row_i = grid[i];
//     const onesRow_i: number = row_i.filter((num) => num === 1).length;
//     for (let j = 0; j < grid[0].length; j++) {
//       let col_j = grid.map((row) => row[j]);
//       const onesCol_j: number = col_j.filter((num) => num === 1).length;
//       result[i].push(
//         onesCol_j +
//           onesRow_i -
//           (row_length - onesRow_i) -
//           (column_length - onesCol_j)
//       );
//     }
//   }
//   return result;
// }
