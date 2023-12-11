/**
 * @author Mathias Brosens
 * @date   2023-12-11
 */

/**
 * This function is very slow in comparison with others
 */
function findSpecialInteger(arr: number[]): number {
  const result = arr.filter(
    (number) =>
      arr.reduce((count, currentElement) => {
        return count + (currentElement === number ? 1 : 0);
      }, 0) /
        arr.length >
      0.25
  );
  return result[0];
}
