/**
 * @author  Mathias Brosens
 * @date    2023-12-19
 */

/**
 * 661. Image Smoother
 * https://leetcode.com/problems/image-smoother/description/
 */

function imageSmoother(img: number[][]): number[][] {
  const result: number[][] = [];
  for (let i = 0; i < img.length; i++) {
    result.push([]);
    for (let j = 0; j < img[0].length; j++) {
      let n = 1;
      let sum: number = img[i][j];
      if (i + 1 < img.length) {
        sum += img[i + 1][j];
        n++;
      }
      if (i - 1 >= 0) {
        sum += img[i - 1][j];
        n++;
      }
      if (j + 1 < img[0].length) {
        sum += img[i][j + 1];
        n++;
      }
      if (j - 1 >= 0) {
        sum += img[i][j - 1];
        n++;
      }
      if (i + 1 < img.length && j + 1 < img[0].length) {
        sum += img[i + 1][j + 1];
        n++;
      }
      if (i + 1 < img.length && j - 1 >= 0) {
        sum += img[i + 1][j - 1];
        n++;
      }
      if (i - 1 >= 0 && j + 1 < img[0].length) {
        sum += img[i - 1][j + 1];
        n++;
      }
      if (i - 1 >= 0 && j - 1 >= 0) {
        sum += img[i - 1][j - 1];
        n++;
      }

      result[i].push(Math.floor(sum / n));
    }
  }
  return result;
}

console.log(
  imageSmoother([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
