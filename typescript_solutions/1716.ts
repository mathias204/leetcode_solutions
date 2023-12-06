/**
 * @author Mathias Brosens
 * @date 2023-12-06
 */

/**
 * Beats 75% of users in runtime, but memory is quite bad beats 25%
 * A mathmatical approach will probably be more memory efficient.
 */
function totalMoney(n: number): number {
  let i = 0;
  let week = 0;
  let result = 0;
  while (i < n) {
    if (i % 7 === 0) {
      week++;
    }
    result += week + (i % 7);
    i++;
  }
  return result;
}
totalMoney(4);
