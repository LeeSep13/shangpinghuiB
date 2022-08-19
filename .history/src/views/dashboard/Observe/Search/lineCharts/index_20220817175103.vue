<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-17 17:23:01
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-17 17:51:03
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
    <div class="main">
      <span>12321</span>
      <span>17.1</span>
      <i class="el-icon-caret-top" style="color:red"></i>
    </div>
    <div class="footer">
      <i class="el-icon-caret-bottom" style="color:#48f550;"></i>
    </div>
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
  color: #a9abae;
}

.search-header {
  margin-right: 10px;
}
</style>
