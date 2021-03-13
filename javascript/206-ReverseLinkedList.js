/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/**
 * 循环法
 * 使用3个指针
 */
 var reverseListByLoop = function(head) {
  if (!head || !head.next) return head
  var body = head.next
  var tail = body.next
  var i = 0
  while (body) {
    if (!i) head.next = null
    body.next = head
    head = body
    body = tail
    if (tail) tail = tail.next
    i++
  }

  return head
};

/**
 * 递归法
 * 从后向前翻转
 */
var reverseListByRecursion = function(head) {
  if (!head || !head.next) return head
  const h = reverseListByRecursion(head.next)
  head.next.next = head
  head.next = null

  return h
};