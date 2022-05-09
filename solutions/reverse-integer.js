// Link https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} n
 * @return {number}
 * @description Reverse Integer
 */
var reverse = function (x) {
  var signMultiplier = 1;
  if (x < 0) {
    signMultiplier = -1;
    x = x * signMultiplier;
  }

  var result = 0;
  let maxInteger = Math.pow(2, 31) - 1;
  let minInteger = Math.pow(2, 31) * (-1);

  while (x > 0) {
    if (x * signMultiplier > Math.floor(maxInteger / 10)
      || x * signMultiplier < Math.floor(minInteger / 10)) {
      return 0;
    }

    result = result * 10 + x % 10;
    x = Math.floor(x / 10);
  }

  return result * signMultiplier;
};