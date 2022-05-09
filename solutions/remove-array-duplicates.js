// Link https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 * @description Remove Duplicates from Sorted Array
 */
var removeDuplicates = function (nums) {
  let set = new Set(nums);

  nums.length = 0;
  nums.push(...set.values())

  return set.size;
};