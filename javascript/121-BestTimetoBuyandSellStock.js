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