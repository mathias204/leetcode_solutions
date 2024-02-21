/**
 * @author  Mathias Brosens
 * @date    2024/02/21
 */

/**
 * 201. Bitwise AND of Numbers Range
 * https://leetcode.com/problems/bitwise-and-of-numbers-range/description/?envType=daily-question&envId=2024-02-21
 *
 *  Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.
 */

function rangeBitwiseAnd(left: number, right: number): number {
  let result: number = left;
  for (let i: number = left; i <= right; i++) {
    result = result & i;
    if (result === 0) {
      return result;
    }
  }
  return result;
}

/**
 * This implementatin is way faster as the first, but memory usage is bad.
 */
function rangeBitwiseAnd2ndIteration(left: number, right: number): number {
  let result: number = 0;
  let i = Math.floor(Math.log2(left));
  while (i === Math.floor(Math.log2(right)) && i !== -Infinity) {
    if (i === 0) {
      return (result += 1);
    }
    result += 2 ** i;
    left -= 2 ** i;
    right -= 2 ** i;
    i = Math.floor(Math.log2(left));
  }
  return result;
}

console.log(rangeBitwiseAnd2ndIteration(5, 7));
