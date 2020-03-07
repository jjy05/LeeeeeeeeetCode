/*
 * @Author: jjy
 * @Date: 2020-02-24 20:46:01
 * @LastEditors: jjy
 * @LastEditTime: 2020-02-24 20:46:37
 */

 /**
 * 同斐波那契问题
 */

 /**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n < 3) return n || 1;
  
  var firstNum = 1, secNum = 2;
  for (var i = 3; i <= n; i++) {
      var temp = secNum;
      secNum += firstNum;
      firstNum = temp;
  }
  
  return secNum;
};