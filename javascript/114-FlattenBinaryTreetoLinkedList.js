/*
 * @Author: jjy
 * @Date: 2020-04-11 11:05:48
 * @LastEditors: jjy
 * @LastEditTime: 2020-04-11 11:05:48
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (!root) return root;
  
  traversal(root);
};

function traversal (node) {
  var left = node.left;
  var right = node.right;

  node.left = node.right = null;
  
  if (left) {
    node.right = left;
    node = traversal(left);
  }
  if (right) {
    node.right = right;
    node = traversal(node.right);
  }
  
  return node;
}