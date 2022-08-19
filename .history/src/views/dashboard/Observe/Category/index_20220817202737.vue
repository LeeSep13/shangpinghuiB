<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-17 17:11:29
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-17 20:27:20
 * @FilePath: \shangpinghui-bs\src\views\dashboard\Observe\Category\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <el-card>
    <div slot="header">
      <div class="category-header">
        <span>销售额类别占比</span>
        <el-radio-group v-model="value">
          <el-radio-button label="全部渠道"></el-radio-button>
          <el-radio-button label="线上"></el-radio-button>
          <el-radio-button label="门店"></el-radio-button>
        </el-radio-group>
      </div>
    </div>
    <div>
      <div class="charts" ref="charts"></div>
    </div>
  </el-card>
</template>

<script>

export default {
  name: 'Category',
  components: {},
  data() {
    return {
      value: '全部渠道',
    }
  },
}
</script>
<style scoped>
.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.charts {
  width: 100%;
  height: 300px;
}
</style>
