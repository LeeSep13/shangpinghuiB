/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-11 16:52:02
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-14 10:18:43
 * @FilePath: \shangpinghui-bs\src\api\product\spu.js
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
 */
// /admin/product/{page}/{limit}

import request from "@/utils/request";

// 获取SPU列表数据的接口
export const reqSpuList = (page, limit, category3Id) =>
  request({
    url: `/admin/product/${page}/${limit}`,
    method: "get",
    params: { category3Id },
  });
