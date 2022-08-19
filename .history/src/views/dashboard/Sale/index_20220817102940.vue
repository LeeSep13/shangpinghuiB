<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-16 23:04:34
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-17 10:29:13
 * @FilePath: \shangpinghui-bs\src\views\dashboard\Sale\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <el-card class="box-card" style="margin:10px 0px">
    <div slot="header" class="clearfix">
      <!--  @tab-click="handleClick" -->
      <!-- 头部左侧内容 -->
      <el-tabs class="tab" v-model="activeName">
        <el-tab-pane label="销售额" name="销售额"></el-tab-pane>
        <el-tab-pane label="访问量" name="访问量"></el-tab-pane>
      </el-tabs>
      <!-- 头部右侧内容 -->
      <div class="right">
        <span>今日</span>
        <span>本周</span>
        <span>本月</span>
        <span>本年</span>
        <!-- v-model="value1" -->
        <el-date-picker class="date" type="daterange" range-separator="-" start-placeholder="开始日期"
          end-placeholder="结束日期" size="mini">
        </el-date-picker>
      </div>
    </div>
    <div>
      <el-row :gutter="10">
        <el-col :span="16">
          <div class="charts" ref="charts">

          </div>
        </el-col>
        <el-col :span="8">
          <h3>门店销售额排名</h3>
          <ul>
            <li>
              <span class="rindex">1</span>
              <span>肯德基</span>
              <span>123456</span>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'Sale',
  components: {},
  data() {
    return {
      activeName: "销售额",
    }
  },
  mounted() {
    // 初始化echarts实例
    let mycharts = echarts.init(this.$refs.charts);
    mycharts.setOption({
      title: {
        text: "销售额趋势"
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Direct',
          type: 'bar',
          barWidth: '60%',
          data: [400, 90, 200, 334, 390, 330, 220, 180, 90, 200, 150, 290]
        }
      ]
    })
  }
}
</script>
<style scoped>
.clearfix {
  position: relative;
  display: flex;
  justify-content: space-between;
}

.tab {
  width: 100%;
}

.right {
  position: absolute;
  right: 0px;
}

.date {
  width: 250px;
  margin: 0 20px;
}

.right span {
  font-size: 14px;
  margin: 0 10px;
}

/deep/.el-tabs__item {
  /* 修改为您想要的文字大小 */
  font-size: 20px !important;
}

.charts {
  width: 100%;
  height: 300px;
}

ul {
  list-style: none;
  width: 100%;
  height: 300px;
  padding: 0px;
}

ul li {
  height: 8%;
}

.rindex {
  float: left;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: black;
  color: white;
  text-align: center;
}
</style>
