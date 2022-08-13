<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-11 16:21:47
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-12 21:30:03
 * @FilePath: \shangpinghui-bs\src\views\product\attr\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <div>
    <el-card style="margin:20px 0px">
      <CategorySelect @getCategoryId="getCategoryId" />
    </el-card>
    <el-card></el-card>
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
    };
  },
  methods: {
    // 自定义事件的回调
    getCategoryId({ categoryId, level }) {
      if (level == 1) {
        this.category1Id = categoryId;
      } else if (level == 2) {
        this.category2Id = categoryId;
      } else {
        this.category3Id = categoryId;
      }
    }
  }
};
</script>
<style scoped>
</style>
