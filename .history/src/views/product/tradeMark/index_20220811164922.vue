<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-11 16:21:47
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-11 16:49:04
 * @FilePath: \shangpinghui-bs\src\views\product\tradeMark\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <div>
    <el-button type="primary" icon="el-icon-plus" style="margin: 10px 0px">添加</el-button>
    <el-table style="width:100%" border>
      <el-table-column label="序号" width="80px" align="center"></el-table-column>
      <el-table-column label="品牌名称"></el-table-column>
      <el-table-column label="品牌LOGO"></el-table-column>
      <el-table-column label="操作"></el-table-column>
    </el-table>
    <el-pagination :total="99" :current-page="6" :page-size="3" :page-count="7" :page-sizes="[3, 5, 10]"
      layout="prev,pager,next,jumper,->,sizes,total" style="margin-top:20px;textAlign:center"></el-pagination>
  </div>
</template>

<script>
export default {
  name: "tradeMark",
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped>
</style>
