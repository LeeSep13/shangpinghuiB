<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-17 17:23:01
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-17 17:46:43
 * @FilePath: \shangpinghui-bs\src\views\dashboard\Observe\Search\lineCharts\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <div>
    <div class="header">
      <span class="search-header f14">搜索用户数</span>
      <i class="el-icon-warning-outline"></i>
    </div>
    <div class="main"></div>
    <div class="footer"></div>
  </div>
</template>

<script>

export default {
  name: 'lineCharts',
  components: {},
  data() {
    return {

    }
  },
}
</script>
<style scoped>
.f14 {
  font-size: 14px;
}

.header {
  display: flex;
  align-items: center;
  color: #afafaf;
}

.search-header {
  margin-right: 10px;
}
</style>
