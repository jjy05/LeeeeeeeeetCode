/*
 * @Author: jjy
 * @Date: 2020-01-15 22:23:19
 * @LastEditors: jjy
 * @LastEditTime: 2020-01-15 22:24:14
 */
/**
 * 遍历二叉树并将小于等于 L 且大于等于 R 的数值相加
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
  var res = root.val >= L && root.val <= R ? root.val : 0;
  
  if (root.left) {
      res += rangeSumBST(root.left, L, R);
  }
  if (root.right) {
      res += rangeSumBST(root.right, L, R);
  }
  
  return res;
};