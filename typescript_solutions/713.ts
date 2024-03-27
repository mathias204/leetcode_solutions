/**
 * @author Mathias Brosens
 * @date 2024-03-27
 */

/**
 * 713. Subarray Product Less Than K
 * https://leetcode.com/problems/subarray-product-less-than-k/description/?envType=daily-question&envId=2024-03-27
 *
 * Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.
 */

function numSubarrayProductLessThanK(nums: number[], k: number): number {
  if (k <= 1) return 0;

  let result: number = 0;
  let product: number = 1;
  let left: number = 0;

  for (let right = 0; right < nums.length; right++) {
    product *= nums[right];
    while (product >= k) {
      product /= nums[left];
      left++;
    }
    result += right - left + 1;
  }

  return result;
}

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
