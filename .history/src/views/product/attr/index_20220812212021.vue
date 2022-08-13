<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-11 16:21:47
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-12 21:20:21
 * @FilePath: \shangpinghui-bs\src\views\product\attr\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <div>
    <el-card style="margin:20px 0px">
      <CategorySelect @getCategoryId='getCategoryId' />
    </el-card>
    <el-card></el-card>
  </div>
</template>

<script>
export default {
  name: "attr",
  components: {},
  data() {
    return {};
  },
  methods: {
    // 自定义事件的回调
    getCategoryId() {

    }
  }
};
</script>
<style scoped>
</style>
