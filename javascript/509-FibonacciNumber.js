/*
 * @Author: jjy
 * @Date: 2020-02-24 20:11:56
 * @LastEditors: jjy
 * @LastEditTime: 2020-02-24 20:22:18
 */

/**
 * 递归解法
 */

 /**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  return N <= 1 ? N : fib(N -1) + fib(N - 2);
};

/**
 * 循环解法
 */

var fibByLoop = function(N) {
  if (N < 2) return N;
  
  var firstNum = 0, secNum = 1;
  for (var i = 2; i <= N; i++) {
      var temp = secNum;
      secNum += firstNum;
      firstNum = temp;
  }
  
  return secNum;
}
 