/**
 * @author  Mathias Brosens
 * @date 2023-12-16
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
