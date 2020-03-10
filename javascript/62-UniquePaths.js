/*
 * @Author: jjy
 * @Date: 2020-03-08 01:13:41
 * @LastEditors: jjy
 * @LastEditTime: 2020-03-08 01:14:11
 */
/**
 * 动态规划
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  if (m < 1 || n < 1) return 0;

  var matrix = [];

  for (var i = 0; i < m; i ++) {
    matrix[i] = Array(n).fill(0);
  }

  matrix[0][0] = 1;

  for (var i = 0; i < m; i ++) {
    for (var j = 0; j < n; j ++) {
      var value = 0;
      if (j > 0) {
        value += matrix[i][j - 1];
      }
      if (i > 0) {
        value += matrix[i - 1][j];
      }

      matrix[i][j] = value || matrix[i][j];
    }
  }

  return matrix[m - 1][n - 1];
};