function largestOddNumber(num: string): string {
  while (parseInt(num.charAt(num.length - 1)) % 2 !== 1 && num.length !== 0) {
    num = num.slice(0, -1);
  }
  return num;
}
