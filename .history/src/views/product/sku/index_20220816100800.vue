<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-11 16:21:47
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-16 10:07:13
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
      <el-table-column prop="prop" label="操作"></el-table-column>
    </el-table>
    <!-- 分页 @size-change="handleSizeChange" @current-change="getSpuList"-->
    <el-pagination :total="total" :current-page="page" :page-sizes="[3, 5, 10]" :page-size="limit"
      layout="prev,pager,next,jumper,->,sizes,total" style="text-align:center"></el-pagination>
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
    };
  },
  mounted() {
    // 获取sku列表的方法
    this.getSkuList();
  },
  methods: {
    // 获取sku列表数据
    async getSkuList() {
      // 解构默认参数
      const { page, limit } = this;
      let result = await this.$API.sku.reqSkuList(page, limit);
      if (result.code == 200) {
        this.total = result.data.total;
        this.records = result.data.records;
      }
    }
  },
};
</script>
<style scoped>
</style>
