<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-16 21:42:30
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-17 22:40:45
 * @FilePath: \shangpinghui-bs\src\views\dashboard\Card\progressCharts\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <div class="charts" ref="charts"></div>
</template>

<script>
import * as echarts from 'echarts'
import { mapState } from 'vuex'
export default {
  name: 'lineChart',
  mounted() {
    // 初始化echarts实例
    let lineCharts = echarts.init(this.$refs.charts);
    // 配置数据
    lineCharts.setOption({
      tooltip: {},
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
          data: [this.listState.activityRate],
          color: '#9bcc35',
          // 柱状图的宽度
          barWidth: 10,
          // 是否显示柱条的背景色
          showBackground: true,
          // 设置背景颜色
          backgroundStyle: {
            color: '#eee',
          },
          // 文本
          label: {
            show: true,
            // 改变文本的内容
            formatter: '|',
            // 文本位置调式
            position: 'right'
          }
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
  },
  computed: {
    ...mapState({
      listState: state => state.home.list
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
