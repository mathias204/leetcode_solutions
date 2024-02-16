/**
 * @author  Mathias Brosens
 * @date 2023-12-16
 */

/**
 * 242. Valid Anagram
 * https://leetcode.com/problems/valid-anagram/description/
 *
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 */

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  let arrayS: string[] = s.split("");
  let arrayT: string[] = t.split("");

  while (arrayS.length > 0) {
    let letter = arrayS.pop();
    arrayS = arrayS.filter((letterS) => letterS !== letter);
    arrayT = arrayT.filter((letterT) => letterT !== letter);

    if (arrayS.length !== arrayT.length) {
      return false;
    }
  }
  return true;
}
