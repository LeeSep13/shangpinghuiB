<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-16 21:42:30
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-18 12:30:14
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
  props: ['activitydata'],
  data() {
    return {
      mycharts: null,
    }
  },
  watch: {
    activitydata() {
      this.setprogressCharts();
    }
  },
  mounted() {
    this.setprogressCharts();
  },
  methods: {
    setprogressCharts() {
      this.mycharts = echarts.getInstanceByDom(this.$refs.charts); // 有的话就获取已有echarts实例的DOM节点
      if (this.mycharts == null) { // 如果不存在，就进行初始化。
        this.mycharts = echarts.init(this.$refs.charts);
      }
      // 配置数据
      this.mycharts.setOption({
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
            data: [],
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
    }
  }
}
</script>
<style scoped>
.charts {
  width: 100%;
  height: 100%;
}
</style>
