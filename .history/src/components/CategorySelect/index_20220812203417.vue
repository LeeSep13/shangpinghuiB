<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-12 17:27:42
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-12 20:34:17
 * @FilePath: \shangpinghui-bs\src\components\CategorySelect\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <div>
    <!-- inline：代表的是行内表单，代表一行可以放置多个表单元素 -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="一级分类">
        <el-select placeholder="请选择" value="">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
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
      console.log(result);
    }
  },
}
</script>
<style scoped>
</style>
