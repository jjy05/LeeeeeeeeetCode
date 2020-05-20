/*
 * @Author: jjy
 * @Date: 2020-04-23 17:48:29
 * @LastEditors: jjy
 * @LastEditTime: 2020-04-24 07:35:14
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  var ary1 = [], ary2 = [];
  traversal(s, ary1);
  traversal(s, ary2);

  console.log(ary1, ary2);
};

function traversal (node, ary) {
  if (!node) {
    ary.puah(node);
    return
  }

  var left = traversal(node.left);
  var right = traversal(node.right);

  ary.push(node || node.val);
}