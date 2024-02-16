/**
 * @author Mathias Brosens
 * @date   2023-12-11
 */

/**
 * 1287. Element Appearing More Than 25% In Sorted Array
 * https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/description/
 *
 * Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.
 */

/**
 * This function is very slow in comparison with others
 */
function findSpecialInteger(arr: number[]): number {
  const result = arr.filter(
    (number) =>
      arr.reduce((count, currentElement) => {
        return count + (currentElement === number ? 1 : 0);
      }, 0) /
        arr.length >
      0.25
  );
  return result[0];
}
