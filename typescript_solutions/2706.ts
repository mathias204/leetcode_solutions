/**
 * @author  Mathias Brosens
 * @date    2023-12-20
 */
function buyChoco(prices: number[], money: number): number {
  prices.sort((a, b) => a - b);
  const result = money - prices[0] - prices[1];
  if (result >= 0) {
    return result;
  } else {
    return money;
  }
}
