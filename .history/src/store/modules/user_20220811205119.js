import { login, logout, getInfo } from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth";
import { resetRouter } from "@/router";

const getDefaultState = () => {
  return {
    token: getToken(),
    name: "",
    avatar: "",
  };
};

const state = getDefaultState();

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState());
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
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

  // // get user info
  // async getInfo({ commit, state }) {
  //   let result = await getInfo(state.token);
  //   if (result.code == 20000) {
  //     commit("SET_NAME", result.data.name);
  //     commit("SET_AVATAR", result.data.avatar);
  //     return "ok";
  //   } else {
  //     return Promise.reject(new Error("faile"));
  //   }
  // },

  // // user logout
  // async logout({ commit, state }) {
  //   let result = await logout(state.token);
  //   if (result.code == 20000) {
  //     removeToken(); // must remove  token  first
  //     resetRouter();
  //     commit("RESET_STATE");
  //     return "ok";
  //   } else {
  //     return Promise.reject(new Error("faile"));
  //   }
  // },

  //获取用户信息
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token)
        .then((response) => {
          //获取用户信息:返回数据包含：用户名name、用户头像avatar、routes[返回的标志:不同的用户应该展示哪些菜单的标记]、roles（用户角色信息）、buttons【按钮的信息：按钮权限用的标记】
          const { data } = response;
          //vuex存储用户全部的信息
          commit("SET_USERINFO", data);
          commit(
            "SET_RESULTASYNCROUTES",
            computedAsyncRoutes(cloneDeep(asyncRoutes), data.routes)
          );
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token)
        .then(() => {
          removeToken(); // must remove  token  first
          resetRouter();
          commit("RESET_STATE");
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
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