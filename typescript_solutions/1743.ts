/**
 * @date 2023/11/10
 * @author Mathias Brosens
 */

/**
 * Altough this implementation technically works it is not memory efficient at all and fails to submit for solution in leetcode.
 * I shall return to this challenge and implement something better.
 */
function restoreArray(adjacentPairs: number[][]): number[] {
  let starter_elements: number[] = [];
  //   adjacentPairs.map((pair) => pair.map((number) => numbers.push(number)));
  for (let pair of adjacentPairs) {
    for (let element of pair) {
      if (starter_elements.includes(element)) {
        starter_elements = starter_elements.filter(
          (starter) => starter != element
        );
      } else {
        starter_elements.push(element);
      }
    }
  }
  const result = findNextElement(starter_elements[0], adjacentPairs);
  return result;
}

function findNextElement(start: number, adjacentPairs: number[][]): number[] {
  for (let pair of adjacentPairs) {
    if (pair.includes(start)) {
      const newStart = pair.filter((element) => element != start)[0];
      adjacentPairs = adjacentPairs.filter(
        (pairInAdjacents) => pairInAdjacents != pair
      );
      if (adjacentPairs.length === 0) {
        return [start, newStart];
      } else {
        return [start].concat(findNextElement(newStart, adjacentPairs));
      }
    }
  }
  return [];
}
