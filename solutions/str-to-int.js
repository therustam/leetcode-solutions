// Link https://leetcode.com/problems/string-to-integer-atoi/

/**
 * @param {string} s
 * @return {number}
 * @description String to Integer (atoi)
 */
var myAtoi = function (s) {
  const limit = 2147483648;
  const num = parseInt(s);

  if (!isNaN(num)) {
    if (num >= limit - 1) return limit - 1;
    if (num <= -limit) return -limit;
    return num;
  }

  return 0;
};