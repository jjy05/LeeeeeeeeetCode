/**
 * 考虑第N天是否卖出。若卖出，则在前N - 1天最便宜的时候买入。
 * 若不卖出，则最优方案为前N - 1天的最优方案。
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