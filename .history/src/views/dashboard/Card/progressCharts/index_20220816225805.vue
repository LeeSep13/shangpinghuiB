<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-16 21:42:30
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-16 22:57:13
 * @FilePath: \shangpinghui-bs\src\views\dashboard\Card\progressCharts\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <div class="charts" ref="charts"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'lineChart',
  mounted() {
    // 初始化echarts实例
    let lineCharts = echarts.init(this.$refs.charts);
    // 配置数据
    lineCharts.setOption({
      xAxis: {
        show: false,
        // 最小值与最大值的设置
        min: 0,
        max: 100,
      },
      yAxis: {
        show: false,
        type: 'category',
      },
      series: [
        {
          type: 'bar',
          data: [78],
          color: '#536ec4'
        }
      ],
      // 布局
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 10,
      },
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
