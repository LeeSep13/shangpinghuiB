/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-11 10:45:53
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-11 15:50:27
 * @FilePath: \shangpinghui-bs\src\api\user.js
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
 */
import request from "@/utils/request";

export function login(data) {
  return request({
    url: "/admin/acl/index/login",
    method: "post",
    data,
  });
}

export function getInfo(token) {
  return request({
    url: "/admin/acl/index/info",
    method: "get",
    params: { token },
  });
}

export function logout() {
  return request({
    url: "/admin/acl/index/logout",
    method: "post",
  });
}
