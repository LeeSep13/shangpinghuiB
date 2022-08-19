<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-16 21:42:30
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-18 12:09:35
 * @FilePath: \shangpinghui-bs\src\views\dashboard\Card\lineChart\index.vue
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
  props: ['linedata'],
  data() {
    return {
      mycharts: null,
    }
  },
  computed: {
    ...mapState({
      listState: state => state.home.list
    })
  },
  watch: {
    linedata() {
      this.setlineCharts();
    }
  },
  mounted() {
    this.setlineCharts();
  },
  methods: {
    setlineCharts() {
      this.mycharts = echarts.getInstanceByDom(this.$refs.charts); // 有的话就获取已有echarts实例的DOM节点
      if (this.mycharts == null) { // 如果不存在，就进行初始化。
        this.mycharts = echarts.init(this.$refs.charts);
      }
      // 配置数据
      this.mycharts.setOption({
        tooltip: {},
        xAxis: {
          show: false,
          type: 'category',
          boundaryGap: false,
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            type: 'line',
            data: this.linedata,
            smooth: true,
            // 拐点的样式设置
            itemStyle: {
              opacity: 0,
            },
            // 线条的样式
            lineStyle: {
              color: "#9c75dd"
            },
            // 填充颜色设置
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#cd9cf2'
                },
                {
                  offset: 0.75,
                  color: '#f6f3ff'
                },
                {
                  offset: 1,
                  color: '#fff'
                }
              ])
            }
          }
        ],
        // 布局
        grid: {
          left: 0,
          top: 0,
          right: 0,
          bottom: 10,
        }
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
