// Link https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 * @description Longest Common Prefix
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  let str = strs[0];

  for (let word of strs) {
    while (word.indexOf(str) !== 0) {
      str = str.substring(0, str.length - 1);
    }
  }

  return str;
};