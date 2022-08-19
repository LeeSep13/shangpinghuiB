<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-17 17:11:29
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-17 23:21:11
 * @FilePath: \shangpinghui-bs\src\views\dashboard\Observe\Category\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <el-card>
    <div slot="header">
      <div class="category-header">
        <span>销售额类别占比</span>
        <el-radio-group v-model="value" size="mini">
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
import { mapState } from 'vuex'
export default {
  name: 'Category',
  components: {},
  data() {
    return {
      value: "全部渠道",
      mycharts: null,
    }
  },
  mounted() {
    this.setPieCharts();
  },
  computed: {
    ...mapState({
      listState: state => state.home.list
    })
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
          text: '',
          subtext: '',
          left: 'center',
          top: 'center',
          itemGap: 15,
          textStyle: {
            fontSize: 14,
            fontWeight: "300",
          },
          subtextStyle: {
            fontSize: 30,
            fontWeight: "700",
            fontFamily: "Arial",

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
            data: this.listState.saleRank.online
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
    },
    // 线上饼状图
    onlineCharts() {
      this.mycharts.setOption({
        title: {
          text: this.listState.saleRank.online[0].name,
          subtext: this.listState.saleRank.online[0].value,
        },
        series: [
          {
            data: this.listState.saleRank.online,
          }
        ]
      })
    },
    // 门店饼状图
    shopCharts() {
      this.mycharts.setOption({
        title: {
          text: this.listState.saleRank.shop[0].name,
          subtext: this.listState.saleRank.shop[0].value,
        },
        series: [
          {
            data: this.listState.saleRank.shop,
          }
        ]
      })
    }
  },
  watch: {
    listState() {
      if (this.value === '全部渠道') {
        this.setPieCharts();
      } else if (this.value === '线上') {
        this.onlineCharts();
      } else {
        this.shopCharts();
      }
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
