<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-17 17:11:20
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-17 17:23:48
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
    </div>
  </el-card>
</template>

<script>
import lineCharts from './lineCharts'
export default {
  name: 'Search',
  components: {},
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
