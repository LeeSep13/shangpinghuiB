<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-16 21:42:30
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-16 21:54:15
 * @FilePath: \shangpinghui-bs\src\views\dashboard\Card\lineChart\index.vue
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
        type: 'category',
      },
      yAxis: {
        show: false,
      },
      series: [
        {
          type: 'line',
          data: [10, 7, 33, 12, 88, 9],
          // 拐点的样式设置
          itemStyle: {
            opacity: 0,
          }
        }
      ],
      // 布局
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      }
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
