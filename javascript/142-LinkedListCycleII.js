/*
 * @Author: jjy
 * @Date: 2020-04-14 20:04:51
 * @LastEditors: jjy
 * @LastEditTime: 2020-04-18 22:14:50
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 /**
 * 链表非空的情况下
 * 首先判断是否有环
 * 其次判断环路长度
 * 最后判断环的入口
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  const encounterNode = hasCycle(head);

  if (!encounterNode) return null;

  var cycleLength = getCycleLength(encounterNode);

  var ahead = head;
  for (var i = 0; i < cycleLength; i++) {
    ahead = ahead.next;
  }

  while (ahead !== head) {
    ahead = ahead.next;
    head = head.next;
  }

  return ahead;
};

function hasCycle (head) {
  if (!head) return false;
  
  var slow = head;
  var fast = head.next;
  
  while (fast && fast.next) {
    if (slow === fast) return slow;
    
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
};

function getCycleLength (encounterNode) {
  var node = encounterNode.next;
  var len = 0;

  while (node !== encounterNode) {
    node = node.next;
    len++;
  }

  return len + 1;
}