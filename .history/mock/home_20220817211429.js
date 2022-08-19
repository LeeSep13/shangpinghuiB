/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-17 21:12:15
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-17 21:14:29
 * @FilePath: \shangpinghui-bs\mock\home.js
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
 */
const data = require("./data.json");
module.exports = [
  {
    url: "/home/list",
    type: "get",
    response: (config) => {
      const items = data.items;
      return {
        code: 20000,
        data,
      };
    },
  },
];
