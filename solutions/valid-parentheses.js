// Link https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 * @description Valid Parentheses
 */
var isValid = function (s) {
  let bracketQueue = [];

  let brackets = {
    '}': '{',
    ')': '(',
    ']': '[',
  }

  if (s.length % 2 === 1) {
    return false;
  } else {

    for (let symbol of s) {
      if (symbol === '(' || symbol === '{' || symbol === '[') {
        bracketQueue.push(symbol);
      } else {
        if (bracketQueue[bracketQueue.length - 1] === brackets[symbol]) {
          bracketQueue.pop();
        } else {
          return false;
        }
      }
    }

    return bracketQueue.length === 0;
  }
};