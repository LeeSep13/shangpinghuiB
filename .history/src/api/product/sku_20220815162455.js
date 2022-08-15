/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-11 16:52:06
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-15 16:24:55
 * @FilePath: \shangpinghui-bs\src\api\product\sku.js
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
 */
import request from "@/utils/request";

// 获取图片数据
export const reqSpuImageList = (spuId) =>
  request({ url: `/admin/product/spuImageList/${spuId}`, method: "get" });

// 获取销售属性数据
export const reqSpuSaleAttrList = (spuId) =>
  request({ url: `/admin/product/spuSaleAttrList/${spuId}`, method: "get" });
