/**
 * @author  Mathias Brosens
 * @date    2023-12-12
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
