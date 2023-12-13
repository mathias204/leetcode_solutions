/**
 * @author  Mathias Brosens
 * @date    2023-12-13
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
