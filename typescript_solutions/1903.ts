/**
 * @author Mathias Brosens
 * @date   2023-12-07
 */

/**
 * 1903. Largest Odd Number in String
 * https://leetcode.com/problems/largest-odd-number-in-string/description/
 *
 * You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.
 * A substring is a contiguous sequence of characters within a string.
 */

function largestOddNumber(num: string): string {
  while (parseInt(num.charAt(num.length - 1)) % 2 !== 1 && num.length !== 0) {
    num = num.slice(0, -1);
  }
  return num;
}
