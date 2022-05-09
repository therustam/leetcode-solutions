// Link https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 * @description 3Sum
 */
var threeSum = function (nums) {
  const results = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    const leadingNum = nums[i];

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = leadingNum + nums[left] + nums[right];

      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        results.push([leadingNum, nums[left], nums[right]]);
        left++;

        while (nums[left] === nums[left - 1] && left < right) {
          left++;
        }
      }
    }
  }

  return results;
};