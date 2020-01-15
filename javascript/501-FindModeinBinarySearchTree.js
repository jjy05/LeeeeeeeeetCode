/*
 * @Author: jjy
 * @Date: 2019-10-27 22:23:24
 * @LastEditors  : jjy
 * @LastEditTime : 2020-01-13 20:54:27
 */

/**
 * 遍历计算
 */

/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
  var res = 0;
  while(head) {
    res = res * 2 + head.val;
    head = head.next;
  }
  return res;
};