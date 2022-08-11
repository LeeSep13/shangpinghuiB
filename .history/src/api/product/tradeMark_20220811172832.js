/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-11 16:51:45
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-11 16:58:45
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
