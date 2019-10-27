/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
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