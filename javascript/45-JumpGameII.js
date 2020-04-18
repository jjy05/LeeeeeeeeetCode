/*
 * @Author: jjy
 * @Date: 2020-03-10 21:07:58
 * @LastEditors: jjy
 * @LastEditTime: 2020-03-10 21:08:50
 */
/**
 * 记录每一格所能覆盖的范围需要的最少步数
 */

var jump = function(nums) {
  var len = nums.length;

  if (len < 2) return 0;

  var minimumSteps = Array(len).fill(0);
  var index = 1;
  var step = 1;

  for (var i = 0; i < len; i ++) {
    while (index <= i + nums[i]) {
      minimumSteps[index] = minimumSteps[i] + 1

      if (index === len - 1) {
        return minimumSteps[len - 1];
      }

      index ++;
    }
  }

  return minimumSteps[len - 1];
};