<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-17 17:23:01
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-17 17:59:48
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
      <span class="total">12321</span>
      <span class="rate">17.1</span>
      <i class="el-icon-caret-top" style="color:red"></i>
      <i class="el-icon-caret-bottom" style="color:#48f550;"></i>
    </div>
    <div class="footer">
      <div class="charts" ref="charts"> </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
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

.main {
  margin: 20px 0px;
}

.total {
  margin-right: 30px;
  font-size: 20px;
  font-weight: 600;
}

.rate {
  font-size: 14px;
  color: #a9abae;
}

.charts {
  width: 100%;
  height: 50px;
}
</style>
