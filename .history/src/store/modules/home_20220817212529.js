/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-17 21:21:48
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-17 21:25:29
 * @FilePath: \shangpinghui-bs\src\store\modules\home.js
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
 */
import mockRequest from "@/utils/mockRequest";
const state = {};
const mutations = {};
const actions = {
  // 发请求获取首页的mock数据
  async getData({ commit }) {
    let result = await mockRequest.get("/home/list");
  },
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
