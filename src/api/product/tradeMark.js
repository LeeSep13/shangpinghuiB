/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-11 16:51:45
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-11 22:41:48
 * @FilePath: \shangpinghui-bs\src\api\product\tradeMark.js
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
 */
// 这个模块主要获取品牌管理的数据的模块
import request from "@/utils/request";

// 获取品牌列表接口
export const reqTradeMarkList = (page, limit) =>
  request({
    url: `/admin/product/baseTrademark/${page}/${limit}`,
    method: "get",
  });

// 添加品牌
export const reqAddOrUpdateTradeMark = (tradeMark) => {
  // 带给服务器数据携带ID---修改
  if (tradeMark.id) {
    return request({
      url: "/admin/product/baseTrademark/update",
      method: "put",
      data: tradeMark,
    });
  } else {
    // 新增品牌
    return request({
      url: "/admin/product/baseTrademark/save",
      method: "post",
      data: tradeMark,
    });
  }
};
