/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (!nums || !nums.length) return 0
  var maxLen = 1;
  var hash = nums.reduce((acc, num) => {
    acc[num] = true;
    return acc;
  }, {});
  nums.forEach(num => {
    let len = 1;
    n = num;
    if (!hash[n]) return
    while (hash[n + 1]) {
        hash[n + 1] = false;
        len++;
        n++;
    }
    n = num;
    while (hash[n - 1]) {
        hash[n - 1] = false;
        len++;
        n--;
    }
    maxLen = len > maxLen ? len : maxLen;
  });
  return maxLen;
};