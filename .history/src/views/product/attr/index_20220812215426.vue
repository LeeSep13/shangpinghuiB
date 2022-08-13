<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-11 16:21:47
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-12 21:54:26
 * @FilePath: \shangpinghui-bs\src\views\product\attr\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <div>
    <el-card style="margin:20px 0px">
      <CategorySelect @getCategoryId="getCategoryId" />
    </el-card>
    <el-card>
      <el-button type="primary" icon="el-icon-plus">添加属性</el-button>
      <!-- 表格：展示平台属性 -->
      <el-table style="width: 100%;" border :data="attrList">
        <el-table-column type="index" label="序号" width="80" align="center"></el-table-column>
        <el-table-column prop="attrName" label="属性名称" width="150"></el-table-column>
        <el-table-column prop="prop" label="属性值列表">
          <template slot-scope="{row,$index}">
            <el-tag type="success" v-for="(attrValue, index) in row.attrValueList" :key="attrValue.id"
              style="margin:0px 20px">
              {{ attrValue.valueName }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "attr",
  components: {},
  data() {
    return {
      category1Id: '',
      category2Id: '',
      category3Id: '',
      // 接受平台属性的字段
      attrList: [],
    };
  },
  methods: {
    // 自定义事件的回调
    getCategoryId({ categoryId, level }) {
      // 区分三级分类相应的id，以及父组件进行存储
      if (level == 1) {
        this.category1Id = categoryId;
        this.category2Id = '';
        this.category3Id = '';
      } else if (level == 2) {
        this.category2Id = categoryId;
        this.category3Id = '';
      } else {
        // 代表三级分类的id有了
        this.category3Id = categoryId;
        // 发请求获取平台属性的数据
        this.getAttrList();
      }
    },
    // 获取平台属性的数据
    // 当用户确定三级分类数据的时候，可以向服务器发请求获取平台属性进行展示
    async getAttrList() {
      // 获取分类的ID
      const { category1Id, category2Id, category3Id } = this;
      let result = await this.$API.attr.reqAttrList(category1Id, category2Id, category3Id)
      if (result.code == 200) {
        this.attrList = result.data;
      }
    }
  }
};
</script>
<style scoped>
</style>
