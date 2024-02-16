/**
 * @author Mathias Brosens
 * @date 2023-12-06
 */

/**
 * 1716. Calculate Money in Leetcode Bank
 * https://leetcode.com/problems/calculate-money-in-leetcode-bank/description/
 *
 * Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.
 * He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, he will put in $1 more than the day before. On every subsequent Monday, he will put in $1 more than the previous Monday.
 * Given n, return the total amount of money he will have in the Leetcode bank at the end of the nth day.
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
