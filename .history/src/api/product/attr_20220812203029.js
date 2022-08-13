/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-11 16:51:57
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-12 20:30:29
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
export const reqCategory2List = (category1Id) => request({url:`/admin/product/getCategory2/${category1Id}`},method:'get')
// 获取三级分类数据接口
