/*
 * @Author: jjy
 * @Date: 2020-03-07 22:43:25
 * @LastEditors: jjy
 * @LastEditTime: 2020-03-07 22:43:56
 */

/**
 * 回溯
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  if (!board.length) return false;
  if (board.length && !board[0].length) return false;
  var matrix = [];
  var rows = board.length;
  var cols = board[0].length;
  var charIdx = 0;

  for (var i = 0; i < rows; i++) {
    matrix[i] = Array(cols).fill(0);
  }
  var isExist = false;
  for (var row = 0; row < rows; row ++) {
    for (var col = 0; col < cols; col ++) {
      isExist = doSearch(row, col, charIdx, rows, cols, word, matrix, board);

      if (isExist) return isExist;
    }
  }

  return isExist;
};

function doSearch (r, c, charIndex, rows, cols, word, matrix, board) {
  var wordLen = word.length;
  // 判断下标合法性
  if (r < 0 || r >= rows) return false
  if (c < 0 || c >= cols) return false

  // 判断是否已访问
  if (matrix[r][c]) return false;

  // 判断当前元素
  var item = board[r][c];
  var char = word[charIndex];
  if (item !== char) return false;

  if (wordLen === charIndex + 1) return true;
  // 搜索四周
  var nextCharIndex = charIndex + 1;
  matrix[r][c] = 1;
  var top = doSearch(r - 1, c, nextCharIndex, rows, cols, word, matrix, board);
  var bottom = doSearch(r + 1, c, nextCharIndex, rows, cols, word, matrix, board);
  var left = doSearch(r, c - 1, nextCharIndex, rows, cols, word, matrix, board);
  var right = doSearch(r, c + 1, nextCharIndex, rows, cols, word, matrix, board);
  var res = top || bottom || left || right;
  
  if (!res) {
    matrix[r][c] = 0;
  }

  return res;
}