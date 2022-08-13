<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-12 17:27:42
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-12 20:43:42
 * @FilePath: \shangpinghui-bs\src\components\CategorySelect\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <div>
    <!-- inline：代表的是行内表单，代表一行可以放置多个表单元素 -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline" :model="cForm">
      <el-form-item label="一级分类">
        <el-select placeholder="请选择">
          <el-option label="c1.name" value="c1.id" v-for="(c1, index) in list" :key="c1.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="二级分类" value="">
        <el-select placeholder="请选择">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="三级分类" value="">
        <el-select placeholder="请选择">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'CategorySelect',
  components: {},
  data() {
    return {
      // 一级分类的数据
      list: [],
      // 收集相应的一级二级三级分类的id
      cForm: {
        category1Id: '',
        category3Id: '',
        category2Id: '',
      }
    }
  },
  mounted() {
    this.getCategory1List();
  },
  methods: {
    // 获取一级分类数据的方法
    async getCategory1List() {
      // 获取一级分类的请求，不需要携带参数
      let result = await this.$API.attr.reqCategory1List();
      if (result.data == 200) {
        this.list = result.data
      }
    }
  },
}
</script>
<style scoped>
</style>
