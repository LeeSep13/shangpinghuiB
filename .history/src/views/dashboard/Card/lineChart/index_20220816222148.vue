<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-16 21:42:30
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-16 22:21:10
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
          data: [40, 23, 68, 35, 52, 42, 22, 44],
          smooth: true,
          // 拐点的样式设置
          itemStyle: {
            opacity: 0,
          },
          // 线条的样式
          lineStyle: {
            color: "purple"
          },
          // 填充颜色设置
          areaStyle: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: 'purple' // 0% 处的颜色
            }, {
              offset: 1, color: '#fff' // 100% 处的颜色
            }],
            global: false // 缺省为 false
          }
        }
      ],
      // 布局
      grid: {
        left: 20,
        right: 0,
        bottom: 10,
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
