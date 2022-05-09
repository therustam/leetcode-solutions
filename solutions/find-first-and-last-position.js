// Link https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @description Find First and Last Position of Element in Sorted Array
 */
var searchRange = function (nums, target) {
  let res = [-1, -1]

  if (nums == null) return res

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== target) {
      continue;
    } else {
      res[0] = i
      while (nums[i] === target) {
        i++
      }
      res[1] = i - 1
      break;
    }
  }

  return res;
};