<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-16 23:04:34
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-17 10:06:21
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
        <el-tab-pane label="销售额" name="销售额" class="f20"></el-tab-pane>
        <el-tab-pane label="访问量" name="访问量" class="f20"></el-tab-pane>
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
        <el-col :span="16">123</el-col>
        <el-col :span="8">456</el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>

export default {
  name: 'Sale',
  components: {},
  data() {
    return {
      activeName: "销售额",
    }
  },
}
</script>
<style scoped>
.f20 {
  font-size: 20px;
}

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
</style>
