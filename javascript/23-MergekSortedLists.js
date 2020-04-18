/*
 * @Author: jjy
 * @Date: 2020-04-12 00:19:11
 * @LastEditors: jjy
 * @LastEditTime: 2020-04-12 00:45:46
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (!lists || !lists.length) return null;

    var min;
    var minIndex = 0;

    for (var i = 0; i < lists.length; i++) {
      let n = lists[i];

      if (n) {
        if (!min || n.val < min.val) {
          min = n;
          minIndex = i;
        }
      }
    }

    if (lists[minIndex]) {
      lists[minIndex] = lists[minIndex].next;
    } else {
      return null;
    }

    min.next = mergeKLists(lists);

    return min;
};