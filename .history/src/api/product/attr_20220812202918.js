// 平台属性管理模块请求文件
import request from "@/utils/request";

// 获取一级分类数据接口
export const reqCategory1List = () =>
  request({ url: "/admin/product/getCategory1", method: "get" });
// 获取二级分类数据接口
// 获取三级分类数据接口
