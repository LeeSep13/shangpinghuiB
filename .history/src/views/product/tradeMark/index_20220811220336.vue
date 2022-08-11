<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-11 16:21:47
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-11 22:03:28
 * @FilePath: \shangpinghui-bs\src\views\product\tradeMark\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <div>
    <el-button type="primary" icon="el-icon-plus" style="margin: 10px 0px">添加</el-button>
    <el-table style="width:100%" border :data="list">
      <el-table-column type="index" label="序号" width="80px" align="center"></el-table-column>
      <el-table-column prop="tmName" label="品牌名称"></el-table-column>
      <el-table-column prop="logoUrl" label="品牌LOGO">
        <template slot-scope="{row,$index}">
          <img :src="row.logoUrl" alt="" style="width:100px;height:100px">
        </template>
      </el-table-column>
      <el-table-column prop="tmName" label="操作">
        <template slot-scope="{row,$index}">
          <el-button type="waring" icon="el-icon-edit" size="mini">修改</el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination :total="99" :current-page="6" :page-size="3" :pager-count="7" :page-sizes="[3, 5, 10]"
      layout="prev,pager,next,jumper,->,sizes,total" style="margin-top:20px;textAlign:center"></el-pagination>
  </div>
</template>

<script>
export default {
  name: "tradeMark",
  components: {},
  data() {
    return {
      // 代表分页器第几页
      page: 1,
      // 当前页数展示数据条数
      limit: 3,
      // 总共数据条数
      total: 0,
      // 列表展示的数据
      list: []
    };
  },
  mounted() {
    // 获取列表数据方法
    this.getPageList();
  },
  methods: {
    // 获取品牌列表的数据
    async getPageList() {
      const { page, limit } = this;
      // 获取品牌列表的接口
      let result = await this.$API.trademark.reqTradeMarkList(page, limit)
      console.log("1111" + result);
      if (result.code == 200) {
        this.total = result.data.total;
        this.list = result.data.records;
      }
    }
  },
};
</script>
<style scoped>
</style>
