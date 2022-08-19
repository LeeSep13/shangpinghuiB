<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-17 17:11:29
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-17 20:23:32
 * @FilePath: \shangpinghui-bs\src\views\dashboard\Observe\Category\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <el-card>
    <div slot="header">
      <div class="category-header">
        <span>销售额类别占比</span>
        <el-radio-group v-model="radio1">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>
    </div>
  </el-card>
</template>

<script>

export default {
  name: 'Category',
  components: {},
  data() {
    return {

    }
  },
}
</script>
<style scoped>
</style>
