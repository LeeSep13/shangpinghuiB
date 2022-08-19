<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-16 23:04:34
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-17 12:05:15
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
        <el-tab-pane label="销售额" name="sale"></el-tab-pane>
        <el-tab-pane label="访问量" name="visits"></el-tab-pane>
      </el-tabs>
      <!-- 头部右侧内容 -->
      <div class="right">
        <span @click="setDay">今日</span>
        <span @click="setWeek">本周</span>
        <span @click="setMonth">本月</span>
        <span @click="setYear">本年</span>
        <el-date-picker v-model="date" class="date" type="daterange" range-separator="-" start-placeholder="开始日期"
          end-placeholder="结束日期" size="mini" value-format="yyyy-MM-dd">
        </el-date-picker>
      </div>
    </div>
    <div class="flexbet">
      <div class="charts" ref="charts">
      </div>
      <div style="width:25%">
        <p style="margin-top: 5px;font-size: 14px;">门店{{ title }}排名</p>
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
import dayjs from 'dayjs'
export default {
  name: 'Sale',
  components: {},
  data() {
    return {
      activeName: "sale",
      mycharts: null,
      // 收集日历数据
      date: [],
    }
  },
  mounted() {
    // 初始化echarts实例
    this.mycharts = echarts.init(this.$refs.charts);
    this.mycharts.setOption({
      title: {
        text: this.title + "趋势",
        top: "6%",
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
          data: [410, 90, 200, 334, 390, 330, 220, 180, 90, 200, 150, 290],
          barWidth: "40%"
        }
      ]
    })
  },
  computed: {
    // 计算属性--标题
    title() {
      return this.activeName == 'sale' ? "销售额" : "访问量"
    }
  },
  watch: {
    title() {
      // 重新修改图表的配置数据
      //
      this.mycharts.setOption({
        title: {
          text: this.title + "趋势",
        }
      })
    }
  },
  methods: {
    // 本天
    setDay() {
      const day = dayjs().format('YYYY-MM-DD');
      this.date = [day, day];
    },
    // 本周
    setWeek() {
      const start = dayjs().day(1).format('YYYY-MM-DD')
      const end = dayjs().day(7).format('YYYY-MM-DD')
      this.date = [start, end]
    },
    // 本月
    setMonth() {
      const start = dayjs().startOf('month').format('YYYY-MM-DD')
      const end = dayjs().endOf('month').format('YYYY-MM-DD')
      this.date = [start, end]
    },
    // 本年
    setYear() {
      const start = dayjs().startOf('year').format('YYYY-MM-DD')
      const end = dayjs().endOf('year').format('YYYY-MM-DD')
      this.date = [start, end]
    }
  }
}
</script>
<style scoped>
.pl30 {
  padding-left: 30px;
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
  width: 73%;
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
