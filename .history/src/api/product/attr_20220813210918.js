/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-11 16:51:57
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-13 21:09:18
 * @FilePath: \shangpinghui-bs\src\api\product\attr.js
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
 */
// 平台属性管理模块请求文件
import request from "@/utils/request";

// 获取一级分类数据接口
export const reqCategory1List = () =>
  request({ url: "/admin/product/getCategory1", method: "get" });
// 获取二级分类数据接口
export const reqCategory2List = (category1Id) =>
  request({ url: `/admin/product/getCategory2/${category1Id}`, method: "get" });
// 获取三级分类数据接口
export const reqCategory3List = (category2Id) =>
  request({ url: `/admin/product/getCategory3/${category2Id}`, method: "get" });
// 获取平台属性接口
export const reqAttrList = (category1Id, category2Id, category3Id) =>
  request({
    url: `/admin/product/attrInfoList/${category1Id}/${category2Id}/${category3Id}`,
    method: "get",
  });
// 添加属性与属性值的接口
export const reqAddOrUpdateAttr = (data) =>
  request({ url: "/admin/product/saveAttrInfo", method: "post", data });

// 删除属性的接口
export const reqDeleteAttr = (id) =>
  request({ url: `/admin/product/deleteAttr/${attrId}`, method: "delete" });
