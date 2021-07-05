/*
 * @Author: JinsonLiang
 * @Date: 2021-07-05 11:41:26
 * @LastEditors: JinsonLiang
 * @LastEditTime: 2021-07-05 14:18:23
 * @Description: file content
 * @FilePath: \vite-test-0705\src\mock\index.ts
 */

// 使用 Mock
var Mock = require("mockjs");
var data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  "list|1-10": [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      "id|+1": 1,
    },
  ],
});
// 输出结果
console.log(JSON.stringify(data, null, 4));
