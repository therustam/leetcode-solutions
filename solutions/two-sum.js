// Link https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @description Two Sum
 */
var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let num = target - current;

    if (map.has(num)) {
      return [i, map.get(num)];
    } else {
      map.set(current, i);
    }
  }
};