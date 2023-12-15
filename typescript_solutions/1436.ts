/**
 * @author  Mathias Brosens
 * @date    2023-12-15
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
