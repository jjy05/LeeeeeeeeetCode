/*
 * @Author: jjy
 * @Date: 2020-03-07 23:14:41
 * @LastEditors: jjy
 * @LastEditTime: 2020-03-07 23:14:58
 */

/**
 * 回溯
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
  if (!grid.length) return 0;
  if (grid.length && !grid[0].length) return 0;

  var visited = [];
  var rows = grid.length, cols = grid[0].length;
  var startRow = -1, startCol = -1;
  var paths = 0;
  var total = 2;

  for (var i = 0; i < rows; i++) {
    visited[i] = Array(cols).fill(0);
  }

  // 寻找起点
  for (var row = 0; row < rows; row ++) {
    for (var col = 0; col < cols; col ++) {
      var item = grid[row][col];

      // 设置起点
      if (item === 1) {
        startRow = row, startCol = col;
      }
      // 统计无障碍方块数量
      if (item === 0) {
        total++;
      }
    }
  }

  if (startRow < 0 || startCol < 0) return paths;

  doWalk(startRow, startCol, rows, cols, visited, grid, 0, total);

  function doWalk (r, c, rows, cols, visited, grid, steps, totalSteps) {
  // 判断下标合法性
  if (r < 0 || r >= rows) return
  if (c < 0 || c >= cols) return

  // 判断是否已访问
  if (visited[r][c]) return

  // 判断当前元素
  var item = grid[r][c];
  if (item === -1) return

  steps++;

  if (item === 2 && steps === totalSteps) paths++;

  // 搜索四周
  visited[r][c] = 1;
  var top = doWalk(r - 1, c, rows, cols, visited, grid, steps, totalSteps);
  var bottom = doWalk(r + 1, c, rows, cols, visited, grid, steps, totalSteps);
  var left = doWalk(r, c - 1, rows, cols, visited, grid, steps, totalSteps);
  var right = doWalk(r, c + 1, rows, cols, visited, grid,steps, totalSteps);
  
  visited[r][c] = 0;

  return
}
  return paths;
};