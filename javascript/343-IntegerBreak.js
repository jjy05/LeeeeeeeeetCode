/*
 * @Author: jjy
 * @Date: 2020-03-10 20:28:07
 * @LastEditors: jjy
 * @LastEditTime: 2020-03-10 20:43:47
 */

/**
 * 动态规划解法
 */

/**
 * @param {number} n
 * @return {number}
 */
var integerBreakByDP = function(n) {
  if (n < 2) return 0;
  if (n === 2) return 1;
  if (n === 3) return 2;
  
  var products = [0, 1, 2, 3];
  
  for (var i = 4; i <= n; i ++) {
      var max = 0;
      for (var j = 1; j <= n / 2; j ++) {
          var product = j * products[i - j];
          if (product > max) {
              max = product;
          }
      }
      
      products[i] = max;
  }
  return products[n];
};


/**
 * 贪心解法
 */

var integerBreak = function(n) {
  if (n < 2) return 0;
  if (n === 2) return 1;
  if (n === 3) return 2;
  if (n === 4) return 4;
  
  var countOf3Len = parseInt(n / 3);
  var rest = n - countOf3Len * 3;
  
  if (rest === 1) {
      countOf3Len -=1;
      rest = 4;
  }
  
  return Math.pow(3, countOf3Len) * (rest || 1);
};