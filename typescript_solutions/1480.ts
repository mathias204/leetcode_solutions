/**
 * @date 2023/11/10
 * @author Mathias Brosens
 */

/**
 * 1480. Running Sum of 1d Array
 * https://leetcode.com/problems/running-sum-of-1d-array/description/
 *
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * Return the running sum of nums.
 */

function runningSum(nums: number[]): number[] {
  let result: number[] = [nums.length];
  for (let i = 0; i < nums.length; i++) {
    let sum: number = 0;
    for (let j = i; j >= 0; j--) {
      sum += nums[j];
      result[i] = sum;
    }
  }
  return result;
}
/**
 * @author Alex Gavrilov
 * Note: this is my description of what the solution holds.
 * Now that I see this code it shows that my code is bad in many ways. I calculate the sum again from zero for every item in the array while you can just add the number to the sum as you go.
 * The map function also make so the code does not used for loops which looks much better.
 */
function runningSumTopSolution(nums: number[]): number[] {
  let result: number = 0;
  return nums.map((item) => (result += item));
}
