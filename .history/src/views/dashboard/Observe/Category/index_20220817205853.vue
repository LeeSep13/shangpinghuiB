<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-17 17:11:29
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-17 20:58:19
 * @FilePath: \shangpinghui-bs\src\views\dashboard\Observe\Category\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <el-card>
    <div slot="header">
      <div class="category-header">
        <span>销售额类别占比</span>
        <el-radio-group v-model="value">
          <el-radio-button label="全部渠道"></el-radio-button>
          <el-radio-button label="线上"></el-radio-button>
          <el-radio-button label="门店"></el-radio-button>
        </el-radio-group>
      </div>
    </div>
    <div>
      <div class="charts" ref="charts"></div>
    </div>
  </el-card>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'Category',
  components: {},
  data() {
    return {
      value: '全部渠道',
      mycharts: null,
    }
  },
  mounted() {
    this.setPieCharts();
  },
  methods: {
    setPieCharts() {
      // 饼图
      this.mycharts = echarts.getInstanceByDom(this.$refs.charts); // 有的话就获取已有echarts实例的DOM节点
      if (this.mycharts == null) { // 如果不存在，就进行初始化。
        this.mycharts = echarts.init(this.$refs.charts);
      }
      this.mycharts.setOption({
        title: {
          text: '视频广告',
          subtext: 300,
          left: 'center',
          top: 'center',
          textStyle: {
            fontSize: 15,
            fontWeight: "400",
            lineHeight: 22
          },
          subtextStyle: {
            fontSize: 30,
            fontWeight: "500",
            fontFamily: "Arial"
          }
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: true,
              position: 'outside',
              formatter: '{b}: {c}',
            },
            labelLine: {
              show: true,
            },
            data: [
              { value: 1048, name: '搜索引擎' },
              { value: 735, name: '直接访问' },
              { value: 580, name: '邮件营销' },
              { value: 484, name: '联盟广告' },
              { value: 300, name: '视频广告' }
            ]
          }
        ]
      })

      // 绑定事件
      this.mycharts.on('mouseover', (params) => {
        // 获取鼠标移上去那条数据
        const { name, value } = params.data;
        // 重新设置标题
        this.mycharts.setOption({
          title: {
            text: name,
            subtext: value,
          },
        })
      });
    }
  }
}
</script>
<style scoped>
.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.charts {
  width: 100%;
  height: 300px;
}
</style>
