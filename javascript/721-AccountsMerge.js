/*
 * @Author: jjy
 * @Date: 2020-04-12 00:55:18
 * @LastEditors: jjy
 * @LastEditTime: 2020-04-12 00:59:49
 */
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
  var hashTable = {};
  accounts.forEach(account => {
    let name = account[0];

    if (!hashTable[name]) {
      hashTable[name] = [];
      let emails = {};
      for (let i = 1; i < account.length; i++) {
        emails[account[i]] = 1;
      }
      hashTable[name] = emails;
    } else {
      
    }
  });
};