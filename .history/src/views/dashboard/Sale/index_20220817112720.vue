<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-16 23:04:34
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-17 11:27:20
 * @FilePath: \shangpinghui-bs\src\views\dashboard\Sale\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <el-card class="box-card" style="margin:10px 0px">
    <div slot="header" class="flexbet" style="position: relative;">
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
    <div class="flexbet">
      <!-- <el-row :gutter="10" style="width:100%">
        <el-col :span="17">

        </el-col>
        <el-col :span="7" style="padding:0px 20px">

        </el-col>

      </el-row> -->
      <div class="charts" ref="charts">
      </div>
      <div style="width:27%">
        <p style="margin-top: 5px;font-size: 14px;">门店销售额排名</p>
        <ul>
          <li>
            <span class="rindex circle">1</span>
            <span class="pl30">肯德基</span>
            <span class="rvalue">323,234</span>
          </li>
          <li>
            <span class="rindex circle">2</span>
            <span class="pl30">肯德基</span>
            <span class="rvalue">323,234</span>
          </li>
          <li>
            <span class="rindex circle">3</span>
            <span class="pl30">肯德基</span>
            <span class="rvalue">323,234</span>
          </li>
          <li>
            <span class="rindex">4</span>
            <span class="pl30">肯德基</span>
            <span class="rvalue">323,234</span>
          </li>
          <li>
            <span class="rindex">5</span>
            <span class="pl30">肯德基</span>
            <span class="rvalue">323,234</span>
          </li>
          <li>
            <span class="rindex">6</span>
            <span class="pl30">肯德基</span>
            <span class="rvalue">323,234</span>
          </li>
          <li>
            <span class="rindex">7</span>
            <span class="pl30">肯德基</span>
            <span class="rvalue">323,234</span>
          </li>

        </ul>

      </div>
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
        text: "销售额趋势",
        left: "3%",
        top: "5%",
        textStyle: {
          fontSize: 14
        },
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
.pl30 {
  padding-left: 30px;
}

.clearfix {
  position: relative;
  display: flex;
  justify-content: space-between;
}

.flexbet {
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
}

.right span {
  font-size: 14px;
  margin: 0 10px;
}

/deep/.el-tabs__item {
  /* 修改为您想要的文字大小 */
  font-size: 20px !important;
}

/deep/.el-card__body {
  padding: 0px 20px 20px;

}

/deep/.el-card__header {
  padding: 18px 20px 0px 20px;
}

.charts {
  width: 70%;
  height: 300px;
}

ul {
  list-style: none;
  width: 100%;
  height: 300px;
  padding: 0px;
}

ul li {
  height: 10%;
  margin: 10px 0px;
}

.circle {
  border-radius: 50%;
  background: black;
  color: white;
}

.rindex {
  float: left;
  width: 20px;
  height: 20px;
  text-align: center;
}

.rvalue {
  float: right;
  padding-right: 15px;
}
</style>
