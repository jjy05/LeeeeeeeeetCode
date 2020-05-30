/*
 * @Author: jjy
 * @Date: 2020-05-30 17:29:56
 * @LastEditors: jjy
 * @LastEditTime: 2020-05-30 17:30:20
 */ 

/**
 * 动态规划解法
 */


/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
  var ary = Array(piles.length);
  for (var i = 0; i < ary.length; i++) {
    ary[i] = Array(piles.length);
  }

  for (var col = 0; col < piles.length; col++) {
    for (var i = 0, j = col; i < piles.length - col; i++, j++) {
      if (i === j) {
        ary[i][j] =  piles[i];
      } else {
        ary[i][j] = Math.max(piles[i] - (ary[i + 1][j] || 0), piles[j] - (ary[i][ j - 1] || 0));
      }
    }
  }

  return ary[0][piles.length - 1];
};