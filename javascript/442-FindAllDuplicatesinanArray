/**
 * 方法一：
 * 数组长度为 n 而数组元素介于 1 ~ n 之间（含）
 * 则可以遍历数组，以数组元素的值 - 1 为下标（下标是 0 ~ n - 1），将对应元素置为负数
 * 例如 数组中某个元素为 3，则将 nums[2] 置为负数
 * 遍历数组时，发现 nums[2] 为负数
 * 则可得知数字 2 + 1 的值，即 3，已经出现过
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  return nums.reduce((acc, item, idx, ary) => {
    var absItem = Math.abs(item);
    var temp = ary[absItem - 1];
    if (temp < 0) {
      acc.push(absItem);
    } else {
      ary[absItem - 1] = -temp;
    }
    return acc;
  }, []);
};