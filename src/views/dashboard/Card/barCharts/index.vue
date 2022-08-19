<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-16 21:42:30
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-18 12:25:56
 * @FilePath: \shangpinghui-bs\src\views\dashboard\Card\barCharts\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <div class="charts" ref="charts"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'barChart',
  props: ['bardata'],
  data() {
    return {
      mycharts: null,
    }
  },
  watch: {
    bardata() {
      this.setbarCharts();
    }
  },
  mounted() {
    this.setbarCharts();
  },
  methods: {
    setbarCharts() {
      this.mycharts = echarts.getInstanceByDom(this.$refs.charts); // 有的话就获取已有echarts实例的DOM节点
      if (this.mycharts == null) { // 如果不存在，就进行初始化。
        this.mycharts = echarts.init(this.$refs.charts);
      }
      // 配置数据
      this.mycharts.setOption({
        xAxis: {
          show: false,
          type: 'category',
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            type: 'bar',
            data: this.bardata,
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
        tooltip: {}
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
