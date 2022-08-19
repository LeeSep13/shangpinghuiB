/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-11 10:45:53
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-18 21:39:53
 * @FilePath: \shangpinghui-bs\src\utils\validate.js
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
 */
/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = /^[a-zA-Z0-9]{4,16}$/;
  return valid_map.test(value);
}
