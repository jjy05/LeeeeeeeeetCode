/*
 * @Author: jjy
 * @Date: 2019-10-27 21:57:58
 * @LastEditors: jjy
 * @LastEditTime: 2019-12-27 11:05:10
 */

/**
 * 中序遍历二叉树，按序存储到数组
 * 判断数组是否递增
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isValidBST = function(root) {
    var ary = traversal(root, []);
    
    let len = ary.length;
    if(len <= 1) return true;
    
    for(let i = 1; i < len; i++) {
        if(ary[i] <= ary[i - 1]) return false;
    }
    
    return true;
    
};

function traversal(node, ary) {
    if(!node) return ary;
    
    if(node.left) traversal(node.left, ary);
    ary.push(node.val);
    if(node.right) traversal(node.right, ary);
    
    return ary;
}