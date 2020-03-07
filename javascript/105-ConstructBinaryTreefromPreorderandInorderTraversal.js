/*
 * @Author: jjy
 * @Date: 2020-02-23 15:50:11
 * @LastEditors: jjy
 * @LastEditTime: 2020-02-23 15:57:58
 */
var buildTree = function(preorder, inorder) {
  if (!preorder.length) return null;

  var constructTree = function(aryStart, nodeStart, nodeEnd) {
    var rootValue = preorder[aryStart];
    var root = new TreeNode(rootValue);

    for (var i = nodeStart; i <= nodeEnd; i++) {
      if (inorder[i] === rootValue) {
        var leftCount = i - nodeStart;
        var rightCount = nodeEnd - i;
        if (leftCount) {
          root.left = constructTree(aryStart + 1, i - leftCount, i - 1);
        }
        if (rightCount) {
          root.right = constructTree(aryStart + leftCount + 1, i + 1, i + rightCount);
        }
      }
    }
    return root;
  }
  return constructTree(0, 0 , inorder.length - 1);
};