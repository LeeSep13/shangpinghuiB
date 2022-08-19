/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-11 10:45:53
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-19 10:07:57
 * @FilePath: \shangpinghui-bs\src\permission.js
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
 */
import router from "./router";
import store from "./store";
import { Message } from "element-ui";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { getToken } from "@/utils/auth"; // get token from cookie
import getPageTitle from "@/utils/get-page-title";

NProgress.configure({ showSpinner: false }); // NProgress Configuration
// 记录路由
// let hasRoles = true;
// 白名单(不需要登录就可以访问的名单)
const whiteList = ["/login"]; // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start();

  // set page title
  document.title = getPageTitle(to.meta.title);

  // determine whether the user has logged in
  const hasToken = getToken();

  if (hasToken) {
    if (to.path === "/login") {
      // if is logged in, redirect to the home page
      next({ path: "/" });
      NProgress.done();
    } else {
      // const hasGetUserInfo = store.getters.name
      const hasRoles = store.getters.roles && store.getters.roles.length > 0;
      if (hasRoles) {
        //hasGetUserInfo
        next();
      } else {
        try {
          // get user info
          await store.dispatch("user/getInfo");
          let routes = store.state.user.resultAllRoutes;
          //重新添加动态路由
          router.selfaddRoutes(routes);
          next({ ...to, replace: true });
          next();
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch("user/resetToken");
          Message.error(error || "Has Error");
          next(`/login?redirect=${to.path}`);
          NProgress.done();
        }
      }
      // //调用获取信息的action，重新获取动态路由
      // await store.dispatch("user/getInfo");
      // //拿到动态添加的路由
      // let routes = store.state.user.resultAllRoutes;
      // if (hasRoles) {
      //   //重新添加动态路由
      //   router.selfaddRoutes(routes);
      //   hasRoles = false;
      //   next({ ...to, replace: true });
      // } else {
      //   next();
      // }
    }
  } else {
    /* has no token*/
    //如果没有登录，如果要去登录页，直接放行
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next();
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
