<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-11 16:21:47
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-14 10:53:55
 * @FilePath: \shangpinghui-bs\src\views\product\spu\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <div>
    <el-card style="margin:20px 0px">
      <CategorySelect @getCategoryId="getCategoryId" :show="!show" />
    </el-card>
    <el-card>
      <div>
        <!-- 展示SPU列表的结构 -->
        <el-button type="primary" icon="el-icon-plus">添加SPU</el-button>
        <el-table style="width:100%" border :data="records">
          <el-table-column type="index" label="序号" width="80" align="center"></el-table-column>
          <el-table-column prop="spuName" label="SPU名称"></el-table-column>
          <el-table-column prop="description" label="SPU描述"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="{row,$index}">
              <hint-button type="info" icon="el-icon-info" size="mini" title="添加sku"></hint-button>
              <hint-button type="waring" icon="el-icon-edit" size="mini" title="修改spu"></hint-button>
              <hint-button type="delete" icon="el-icon-delete" size="mini" title="查看当前spu全部sku列表"></hint-button>
              <hint-button type="success" icon="el-icon-plus" size="mini" title="删除spu"></hint-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination :total="23" :current-page="6" :page-sizes="[3, 5, 10]" :page-size="3"
          layout="prev,pager,next,jumper,->,sizes,total" style="text-align:center"></el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "spu",
  data() {
    return {
      category1Id: '',
      category2Id: '',
      category3Id: '',
      // 三级联动的可操作性
      show: true,
      page: 1, // 分页器当前第几页
      limit: 3, // 每一页需要展示多少条数据
      records: [], // spu列表的数据
      total: 0, // 分页器一共需要展示数据的条数
    };
  },
  methods: {
    // 三级联动的自定义事件,可以把子组件的相应id传递给父组件
    getCategoryId({ categoryId, level }) {
      // categoryId:获取一  二  三级分类的id level:为了区分几级id
      if (level == 1) {
        this.category1Id = categoryId;
        // 清除二,三级分类的id
        this.category2Id = '';
        this.category3Id = '';
      } else if (level == 2) {
        this.category2Id = categoryId;
        this.category3Id = '';
      } else {
        // 代表三级分类的id有了
        this.category3Id = categoryId;
        // 获取SPU列表数据进行展示
        this.getSpuList();
      }
    },
    // 获取SPU列表数据的方法
    async getSpuList() {
      const { page, limit, category3Id } = this;
      // 携带三次参数：page第几页 limit每一页需要展示多少条数据 三级分类id
      let result = await this.$API.spu.reqSpuList(page, limit, category3Id);
      if (result.code == 200) {
        this.total = result.data.total;
        this.records = result.data.records;
      }
    }
  }
};
</script>
<style scoped>
</style>
