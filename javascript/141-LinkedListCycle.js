/*
 * @Author: jjy
 * @Date: 2020-04-14 20:03:07
 * @LastEditors: jjy
 * @LastEditTime: 2020-04-14 20:03:32
 */

/**
* 快慢指针法
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head) return false;
  
  var slow = head;
  var fast = head.next;
  
  while (fast && fast.next) {
    if (slow === fast) return true;
    
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
};