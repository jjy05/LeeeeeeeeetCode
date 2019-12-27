/*
 * @Author: jjy
 * @Date: 2019-10-27 21:55:46
 * @LastEditors  : jjy
 * @LastEditTime : 2019-12-27 11:03:28
 */

/**
 * 考虑第N天是否卖出。若卖出，则在前 N - 1 天最便宜的时候买入。
 * 若不卖出，则最优方案为前 N - 1 天的最优方案。
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var min = prices[0];
  var maximumProfit = 0;
  
  for(let i = 1; i < prices.length; i++) {
    let profit = prices[i] - min;
    
    maximumProfit = profit > maximumProfit ? profit : maximumProfit;
    min = prices[i] < min ? prices[i] : min;
  }
  
  return maximumProfit;
};