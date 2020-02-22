/*
 * @Author: jjy
 * @Date: 2020-02-22 17:48:58
 * @LastEditors: jjy
 * @LastEditTime: 2020-02-22 17:50:56
 */

/**
 * 从矩阵右上角开始检索
 * 若当前元素为负数，则将该元素及其下方元素全部统计
 * 向左继续检索
 * 若当前元素非负，则向下继续检索
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
 var countNegatives = function(grid) {
    var cols = grid[0].length, rows = grid.length;
    var startX = cols - 1, startY = 0;
    var endX = 0, endY = rows - 1;
    var count = 0;

    while (startX >= endX && startY <= endY) {
      if (grid[startY][startX] < 0) {
        count += rows - startY;
        startX--;
      } else {
        startY++;
      }
    }
    return count;
};