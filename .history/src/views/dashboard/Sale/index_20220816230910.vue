<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-16 23:04:34
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-16 23:08:13
 * @FilePath: \shangpinghui-bs\src\views\dashboard\Sale\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <el-card class="box-card" style="margin:10px 0px">
    <div slot="header" class="clearfix">
      <!-- v-model="activeName" @tab-click="handleClick" -->
      <el-tabs>
        <el-tab-pane label="销售额" name="first"></el-tab-pane>
        <el-tab-pane label="访问量" name="second"></el-tab-pane>
      </el-tabs>
    </div>
  </el-card>
</template>

<script>

export default {
  name: 'Sale',
  components: {},
  data() {
    return {

    }
  },
}
</script>
<style scoped>
</style>
