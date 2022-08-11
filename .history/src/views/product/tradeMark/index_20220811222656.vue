<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-11 16:21:47
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-11 22:26:56
 * @FilePath: \shangpinghui-bs\src\views\product\tradeMark\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <div>
    <!-- 按钮 -->
    <el-button type="primary" icon="el-icon-plus" style="margin: 10px 0px" @click="addTradeMark">添加</el-button>
    <!-- 表格 -->
    <el-table style="width:100%" border :data="list">
      <el-table-column type="index" label="序号" width="80px" align="center"></el-table-column>
      <el-table-column prop="tmName" label="品牌名称"></el-table-column>
      <el-table-column prop="logoUrl" label="品牌LOGO">
        <template slot-scope="{row,$index}">
          <img :src="row.logoUrl" alt="" style="width:70px;height:70px">
        </template>
      </el-table-column>
      <el-table-column prop="tmName" label="操作">
        <template slot-scope="{row,$index}">
          <el-button type="waring" icon="el-icon-edit" size="mini" @click="updateTradeMark">修改</el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
    <el-pagination :total="total" :current-page="page" :page-size="limit" :pager-count="7" :page-sizes="[3, 5, 10]"
      @current-change="getPageList" @size-change="handleSizeChange" layout="prev,pager,next,jumper,->,sizes,total"
      style="margin-top:20px;textAlign:center">
    </el-pagination>
    <!-- 对话框 -->
    <el-dialog title="添加品牌" :visible.sync="dialogFormVisible">
      <!-- form表单 -->
      <el-form>
        <el-form-item label="品牌名称" label-width="100px">
          <el-input autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
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
      list: [],
      // 对话框显示与隐藏控制的属性
      dialogFormVisible: false
    };
  },
  mounted() {
    // 获取列表数据方法
    this.getPageList();
  },
  methods: {
    // 获取品牌列表的数据
    async getPageList(pager = 1) {
      this.page = pager;
      const { page, limit } = this;
      // 获取品牌列表的接口
      let result = await this.$API.trademark.reqTradeMarkList(page, limit)
      console.log("1111" + result);
      if (result.code == 200) {
        this.total = result.data.total;
        this.list = result.data.records;
      }
    },

    // 当分页器某一页需要展示数据条数发生变化的时候会触发
    handleSizeChange(limit) {
      this.limit = limit;
      this.getPageList();
    },

    // 添加品牌
    addTradeMark() {
      this.dialogFormVisible = true;
    },

    // 修改某一品牌
    updateTradeMark() {
      this.dialogFormVisible = true;
    }

  },
};
</script>
<style scoped>
</style>
