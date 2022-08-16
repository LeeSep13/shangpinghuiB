/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-11 16:52:06
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-16 10:33:42
 * @FilePath: \shangpinghui-bs\src\api\product\sku.js
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
 */
import request from "@/utils/request";

// sku列表
export const reqSkuList = (page, limit) =>
  request({ url: `/admin/product/list/${page}/${limit}`, method: "get" });

// 上架
export const reqSale = (skuId) =>
  request({ url: `/admin/product/onSale/${skuId}`, method: "get" });
// 下架
export const reqCancel = (skuId) =>
  request({ url: `/admin/product/cancelSale/${skuId}`, method: "get" });

// 获取SKU详情
export const reqSkuById = (skuId) =>
  request({ url: `/admin/product/getSkuById/${skuId}`, method: "get" });
