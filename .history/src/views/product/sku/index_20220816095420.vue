<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-11 16:21:47
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-16 09:54:20
 * @FilePath: \shangpinghui-bs\src\views\product\sku\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <div>
    <!-- 表格 -->
    <el-table style="width:100%" border>
      <el-table-column type="index" label="序号" width="80" align="center"></el-table-column>
      <el-table-column prop="prop" label="名称"></el-table-column>
      <el-table-column prop="prop" label="描述"></el-table-column>
      <el-table-column prop="prop" label="默认图片" width="110"></el-table-column>
      <el-table-column prop="prop" label="重量" width="80"></el-table-column>
      <el-table-column prop="prop" label="价格" width="80"></el-table-column>
      <el-table-column prop="prop" label="操作"></el-table-column>
    </el-table>
    <!-- 分页 @size-change="handleSizeChange" @current-change="getSpuList"-->
    <el-pagination :total="total" :current-page="page" :page-sizes="[3, 5, 10]" :page-size="limit"
      layout="prev,pager,next,jumper,->,sizes,total" style="text-align:center"></el-pagination>
  </div>
</template>

<script>
export default {
  name: "sku",
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped>
</style>
