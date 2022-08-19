<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-16 23:04:34
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-17 21:35:04
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
        <ul v-if="this.activeName == 'sale'">
          <li v-for="(store, index) in storeranking.sale" :key="index">
            <!-- circle -->
            <span class="rindex" :class="{ circle: index < 3 }">{{ index + 1 }}</span>
            <span class="pl30">{{ store.name }}</span>
            <span class="rvalue">{{ store.volume }}</span>
          </li>
        </ul>
        <ul v-else>
          <li v-for="(store, index) in storeranking.visits" :key="index">
            <span class="rindex" :class="{ circle: index < 3 }">{{ index + 1 }}</span>
            <span class="pl30">{{ store.name }}</span>
            <span class="rvalue">{{ store.volume }}</span>
          </li>
        </ul>
      </div>
    </div>
  </el-card>
</template>

<script>
import * as echarts from 'echarts'
import dayjs from 'dayjs'
import { mapState } from 'vuex'
export default {
  name: 'Sale',
  data() {
    return {
      activeName: "sale",
      mycharts: null,
      // 收集日历数据
      date: [],
      // 收集门店排名数据
      storeranking: {
        sale: [
          { name: '肯德基', volume: '323,234' },
          { name: '麦当劳', volume: '299,132' },
          { name: '肯德基', volume: '283,998' },
          { name: '海底捞', volume: '266,223' },
          { name: '西北筱面村', volume: '223,445' },
          { name: '汉堡王', volume: '219,663' },
          { name: '真功夫', volume: '200,997' },
        ],
        visits: [
          { name: '麦当劳', volume: '211,335' },
          { name: '肯德基', volume: '210,597' },
          { name: '必胜客', volume: '200,998' },
          { name: '海底捞', volume: '199,220' },
          { name: '西北筱面村', volume: '195,444' },
          { name: '汉堡王', volume: '180,161' },
          { name: '真功夫', volume: '172,995' },
        ]
      }
    }
  },
  mounted() {
    this.setSaleCharts();
  },
  computed: {
    // 计算属性--标题
    title() {
      return this.activeName == 'sale' ? "销售额" : "访问量"
    },
    ...mapState({
      listState: state => state.home.list
    })
  },
  watch: {
    title() {
      if (this.activeName === 'sale') {
        this.setSaleCharts();
      } else {
        // 重新修改图表的配置数据
        // 图表配置数据可以再次修改，如果有新的数值用新的，没有新的话用旧数据
        this.setVisitsCharts();
      }
    }
  },
  methods: {
    // 销售额柱状图echarts
    setSaleCharts() {
      // 初始化echarts实例
      this.mycharts = echarts.getInstanceByDom(this.$refs.charts); // 有的话就获取已有echarts实例的DOM节点
      if (this.mycharts == null) { // 如果不存在，就进行初始化。
        this.mycharts = echarts.init(this.$refs.charts);
      }
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
            data: [],
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
            data: [],
            barWidth: "40%"
          }
        ]
      })
    },
    // 访问量柱状图echarts
    setVisitsCharts() {
      this.mycharts.setOption({
        title: {
          text: this.title + "趋势",
        },
        xAxis: {
          data: this.listState.orderFullYearAxis
        },
        series: [
          {
            data: [110, 120, 90, 220, 170, 210, 190, 90, 80, 120, 250, 310],
          }
        ]
      })
    },
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
  border-bottom: none
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
