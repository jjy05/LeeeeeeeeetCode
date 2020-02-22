/*
 * @Author: jjy
 * @Date: 2020-02-22 18:32:09
 * @LastEditors: jjy
 * @LastEditTime: 2020-02-22 18:34:13
 */
/**
 * A 长度小于 3 无法构成符合要求的山脉
 * 构成山脉需要包含递增及递减序列
 * 且先增后减
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  if (A.length < 3) return false;

  var uphill = false, downhill = false;

  for (var i = 1; i < A.length; i++) {
    if (A[i] > A[i-1] && !downhill) {
      uphill = true;
    } else if (A[i] < A[i-1] && uphill) {
      downhill = true;
    } else {
      return false;
    }
  }
  return uphill && downhill;
}; 