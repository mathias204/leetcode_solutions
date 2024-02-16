/**
 * @author  Mathias Brosens
 * @date    2023-12-12
 */

/**
 * 1464. Maximum Product of Two Elements in an Array
 * https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/description/
 *
 * Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
 */
function maxProduct(nums: number[]): number {
  const biggest = Math.max(...nums);
  if (nums.filter((num) => num === biggest).length >= 2) {
    return (biggest - 1) * (biggest - 1);
  } else {
    nums = nums.filter((num) => num !== biggest);
    return (Math.max(...nums) - 1) * (biggest - 1);
  }
}
