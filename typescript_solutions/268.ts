/**
 * @author Mathias Brosens
 * @date 2024/02/20
 */

/**
 * 268. Missing Number
 * https://leetcode.com/problems/missing-number/description/
 *
 * Given an array nums containing n distinct numbers in the range [0, n],
 * return the only number in the range that is missing from the array.
 */

/**
 * Both implementation were not fast. It looks like working with the difference of sums would be much quicker
 */

function missingNumber2ndImplementation(nums: number[]): number {
  for (let i: number = 0; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
  return -1;
}

function missingNumber(nums: number[]): number {
  const fullArray: number[] = Array.from(
    { length: nums.length + 1 },
    (_, index) => index
  );
  return fullArray.filter((num) => !nums.includes(num))[0];
}
