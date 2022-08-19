<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-16 17:43:18
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-16 21:49:04
 * @FilePath: \shangpinghui-bs\src\views\dashboard\Card\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6">
        <el-card>
          <Detail title="总销售额" count="￥126560">
            <template slot="charts">
              <span v-html="'周同比\u00a0\u00a0\u00a0\u00a056.67%'"></span><i class="el-icon-caret-top"
                style="color:red"></i>
              <i v-html="'\u00a0\u00a0\u00a0\u00a0'"></i>
              <span v-html="'日同比\u00a0\u00a0\u00a0\u00a019.96%'"></span><i class="el-icon-caret-bottom"
                style="color:#48f550;"></i>
            </template>
            <template slot="footer">
              <span>日销售额￥12423</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail title="访问量" count="88460">
            <template slot="charts">
              <lineCharts />
            </template>
            <template slot="footer">
              <span v-html="'日访问量\u00a0\u00a01234'"></span>
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail title="支付笔数" count="88460">
            <template slot="footer">
              <span v-html="'转化率\u00a0\u00a065%'"></span>
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail title="运营活动效果" count="78%">
            <template slot="footer">
              <span v-html="'周同比\u00a0\u00a0\u00a0\u00a012%'"></span><i class="el-icon-caret-top" style="color:red"></i>
              <i v-html="'\u00a0\u00a0\u00a0\u00a0'"></i>
              <span v-html="'日同比\u00a0\u00a0\u00a0\u00a011%'"></span><i class="el-icon-caret-bottom"
                style="color:#48f550;"></i>
            </template>
          </Detail>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Detail from './Detail'
import lineCharts from './lineChart'
export default {
  name: 'Card',
  components: {
    Detail,
    lineCharts,
  },
  data() {
    return {

    }
  },
}
</script>
<style scoped>
</style>
