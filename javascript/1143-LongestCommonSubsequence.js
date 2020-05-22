/*
 * @Author: jjy
 * @Date: 2020-05-20 21:25:29
 * @LastEditors: jjy
 * @LastEditTime: 2020-05-20 21:26:38
 */

/*
 * 动态规划解法
 */

var longestCommonSubsequence = function(text1, text2) {
  if (!text1 || !text2) return "";
  
  var matrix = [];
  for (var row = 0; row <= text1.length; row++) {
      for (var col = 0; col <= text2.length; col++) {
          if (!matrix[row]) {
              matrix[row] = [];
          }
          
          if (!row || !col) {
              matrix[row][col] = 0;
          } else {
              if (text1[row - 1] === text2[col - 1]) {
                  matrix[row][col] = matrix[row - 1][col - 1] + 1;
              } else {
                  matrix[row][col] = Math.max(matrix[row - 1][col], matrix[row][col - 1]);
              }
          }
      }
  }
  
  return matrix[text1.length][text2.length];
};