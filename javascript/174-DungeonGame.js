/*
 * @Author: jjy
 * @Date: 2020-03-08 10:11:03
 * @LastEditors: jjy
 * @LastEditTime: 2020-03-08 10:51:04
 */

/**
 * 动态规划
 * 从公主位置起步
 * 计算从每个位置披荆斩棘到终点时，所需补血量(即所需携带初值)
 * 若从该位置到终点 HP 所需补血量为正，则置为 1
 */

/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
  if (!dungeon || !dungeon.length) return null;
  if (dungeon && dungeon.length && !dungeon[0].length) return null;

  var rows = dungeon.length, cols = dungeon[0].length;
  var suppliment = [];

  for (var r = 0; r < rows; r ++) {
    suppliment[r] = Array(cols).fill(0);
  }

  for (var row = rows - 1; row >= 0; row --) {
    for (var col = cols - 1; col >= 0; col --) {
      var bottom = right = (col === cols - 1 && row === rows - 1 ? 1 : Infinity);
      if (col < cols - 1) {
        right = suppliment[row][col + 1];
      }
      if (row < rows - 1) {
        bottom = suppliment[row + 1][col];
      }

      suppliment[row][col] = Math.max(Math.min(bottom, right) - dungeon[row][col], 1);
    }
  }

  return (suppliment[0][0]);
};