/**
 * @author  Mathias Brosens
 * @date    2023-12-15
 */

/**
 * 1436. Destination City
 * https://leetcode.com/problems/destination-city/description/
 *
 * You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi.
 * Return the destination city, that is, the city without any path outgoing to another city.
 * It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.
 */

function destCity(paths: string[][]): string {
  let start_cities: Set<string> = new Set();
  while (paths.length > 0) {
    let original = true;
    const removed_path = paths.pop() as string[];
    start_cities.add(removed_path[0]);

    if (start_cities.has(removed_path[1])) {
      original = false;
    } else {
      for (let i = 0; i < paths.length; i++) {
        if (paths[i][0] === removed_path[1]) {
          original = false;
          break;
        }
      }

      if (original) {
        return removed_path[1];
      }
    }
  }
  return "";
}
