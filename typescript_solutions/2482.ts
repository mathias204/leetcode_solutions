/**
 * @author Mathias Brosens
 * @date  2023-12-14
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
