/**
 * @author Mathias Brosens
 * @date 2024-02-19
 */

/**
 * 241. Power of two
 * https://leetcode.com/problems/power-of-two/description/
 *
 * Given an integer n, return true if it is a power of two. Otherwise, return false.
 * An integer n is a power of two, if there exists an integer x such that n == 2x.
 */

function isPowerOfTwo(n: number): boolean {
  let i = -1;
  while (2 ** i < n) {
    i++;
    if (2 ** i === n) {
      return true;
    }
  }
  return false;
}

/**
 * This function performs the same as the previous
 */
function isPowerOfTwoVariant2(n: number): boolean {
  if (n === 0) {
    return false;
  }
  const result = Math.log2(n);
  return Math.round(result) === result;
}
