<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-17 17:11:20
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-17 17:25:10
 * @FilePath: \shangpinghui-bs\src\views\dashboard\Observe\Search\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <el-card>
    <div slot="header">
      <div class="search-header">
        <span>线上热门搜索</span>
        <i class="el-icon-more"></i>
      </div>
      <div>
        <el-row :gutter="10">
          <el-col :span="12">
            <lineCharts />
          </el-col>
          <el-col :span="12">
            <lineCharts />
          </el-col>
        </el-row>
      </div>
    </div>
  </el-card>
</template>

<script>
import lineCharts from './lineCharts'
export default {
  name: 'Search',
  components: { lineCharts },
  data() {
    return {

    }
  },
}
</script>
<style scoped>
.search-header {
  display: flex;
  justify-content: space-between;
}
</style>
