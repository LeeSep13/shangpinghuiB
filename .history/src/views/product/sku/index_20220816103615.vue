<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-11 16:21:47
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-16 10:36:15
 * @FilePath: \shangpinghui-bs\src\views\product\sku\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <div>
    <!-- 表格 -->
    <el-table style="width:100%" border :data="records">
      <el-table-column type="index" label="序号" width="80" align="center"></el-table-column>
      <el-table-column prop="skuName" label="名称"></el-table-column>
      <el-table-column prop="skuDesc" label="描述"></el-table-column>
      <el-table-column label="默认图片" width="110">
        <template slot-scope="{row,$index}">
          <img :src="row.skuDefaultImg" style="width:80px;height:80px;">
        </template>
      </el-table-column>
      <el-table-column prop="weight" label="重量" width="80"></el-table-column>
      <el-table-column prop="price" label="价格" width="80"></el-table-column>
      <el-table-column prop="prop" label="操作">
        <template slot-scope="{row,$index}">
          <el-button type="success" icon="el-icon-bottom" size="mini" v-if="row.isSale == 0" @click="sale(row)">
          </el-button>
          <el-button type="success" icon="el-icon-top" size="mini" v-else @click="cancel(row)"></el-button>
          <el-button type="primary" icon="el-icon-edit" size="mini" @click="edit"></el-button>
          <el-button type="info" icon="el-icon-info" size="mini" @click="getSkuInfo(row)"></el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination @size-change="handleSizeChange" @current-change="getSkuList" :total="total" :current-page="page"
      :page-sizes="[3, 5, 10]" :page-size="limit" layout="prev,pager,next,jumper,->,sizes,total"
      style="text-align:center"></el-pagination>
  </div>
</template>

<script>
export default {
  name: "sku",
  components: {},
  data() {
    return {
      page: 1,
      limit: 10,
      records: [], // 存储SKU列表的数据
      total: 0, // 存储分页器一共展示的数据
      skuInfo: {}, // 存储SKU信息
    };
  },
  mounted() {
    // 获取sku列表的方法
    this.getSkuList();
  },
  methods: {
    // 获取sku列表数据
    async getSkuList(pages = 1) {
      this.page = pages;
      // 解构默认参数
      const { page, limit } = this;
      let result = await this.$API.sku.reqSkuList(page, limit);
      if (result.code == 200) {
        this.total = result.data.total;
        this.records = result.data.records;
      }
    },
    handleSizeChange(limit) {
      // 修改参数
      this.limit = limit;
      this.getSkuList();
    },
    // 上架
    async sale(row) {
      let result = await this.$API.sku.reqSale(row.id);
      if (result.code == 200) {
        row.isSale = 1;
        this.$message({ type: 'success', message: '上架成功' })
      }
    },
    // 下架
    async cancel(row) {
      let result = await this.$API.sku.reqCancel(row.id);
      if (result.code == 200) {
        row.isSale = 0;
        this.$message({ type: 'success', message: '下架成功' })
      }
    },
    edit() {
      this.$message({ message: '正在开发中' })
    },
    // 获取SKU详情的方法
    async getSkuInfo(sku) {
      let result = await this.$API.sku.reqSkuById(sku.id);
      if (result.code == 200) {
        this.skuInfo = result.data;
      }
    }
  },
};
</script>
<style scoped>
</style>
