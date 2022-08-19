<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-16 21:42:30
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-16 21:50:07
 * @FilePath: \shangpinghui-bs\src\views\dashboard\Card\lineChart\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <div class="charts" ref="charts"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'lineChart',
  mounted() {
    // 初始化echarts实例
    let lineCharts = echarts.init(this.$refs.charts);
    // 配置数据
    lineCharts.setOption({
      xAxis: {},
      yAxis: {},
    })
  }
}
</script>
<style scoped>
.charts {
  width: 100%;
  height: 100%;
}
</style>
