import request from "@/utils/request";

// 获取图片数据
export const reqSpuImageList = (spuId) =>
  request({ url: `/admin/product/spuImageList/${spuId}`, method: "get" });
