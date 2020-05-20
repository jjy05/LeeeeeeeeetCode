/*
 * @Author: jjy
 * @Date: 2020-05-20 20:42:32
 * @LastEditors: jjy
 * @LastEditTime: 2020-05-20 20:43:10
 */ 

/**
  * 分而治之
  */
/**
  * @param {string[]} strs
  * @return {string}
  */
var longestCommonPrefix = function(strs) {
  if (!strs || !strs.length) return '';

  return longest(strs, 0, strs.length - 1);
};

function longest (strs, start, end) {
  if (start === end) return strs[start];

  var mid = Math.floor((start + end) / 2);

  var leftCommonPrefix = longest(strs, start, mid);
  var rightCommonPrefix = longest(strs, mid + 1, end);

  return commonPrefix(leftCommonPrefix, rightCommonPrefix);
}

function commonPrefix (str1, str2) {
  var len = Math.min(str1.length, str2.length);
  for (var i = 0; i < len; i++) {
    if (str1[i] !== str2[i]) {
      return str1.substring(0, i);
    }
  }

  return str1.substring(0, len);
}