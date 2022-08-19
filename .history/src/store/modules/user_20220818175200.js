//引入登录|退出登录|获取用户信息的接口函数
import { login, logout, getInfo } from "@/api/user";
// 获取token|设置token|删除token的函数
import { getToken, setToken, removeToken } from "@/utils/auth";
//路由模块当中重置路由的方法
import { resetRouter } from "@/router";
//箭头函数
const getDefaultState = () => {
  return {
    //获取token
    token: getToken(),
    //存储用户名
    name: "",
    //存储用户头像
    avatar: "",
  };
};

const state = getDefaultState();

//唯一修改state的地方
const mutations = {
  //重置state
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState());
  },
  //存储token
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  //存储用户信息
  SET_USERINFO: (state, userInfo) => {
    //用户名
    state.name = userInfo.name;
    //用户头像
    state.avatar = userInfo.avatar;
    //菜单权限标记
    state.routes = userInfo.routes;
    //按钮权限标记
    state.buttons = userInfo.buttons;
    //角色
    state.roles = userInfo.roles;
  },
};

const actions = {
  // 处理登录业务
  async login({ commit }, userInfo) {
    const { username, password } = userInfo;
    let result = await login({ username: username.trim(), password: password });
    if (result.code == 20000) {
      commit("SET_TOKEN", result.data.token);
      setToken(result.data.token);
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },

  //获取用户信息
  async getInfo({ commit, state }) {
    //获取用户信息:返回数据包含：用户名name、用户头像avatar、routes[返回的标志:不同的用户应该展示哪些菜单的标记]、roles（用户角色信息）、buttons【按钮的信息：按钮权限用的标记】
    let result = await getInfo(state.token);
    if (result.code == 20000) {
      //vuex存储用户全部的信息
      commit("SET_USERINFO", data);
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },

  // user logout
  async logout({ commit, state }) {
    let result = await logout(state.token);
    if (result.code == 20000) {
      removeToken(); // must remove  token  first
      resetRouter();
      commit("RESET_STATE");
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },

  // remove token
  resetToken({ commit }) {
    return new Promise((resolve) => {
      removeToken(); // must remove  token  first
      commit("RESET_STATE");
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
